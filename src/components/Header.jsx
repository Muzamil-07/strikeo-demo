import React, { useEffect, useState } from "react";
import { logo } from "../assets";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUser } from "../redux/slices/User";
import { toggleTheme } from "../redux/slices/Theme";
import { toast } from "react-toastify";
import { CgProfile } from "react-icons/cg";
import http from "../api";
import { IoIosArrowDown } from "react-icons/io";
import { setSelectedCategory } from "../redux/slices/Category";
import { LiaUserEditSolid } from "react-icons/lia";
import { MdOutlineReviews } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import Tabs from "./Tabs";
import ClipLoader from "react-spinners/ClipLoader";
import { environment } from "../constants";
import { removeBillingAddress } from "../redux/slices/Billing";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const searchCategory = searchParams.get("category");
  const defaultProfile = {
    username: "",
    profileImage: "",
    file: "",
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [isUsernameModalOpen, setUsernameModalOpen] = useState(false);
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [editProfileForm, setEditProfileForm] = useState(defaultProfile);
  const [editProfileFormErrors, setEditProfileFormErrors] = useState({
    username: "",
  });
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [tabsData, setTabsData] = useState([
    {
      title: "To Review",
      emptyText: "There’s no item to review",
      isLoading: false,
      orders: [],
    },
    {
      title: "History",
      emptyText: "You have not written any reviews yet",
      isLoading: false,
      orders: [],
    },
  ]);
  const [productToReview, setProductToReview] = useState();
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);

  const user = useSelector((state) => state.user);
  const categories = useSelector((state) => state.categories);

  const handleShowModal = () => {
    setEditProfileForm({
      username: user.details?.username,
      profileImage: user.details?.profileImage,
      file: "",
    });
    setDropdownOpen(false);
    setUsernameModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditProfileForm(defaultProfile);
    setEditProfileFormErrors({
      username: "",
    });
    setUsernameModalOpen(false);
  };

  const handleShowReview = () => {
    setDropdownOpen(false);
    setReviewModalOpen(true);
    getPengingReviews();
  };

  const handleCloseReview = () => {
    setReviewModalOpen(false);
  };

  const toggleCategories = () => {
    if (isDropdownOpen) setDropdownOpen(false);
    setCategoriesDropdownOpen(!isCategoriesDropdownOpen);
  };

  const handleToggleDropdown = () => {
    if (isCategoriesDropdownOpen) setCategoriesDropdownOpen(false);
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(removeBillingAddress());
    toast.success("You have been logged out!");
    navigate("login");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setEditProfileForm({
          ...editProfileForm,
          profileImage: reader.result,
          file,
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const getPengingReviews = async () => {
    const prevData = [...tabsData];
    prevData[0].isLoading = true;
    setTabsData(prevData);
    try {
      const res = await http.get("/product/pending-review");

      prevData[0].orders = res.data.data;
    } catch (error) {
      console.log(error);
    } finally {
      prevData[0].isLoading = false;
      setTabsData([...prevData]);
    }
  };

  const getReviewedProducts = async () => {
    const prevData = [...tabsData];
    prevData[1].isLoading = true;
    setTabsData(prevData);
    try {
      const res = await http.get("/product/reviewed");

      prevData[1].orders = res.data.data;
    } catch (error) {
      console.log(error);
    } finally {
      prevData[1].isLoading = false;
      setTabsData([...prevData]);
    }
  };

  const onTabChange = (index) => {
    if (index === 0) {
      getPengingReviews();
    } else {
      getReviewedProducts();
    }
  };

  const addReview = async () => {
    if (!productToReview.review) {
      toast.error("Please write a review first!");
    }
    setIsSubmittingReview(true);
    try {
      const res = await http.post(
        `/product/${productToReview.product.id}/review`,
        {
          orderId: productToReview.orderId,
          rating: productToReview.rating,
          review: productToReview.review,
        }
      );
      toast.success("Review added successfully!");
      setProductToReview();
      getPengingReviews();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmittingReview(false);
    }
  };

  const updateProfile = async () => {
    if (!editProfileForm.username || !editProfileForm.username.trim()) {
      setEditProfileFormErrors({ username: "Username cannot be empty!" });
      return;
    }
    if (
      editProfileForm.username.trim() === user.details?.username &&
      editProfileForm.profileImage === user.details?.profileImage
    ) {
      toast.success("Profile updated successfully!");
      return;
    }

    setIsUpdatingProfile(true);
    try {
      let file = editProfileForm.file;
      let formData = new FormData();
      formData.append("file", file);

      let imgData;
      if (editProfileForm.profileImage !== user.details?.profileImage) {
        const res = await http.post(
          environment.file_url + "/upload",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        imgData = res.data;
      }

      const res = await http.put("user/update-profile", {
        profileImage:
          editProfileForm.profileImage !== user.details?.profileImage
            ? imgData[0]?.[editProfileForm?.file?.name]
            : "",
        username:
          editProfileForm.username !== user.details?.username
            ? editProfileForm.username
            : "",
      });

      const { role, ...details } = res.data.data;
      dispatch(setUser(details));
      setEditProfileForm({
        username: details.username,
        profileImage: details.profileImage,
        file: "",
      });
      setEditProfileFormErrors({
        username: "",
      });
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.log(error);

      const errorMessage = "username: is invalid";
      const errorMessage1 = "Username already taken!";
      const isUsernameTaken =
        error.response.data?.message &&
        error.response.data.message === errorMessage1;
      const regex = new RegExp(errorMessage, "i");

      if (
        error.response.data?.message &&
        regex.test(error.response.data.message)
      ) {
        setEditProfileFormErrors({ username: "Username is invalid!" });
      } else if (isUsernameTaken) {
        toast.error("Username already taken!");
      } else {
        toast.error("Failed to update username!");
      }
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  return (
    <div className="flex justify-between items-center px-8 md:px-16 py-5 md:pt-5 md:pb-2 sticky inset-x-0 top-0 z-[99] dark:bg-primary">
      <img
        src={logo}
        alt="logo"
        className="w-20 md:w-32 cursor-pointer dark:filter-none filter invert"
        onClick={() => navigate("/")}
      />
      <div className="self-start mt-5 flex gap-10 items-center">
        <button
          type="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm mr-4"
          onClick={() => dispatch(toggleTheme())}
        >
          <svg
            className="dark:hidden w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            className="hidden dark:block w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <Link to="/" className="cursor-pointer">
          Home
        </Link>
        {categories.selectedCategory && (
          <div className="relative">
            <div className="flex items-center gap-2">
              <Link
                to={`/shop?category=${categories.selectedCategory}`}
                className="cursor-pointer"
              >
                {categories.selectedCategory}
              </Link>
              <button
                onClick={toggleCategories}
                className="text-[20px] rounded-sm hover:bg-zinc-500 outline-none"
              >
                <IoIosArrowDown className="inline-block" />
              </button>
            </div>
            <ul
              className={`absolute right-0 rounded-xl overflow-hidden mt-2 ${
                isCategoriesDropdownOpen ? "block" : "hidden"
              } bg-white border border-gray-300 text-gray-700 w-28`}
            >
              {categories.data.map((category) => (
                <li
                  key={category.id}
                  className="px-4 py-2 hover:bg-gray-100 text-ellipsis"
                >
                  <Link
                    to={`/shop?category=${category.name}`}
                    onClick={() => {
                      toggleCategories();
                      dispatch(setSelectedCategory(category.name));
                    }}
                    className="cursor-pointer"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Link to="/orders" className="cursor-pointer">
          Orders
        </Link>

        <div className="relative text-[16px]">
          <button className="flex items-center rounded gap-2 outline-none">
            {/* <CgProfile className="inline-block" /> */}
            <div className="w-7 h-7 rounded-full overflow-hidden flex justify-center items-center bg-blue-600 text-white">
              {user.details?.profileImage ? (
                <img src={user?.details?.profileImage} alt="avatar" />
              ) : (
                <>
                  {user?.details?.username
                    ? user?.details?.username[0]
                    : user?.details?.email[0]}
                </>
              )}
            </div>
            <div
              onClick={handleToggleDropdown}
              className="flex items-center gap-2 rounded px-1 py-1"
            >
              {user?.details?.username?.length > 7
                ? user?.details?.username?.slice(0, 5) + "..."
                : user?.details?.username}
              <IoIosArrowDown className="inline-block" />
            </div>
          </button>
          <ul
            className={`absolute right-0 rounded-xl overflow-hidden mt-2 ${
              isDropdownOpen
                ? "flex flex-col justify-evenly h-40 pl-4"
                : "hidden"
            } bg-white border border-gray-300 text-gray-700 w-48 text-[15px]`}
          >
            <li>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleShowModal}
              >
                <LiaUserEditSolid className="inline-block" />
                Profile Setting
              </div>
            </li>
            {/* <li>
							<div className="cursor-pointer">Change Avatar</div>
						</li> */}
            <li>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleShowReview}
              >
                <MdOutlineReviews className="inline-block" />
                My Reviews
              </div>
            </li>
            <li>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogout();
                }}
              >
                <TbLogout2 className="inline-block" />
                Logout
              </div>
            </li>
          </ul>
        </div>
      </div>
      {isUsernameModalOpen && (
        <>
          <div className=" fixed left-0 top-0 bg-black bg-opacity-25 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"></div>
          <div className="fixed max-w-[550px] m-auto  inset-0 flex items-center justify-center z-[1065]">
            <div className="bg-white p-7 relative shadow-lg rounded-2xl shadow-primary-500/50 w-full">
              <h3 className="text-2xl font-semibold text-center text-black mb-4">
                Profile Settings
              </h3>
              <div className="flex justify-center gap-4 mt-2 mb-4">
                <div className="w-32 max-w-32 h-32 max-h-32 relative cursor-pointer">
                  <label
                    htmlFor="profile-image"
                    className="absolute top-0 left-0 w-full h-full z-[9999] cursor-pointer"
                  >
                    <input
                      type="file"
                      id="profile-image"
                      accept="image/*"
                      onClick={(event) => {
                        event.target.value = null;
                      }}
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <span className="flex justify-center items-center w-full h-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 bg-black bg-opacity-50 text-white rounded-full">
                      Upload
                    </span>
                  </label>
                  {editProfileForm?.profileImage ? (
                    <img
                      src={editProfileForm?.profileImage}
                      alt="avatar"
                      className="w-full h-full rounded-full"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full overflow-hidden flex justify-center items-center bg-blue-600 text-white">
                      {user?.details?.username[0]}
                    </div>
                  )}
                  {/* <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center bg-black bg-opacity-50 text-white rounded-full">
										Choose
									</div> */}
                </div>
              </div>
              <div className="text-gray-500 my-2">
                <span>Enter Username:</span>
                <input
                  type="text"
                  value={editProfileForm?.username}
                  onChange={(e) =>
                    setEditProfileForm({
                      ...editProfileForm,
                      username: e.target.value,
                    })
                  }
                  className="my-4 text-black border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-800"
                />
                {editProfileFormErrors?.username && (
                  <div className="text-red-500 text-sm">
                    {editProfileFormErrors?.username}
                  </div>
                )}
              </div>

              <div className="flex justify-end items-center mt-2 gap-4">
                <button
                  disabled={isUpdatingProfile}
                  onClick={() => updateProfile()}
                  className="flex justify-center items-center gap-2 px-4 py-2 border border-white bg-primary hover:opacity-90 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isUpdatingProfile && (
                    <ClipLoader color="#ffffff" size={20} />
                  )}
                  Save
                </button>
                <button
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={() => handleCloseModal()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      {isReviewModalOpen && (
        <>
          <div className=" fixed left-0 top-0 bg-black bg-opacity-25 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"></div>
          <div className="fixed max-w-[550px] m-auto  inset-0 flex items-center justify-center z-[1065]">
            <div className="bg-white p-5 relative shadow-lg rounded-2xl shadow-primary-500/50 w-full">
              <Tabs
                data={tabsData}
                onTabChange={onTabChange}
                setProductToReview={setProductToReview}
                productToReview={productToReview}
              />

              <div className="flex justify-end items-center mt-2 gap-4">
                {productToReview ? (
                  <>
                    <button
                      onClick={() => setProductToReview()}
                      className="px-4 py-2 bg-primary hover:opacity-90 text-white focus:ring-1 focus:outline-none rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Back
                    </button>
                    <button
                      disabled={isSubmittingReview}
                      onClick={addReview}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:opacity-90 text-white focus:ring-1 focus:outline-none rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmittingReview && (
                        <ClipLoader color="#ffffff" size={20} />
                      )}{" "}
                      Submit
                    </button>
                  </>
                ) : (
                  <button
                    className="bg-primary hover:opacity-90 text-white focus:ring-2 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10"
                    onClick={() => handleCloseReview()}
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
