import { useState, forwardRef, useImperativeHandle } from "react";
import validator from "validator";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import countries from "../data/countries.json";
import cities from "../data/cities.json";
import http from "../api";
import { environment } from "../constants";

// eslint-disable-next-line react/display-name
const AddForm = forwardRef(
  (
    {
      updateView,
      getUsers,
      roles,
      setVendor,
      company,
      userType,
      setActionLoader,
      step,
      setStep,
      vendor,
    },
    ref
  ) => {
    const defaultSelectedUser = {
      firstName: "",
      lastName: "",
      alias: "",
      gender: "male",
      country: "",
      city: "",
      zipCode: "",
      dob: "",
      contact: {
        phone: "",
        secondaryPhone: "",
        email: "",
        address: "",
      },
      emergencyContact: {
        phone: "",
        name: "",
      },
      profileImage: "",
      file: "",
      roleId: "",
    };
    const errorsBody = {
      firstName: null,
      lastName: null,
      alias: null,
      gender: null,
      country: null,
      city: null,
      zipCode: null,
      dob: null,
      contact: {
        phone: null,
        email: null,
        address: null,
      },
      profileImage: null,
      roleId: null,
    };
    const [selectedUser, setSelectedUser] = useState(
      vendor || defaultSelectedUser
    );

    const [errors, setErrors] = useState(errorsBody);
    const [isAddingUser, setIsAddingUser] = useState(false);

    const selectedCountry = countries.find(
      (country) => country.name === selectedUser?.country
    );
    const states =
      cities[
        selectedCountry?.name?.split(" ").join("_") +
          "-" +
          selectedCountry?.isoCode
      ];
    const citiesAvailable = Object.values(states || {})
      .flatMap((stateCities) => stateCities.map((city) => city))
      .sort((a, b) => a.name.localeCompare(b.name));

    const handleImageChange = (e) => {
      const file = e.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
          setSelectedUser({
            ...selectedUser,
            profileImage: reader.result,
            file,
          });
        };

        reader.readAsDataURL(file);
      }
    };

    const handleUserChange = (key, value) => {
      if (key.includes(".")) {
        const [parentKey, childKey] = key.split(".");
        setSelectedUser({
          ...selectedUser,
          [parentKey]: {
            ...selectedUser[parentKey],
            [childKey]: value,
          },
        });
      } else {
        setSelectedUser({ ...selectedUser, [key]: value });
      }
    };

    const validateUser = () => {
      const errors = {
        contact: {},
        emergencyContact: {},
      };

      if (!selectedUser.firstName.trim()) {
        errors.firstName = "First name is required";
      }

      if (!selectedUser.lastName.trim()) {
        errors.lastName = "Last name is required";
      }

      if (!selectedUser.gender.trim()) {
        errors.gender = "Gender is required";
      }

      if (!selectedUser.country.trim()) {
        errors.country = "Country is required";
      }

      if (!selectedUser.dob.trim()) {
        errors.dob = "Date of birth is required";
      }

      if (!selectedUser.contact.phone.trim()) {
        errors.contact.phone = "Phone is required";
      }

      if (!validator.isMobilePhone(selectedUser.contact.phone)) {
        errors.contact.phone = "Phone number is invalid";
      }

      if (
        selectedUser.contact.secondaryPhone &&
        !validator.isMobilePhone(selectedUser.contact.secondaryPhone)
      ) {
        errors.contact.secondaryPhone = "Secondary phone number is invalid";
      }

      if (
        selectedUser.emergencyContact.name &&
        !selectedUser.emergencyContact.phone.trim()
      ) {
        errors.emergencyContact.phone = "Emergency phone is required with name";
      }

      if (
        selectedUser.emergencyContact.phone &&
        !selectedUser.emergencyContact.name.trim()
      ) {
        errors.emergencyContact.name = "Emergency name is required with phone";
      }

      if (
        selectedUser.emergencyContact.phone &&
        !validator.isMobilePhone(selectedUser.emergencyContact.phone)
      ) {
        errors.emergencyContact.phone = "Emergency phone number is invalid";
      }

      if (userType !== "agent" && !selectedUser.contact.email.trim()) {
        errors.contact.email = "Email is required";
      } else if (
        !selectedUser.contact.email.includes("@") ||
        !selectedUser.contact.email.includes(".com")
      ) {
        errors.contact.email = "Enter valid email";
      }

      if (!selectedUser.contact.address.trim()) {
        errors.contact.address = "Address is required";
      }

      if (!selectedUser.profileImage) {
        errors.profileImage = "Profile image is required";
      }

      // Conditional validation for user type
      if (userType === "employee") {
        if (!selectedUser.roleId.trim()) {
          errors.roleId = "Role is required";
        }
      }
      if (userType === "vendor") {
        if (!company?.id) {
          company.id = null;
          // toast.error("Company is required");
          // return;
        }
      }
      if (userType === "agent") {
        if (!selectedUser.city.trim()) {
          errors.city = "City is required";
        }
        if (!selectedUser.zipCode.trim()) {
          errors.zipCode = "Zip code is required";
        }
      }

      if (
        Object.keys(errors).length > 2 ||
        Object.keys(errors.contact).length > 0 ||
        Object.keys(errors.emergencyContact).length > 0
      ) {
        setErrors(errors);
        return;
      } else {
        setErrors(errorsBody);
        if (selectedUser?.id) {
          updateUser();
        } else {
          addUser();
        }
      }
    };

    const updateUser = async () => {
      setIsAddingUser(true);
      if (userType === "vendor") {
        setActionLoader((prevLoader) => ({ ...prevLoader, vendor: true }));
      } else {
        setIsAddingUser(true);
      }
      try {
        let file = selectedUser.file;
        let formData = new FormData();
        formData.append("file", file);

        let imgData;
        if (selectedUser.file) {
          const res = await http.post(
            environment.file_url + "/upload",
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          imgData = res.data;
        }

        // eslint-disable-next-line no-unused-vars
        const res = await http.put("vendor/" + selectedUser?.id, {
          ...selectedUser,
          profileImage: imgData
            ? imgData[0]?.[selectedUser?.file?.name]
            : selectedUser?.profileImage,
        });

        if (userType === "vendor") {
          setVendor(res?.data?.data);
          setStep(step + 1);
        }
        const successMsg =
          userType === "vendor"
            ? "Vendor updated successfully!"
            : userType === "agent"
            ? "Agent updated successfully!"
            : "Employee updated successfully!";
        toast.success(successMsg);
      } catch (error) {
        toast.error("Failed to update vendor!");
      }
      setIsAddingUser(false);
      if (userType === "vendor") {
        setActionLoader((prevLoader) => ({ ...prevLoader, vendor: false }));
      } else {
        setIsAddingUser(false);
      }
    };

    const addUser = async () => {
      try {
        setIsAddingUser(true);
        if (userType === "vendor") {
          setActionLoader((prevLoader) => ({ ...prevLoader, vendor: true }));
        } else {
          setIsAddingUser(true);
        }
        let file = selectedUser.file;
        let formData = new FormData();
        formData.append("file", file);

        let imgData;
        if (selectedUser.file) {
          const res = await http.post(
            environment.file_url + "/upload",
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          imgData = res.data;
        }

        let apiUrl = "/company/add-employee";
        if (userType === "vendor") {
          apiUrl = "vendor";
        }
        if (userType === "agent") {
          apiUrl = "agent";
        }

        let apiData = {
          ...selectedUser,
          profileImage: imgData[0]?.[selectedUser?.file?.name],
          file: undefined,
        };
        if (userType === "vendor") {
          apiData = {
            ...apiData,
            company: company.id,
          };
          delete apiData.roleId;
        }
        if (userType === "agent") {
          delete apiData.roleId;
        }
        const res = await http.post(apiUrl, apiData);
        if (userType === "vendor") {
          setVendor(res?.data?.data);
          setStep(step + 1);
        }
        const successMsg =
          userType === "vendor"
            ? "Vendor added successfully!"
            : userType === "agent"
            ? "Agent added successfully!"
            : "Employee added successfully!";
        toast.success(successMsg);
      } catch (error) {
        const errorMessage =
          error.response?.data?.message ?? "Something went wrong.";
        toast.error(errorMessage);
      }
      setIsAddingUser(false);
      if (userType === "vendor") {
        setActionLoader((prevLoader) => ({ ...prevLoader, vendor: false }));
      } else {
        setIsAddingUser(false);
      }
    };

    useImperativeHandle(ref, () => ({
      validateUser,
    }));

    return (
      <div>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-8">
            <div className="mt-5 grid grid-cols-12 gap-5">
              <div className="col-span-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm">First Name*</label>
                  <input
                    required
                    type="text"
                    value={selectedUser?.firstName}
                    onChange={(e) =>
                      handleUserChange("firstName", e.target.value)
                    }
                    className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-2"
                  />
                  {errors.firstName && (
                    <div className="text-red-500 text-sm">
                      {errors.firstName}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex flex-col gap-2">
                  {userType === "employee" ? (
                    <>
                      <label className="text-sm">Role*</label>
                      <select
                        required
                        defaultValue=""
                        onChange={(e) =>
                          handleUserChange("roleId", e.target.value)
                        }
                        className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-2"
                        aria-label="Select Role"
                      >
                        <option value="" disabled>
                          Select Role
                        </option>
                        {roles &&
                          roles.map((role) => (
                            <option key={role.key} value={role.id}>
                              {role.name}
                            </option>
                          ))}
                      </select>
                      {errors.roleId && (
                        <div className="text-red-500 text-sm">
                          {errors.roleId}
                        </div>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-12 gap-5">
              <div className="col-span-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm">Last Name*</label>
                  <input
                    required
                    type="text"
                    value={selectedUser?.lastName}
                    onChange={(e) =>
                      handleUserChange("lastName", e.target.value)
                    }
                    className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-2"
                  />
                  {errors.lastName && (
                    <div className="text-red-500 text-sm">
                      {errors.lastName}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-span-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm">{`Email${
                    userType !== "agent" ? "*" : ""
                  }`}</label>
                  <input
                    required
                    type="email"
                    value={selectedUser?.contact?.email}
                    onChange={(e) =>
                      handleUserChange("contact.email", e.target.value)
                    }
                    className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-2"
                  />
                  {errors.contact?.email && (
                    <div className="text-red-500 text-sm">
                      {errors.contact?.email}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 pt-12">
            <div className="w-32 max-w-32 h-32 max-h-32 mx-auto relative cursor-pointer">
              <label htmlFor="profile-image" className="cursor-pointer">
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
              {selectedUser?.profileImage ? (
                <img
                  src={selectedUser?.profileImage}
                  alt="avatar"
                  className="w-full h-full rounded-full object-contain"
                />
              ) : (
                <div className="w-full h-full rounded-full overflow-hidden flex justify-center items-center bg-black bg-opacity-50 text-white">
                  Upload
                </div>
              )}
            </div>
            <div className="py-1">
              {errors.profileImage && (
                <div className="text-red-500 text-sm text-center">
                  {errors.profileImage}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3 mt-3">
          <div className="col-span-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm">Gender*</label>
              <select
                required
                value={selectedUser?.gender}
                onChange={(e) => handleUserChange("gender", e.target.value)}
                className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-2 w-full"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <div className="text-red-500 text-sm">{errors.gender}</div>
              )}
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm">Alias</label>
              <input
                required
                type="text"
                value={selectedUser?.alias}
                onChange={(e) => handleUserChange("alias", e.target.value)}
                className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-2"
              />
              {errors.alias && (
                <div className="text-red-500 text-sm">{errors.alias}</div>
              )}
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm">Date of Birth*</label>
              <input
                required
                type="date"
                value={selectedUser?.dob}
                onChange={(e) => handleUserChange("dob", e.target.value)}
                className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-2"
              />
              {errors.dob && (
                <div className="text-red-500 text-sm">{errors.dob}</div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3 mt-3">
          <div className="col-span-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm">Primary Contact*</label>
              <input
                required
                type="number"
                value={selectedUser?.contact?.phone}
                onChange={(e) =>
                  handleUserChange("contact.phone", e.target.value)
                }
                className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-2"
              />
              {errors.contact?.phone && (
                <div className="text-red-500 text-sm">
                  {errors.contact?.phone}
                </div>
              )}
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm">Secondary Contact</label>
              <input
                required
                type="number"
                value={selectedUser?.contact?.secondaryPhone}
                onChange={(e) =>
                  handleUserChange("contact.secondaryPhone", e.target.value)
                }
                className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-2"
              />
            </div>
            {errors.contact?.secondaryPhone && (
              <div className="text-red-500 text-sm">
                {errors.contact?.secondaryPhone}
              </div>
            )}
          </div>
          <div className="col-span-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm">Country*</label>
              <select
                required
                value={selectedUser?.country}
                onChange={(e) => handleUserChange("country", e.target.value)}
                className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-2 w-full"
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option value={country.name}>{country.name}</option>
                ))}
              </select>
              {errors.country && (
                <div className="text-red-500 text-sm">{errors.country}</div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3 mt-3">
          <div className="col-span-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm">Emergency Contact Name</label>
              <input
                required
                type="text"
                value={selectedUser?.emergencyContact?.name}
                onChange={(e) =>
                  handleUserChange("emergencyContact.name", e.target.value)
                }
                className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-2"
              />
              {errors.emergencyContact?.name && (
                <div className="text-red-500 text-sm">
                  {errors.emergencyContact?.name}
                </div>
              )}
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm">Emergency Contact Number</label>
              <input
                required
                type="number"
                value={selectedUser?.emergencyContact?.phone}
                onChange={(e) =>
                  handleUserChange("emergencyContact.phone", e.target.value)
                }
                className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-2"
              />
              {errors.emergencyContact?.phone && (
                <div className="text-red-500 text-sm">
                  {errors.emergencyContact?.phone}
                </div>
              )}
            </div>
          </div>
          {userType === "agent" && (
            <div className="col-span-4">
              <div className="flex flex-col gap-2">
                <label className="w-56 text-sm">City*</label>
                <select
                  required
                  value={selectedUser?.city}
                  disabled={!selectedUser?.country}
                  onChange={(e) => handleUserChange("city", e.target.value)}
                  className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-2 w-full"
                >
                  <option value="">Select City</option>
                  {citiesAvailable?.map((city) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <div className="text-red-500 text-sm">{errors.city}</div>
                )}
              </div>
            </div>
          )}
          {userType === "agent" && (
            <div className="col-span-4">
              <div className="flex flex-col gap-2">
                <label className="w-56 text-sm">Zip Code/Postal Code*</label>
                <input
                  required
                  type="text"
                  value={selectedUser?.zipCode}
                  onChange={(e) => handleUserChange("zipCode", e.target.value)}
                  className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-2 w-full"
                />
                {errors.zipCode && (
                  <div className="text-red-500 text-sm">{errors.zipCode}</div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="mt-3">
          <div className="flex flex-col gap-3">
            <label className="text-sm">Address*</label>
            <textarea
              rows={3}
              value={selectedUser?.contact?.address}
              onChange={(e) =>
                handleUserChange("contact.address", e.target.value)
              }
              className={
                "outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-2"
              }
            />
            {errors.contact?.address && (
              <div className="text-red-500 text-sm">
                {errors.contact?.address}
              </div>
            )}
          </div>
        </div>
        {(userType === "employee" || userType === "agent") && (
          <div className="flex justify-end mt-3">
            <button
              className="flex items-center justify-end gap-4 mt-4 px-4 py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
              onClick={() => validateUser()}
            >
              {isAddingUser && <ClipLoader color="#ffffff" size={20} />}
              Add {userType === "employee" ? "Employee" : "Agent"}
            </button>
          </div>
        )}
      </div>
    );
  }
);

export default AddForm;
