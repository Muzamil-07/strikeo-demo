import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import countryList from "country-list";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import http from "../api";
import { environment } from "../constants";
import ClipLoader from "react-spinners/ClipLoader";
import validator from "validator";
import countries from "../data/countries.json";
import cities from "../data/cities.json";
import AddForm from "./AddForm";

const Stepper = ({ getVendors, setView }) => {
	const vendorBtnRef = useRef();
	const [step, setStep] = useState(1);
	// const [passwordType, setPasswordType] = useState("password");
	const [actionLoader, setActionLoader] = useState({
		company: false,
		vendor: false,
	});
	const [company, setCompany] = useState({
		name: "",
		description: "",
		contact: {
			email: "",
			phone: "",
		},
		country: "",
		city: "",
		zipCode: "",
		address: "",
		postalAddress: "",
		principalPOB: "",
		website: "",
		logo: "",
		file: "",
	});
	const defaultCompanyErrors = {
		name: null,
		description: null,
		contact: {
			email: null,
			phone: null,
		},
		country: null,
		city: null,
		zipCode: null,
		address: null,
		postalAddress: null,
		website: null,
		logo: null,
	};
	const [companyErrors, setCompanyErrors] = useState(defaultCompanyErrors);
	const [vendor, setVendor] = useState({
		firstName: "",
		lastName: "",
		alias: "",
		gender: "male",
		country: "",
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
	});
	const defaultVendorErrors = {
		firstName: null,
		lastName: null,
		alias: null,
		gender: null,
		country: null,
		dob: null,
		contact: {
			phone: null,
			email: null,
			address: null,
		},
		profileImage: null,
	};
	const [vendorErrors, setVendorErrors] = useState(defaultVendorErrors);

  const selectedCountry = countries.find(
    (country) => country.name === company?.country
  );
  const states =
    cities[
      selectedCountry?.name?.split(" ").join("_") +
        "-" +
        selectedCountry?.isoCode
    ];
  const citiesAvailable = Object.values(states || {}).flatMap((stateCities) =>
    stateCities.map((city) => city)
  ).sort((a, b) => a.name.localeCompare(b.name));
  // console.log(citiesAvailable, "citiesAvailable");

  const handleCompanyChange = (key, value) => {
    if (key.includes(".")) {
      const [parentKey, childKey] = key.split(".");
      setCompany({
        ...company,
        [parentKey]: {
          ...company[parentKey],
          [childKey]: value,
        },
      });
    } else {
      setCompany({ ...company, [key]: value });
    }
  };

  const handleVendorChange = (key, value) => {
    if (key.includes(".")) {
      const [parentKey, childKey] = key.split(".");
      setVendor({
        ...vendor,
        [parentKey]: {
          ...vendor[parentKey],
          [childKey]: value,
        },
      });
    } else {
      setVendor({ ...vendor, [key]: value });
    }
  };

  const handleImageChange = (e, isCompanyLogo) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (isCompanyLogo) {
          setCompany({ ...company, logo: reader.result, file });
        } else {
          setVendor({ ...vendor, profileImage: reader.result, file });
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const validateCompany = () => {
    const errors = {
      contact: {},
    };

    if (!company.name.trim()) {
      errors.name = "Name of company is required";
    }

    if (!company.country) {
      errors.country = "Country is required";
    }

    if (!company.city.trim()) {
      errors.city = "City is required";
    }

    if (!company.address.trim()) {
      errors.address = "Address is required";
    }

		if (!company.principalPOB.trim()) {
			errors.principalPOB = "Principal place of business is required";
		}

		if (!company.postalAddress.trim()) {
			errors.postalAddress = "Postal address is required";
		}

    if (!company.zipCode.trim()) {
      errors.zipCode = "Zip code is required";
    }

    if (!company.contact.email.trim()) {
      errors.contact.email = "Email is required";
    }

    if (!company.contact.phone.trim()) {
      errors.contact.phone = "Phone is required";
    }

    if (
      Object.keys(errors).length > 1 ||
      Object.keys(errors.contact).length > 0
    ) {
      setCompanyErrors(errors);
      return;
    } else {
      setCompanyErrors(defaultCompanyErrors);
      if (company.id) {
        updateCompany();
      } else {
        createCompany();
      }
    }
  };

  const validateVendor = () => {
    const errors = {
      contact: {},
    };

    if (!vendor.firstName.trim()) {
      errors.firstName = "First name is required";
    }

    if (!vendor.lastName.trim()) {
      errors.lastName = "Last name is required";
    }

    if (!vendor.gender.trim()) {
      errors.gender = "Gender is required";
    }

    if (!vendor.country.trim()) {
      errors.country = "Country is required";
    }

    if (!vendor.dob.trim()) {
      errors.dob = "Date of birth is required";
    }

    if (!vendor.contact.phone.trim()) {
      errors.contact.phone = "Phone is required";
    }

    if (!validator.isMobilePhone(vendor.contact.phone)) {
      errors.contact.phone = "Phone number is invalid";
    }

    if (
      vendor.contact.secondaryPhone &&
      !validator.isMobilePhone(vendor.contact.secondaryPhone)
    ) {
      errors.contact.secondaryPhone = "Secondary phone number is invalid";
    }

    if (
      vendor.emergencyContact.phone &&
      !validator.isMobilePhone(vendor.emergencyContact.phone)
    ) {
      errors.emergencyContact.phone = "Emergency phone number is invalid";
    }

    if (!vendor.contact.email.trim()) {
      errors.contact.email = "Email is required";
    }

    if (!vendor.contact.address.trim()) {
      errors.contact.address = "Address is required";
    }

    if (!vendor.file) {
      errors.profileImage = "Profile image is required";
    }

    // if (!vendor.email.trim()) {
    // 	errors.email = "Email is required";
    // }

    // if (!vendor.password.trim()) {
    // 	errors.password = "Password is required";
    // }

    if (
      Object.keys(errors).length > 1 ||
      Object.keys(errors.contact).length > 0
    ) {
      setVendorErrors(errors);
      return;
    } else {
      setVendorErrors(defaultVendorErrors);
      createVendor();
    }
  };

  const createVendor = async () => {
    await vendorBtnRef.current.validateUser();
  };

  const createCompany = async () => {
    setActionLoader({ ...actionLoader, company: true });
    try {
      let file = company.file;
      let formData = new FormData();
      formData.append("file", file);

      let imgData;
      if (company.file) {
        const res = await http.post(
          environment.file_url + "/upload",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        imgData = res.data;
      }

      // console.log("imgData: ", imgData[0]?.[company?.file?.name]);

      const res = await http.post("company", {
        ...company,
        logo: company.file ? imgData[0]?.[company?.file?.name] : "",
      });

      // console.log(res.data.data, "company created");
      toast.success("Company created successfully");
      setCompany(res.data.data);
      setStep(step + 1);
    } catch (error) {
      console.log(error);
      const errorMessage = error.response?.data?.message;
      toast.error(errorMessage || "Failed to create company");
    }
    setActionLoader({ ...actionLoader, company: false });
  };

  const updateCompany = async () => {
    setActionLoader({ ...actionLoader, company: true });
    try {
      let file = company.file;
      let formData = new FormData();
      formData.append("file", file);

      let imgData;
      if (company.file) {
        const res = await http.post(
          environment.file_url + "/upload",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        imgData = res.data;
      }

      // console.log("imgData: ", imgData[0]?.[company?.file?.name]);

      const res = await http.put("company/" + company.id, {
        ...company,
        logo: company.file
          ? imgData[0]?.[company?.file?.name]
          : company.logo
          ? company.logo
          : "",
      });

      // console.log(res.data.data, "company updated");
      toast.success("Company updated successfully");
      setCompany(res.data.data);
      setStep(step + 1);
    } catch (error) {
      console.log(error);
      toast.error("Failed to update company");
    }
    setActionLoader({ ...actionLoader, company: false });
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit your form to server or any desired action
  };

  return step === 2 ? (
    <div className="grid grid-cols-10">
      <div className="col-span-2 flex flex-col pt-[25vh] gap-4 px-5">
        <div className="flex justify-center items-center">
          <ol class="relative h-min text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="mb-10 ms-6 text-blue-600">
              <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white">
                <svg
                  class="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
              <h3 class="font-medium leading-tight">Company Info</h3>
              <p class="text-sm">Company details here</p>
            </li>
            <li class="ms-6">
              <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                <svg
                  class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
              <h3 class="font-medium leading-tight">Vendor Info</h3>
              <p class="text-sm">Vendor details here</p>
            </li>
          </ol>
        </div>
        <button
          onClick={prevStep}
          className="flex items-center justify-center gap-4 mt-4 px-4 w-full py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
        >
          <BiLeftArrowAlt />
          Go Back
        </button>
        <button
          onClick={createVendor}
          disabled={actionLoader.vendor}
          className="flex items-center justify-center gap-4 mt-4 px-4 w-full py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
        >
          Add Vendor{" "}
          {actionLoader.vendor ? (
            <ClipLoader size={20} color="#201F20" />
          ) : (
            <BiRightArrowAlt />
          )}
        </button>
      </div>

      <div className="col-span-8">
        <AddForm
          userType="vendor"
          updateView={setView}
          getUsers={getVendors}
          company={company}
          ref={vendorBtnRef}
          setActionLoader={setActionLoader}
        />
      </div>
    </div>
  ) : step === 1 ? (
    <div className="flex">
      <div className="flex flex-col justify-center gap-4 pl-5 pr-24">
        <div className="flex justify-center items-center">
          <ol class="relative h-min text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
            <li class="mb-10 ms-6 text-blue-600">
              <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18 15h-2v2h2m0-6h-2v2h2m2 6h-8v-2h2v-2h-2v-2h2v-2h-2V9h8M10 7H8V5h2m0 6H8V9h2m0 6H8v-2h2m0 6H8v-2h2M6 7H4V5h2m0 6H4V9h2m0 6H4v-2h2m0 6H4v-2h2m6-10V3H2v18h20V7H12Z"
                  />
                </svg>
              </span>
              <h3 class="font-medium leading-tight">Company Info</h3>
              <p class="text-sm">Company details here</p>
            </li>
            <li class="ms-6">
              <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                <svg
                  class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
              <h3 class="font-medium leading-tight">Vendor Info</h3>
              <p class="text-sm">Vendor details here</p>
            </li>
          </ol>
        </div>
        <button
          onClick={validateCompany}
          disabled={actionLoader.company}
          className="flex items-center justify-center gap-4 mt-4 px-4 w-full py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
        >
          Proceed{" "}
          {actionLoader.company ? (
            <ClipLoader size={20} color="#201F20" />
          ) : (
            <BiRightArrowAlt />
          )}
        </button>
      </div>

      <div className="flex-1">
        <div className="w-2/3 flex flex-col gap-3 mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-4 flex flex-col gap-2">
              <div className="flex flex-col gap-2 w-64">
                <label>Company Name*</label>
                <input
                  required
                  type="text"
                  value={company.name}
                  onChange={(e) => handleCompanyChange("name", e.target.value)}
                  className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full"
                />
                {companyErrors.name && (
                  <div className="text-red-500 text-sm">
                    {companyErrors.name}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 w-64">
                <label> Select Country*</label>
                <select
                  required
                  value={company?.country}
                  onChange={(e) =>
                    handleCompanyChange("country", e.target.value)
                  }
                  className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full"
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option value={country.name}>{country.name}</option>
                  ))}
                </select>
                {companyErrors.country && (
                  <div className="text-red-500 text-sm">
                    {companyErrors.country}
                  </div>
                )}
              </div>
            </div>
            <div className="col-span-4"></div>
            <div className="col-span-4 flex justify-center gap-4">
              <div className="w-32 max-w-32 h-32 max-h-32 relative cursor-pointer">
                <label
                  htmlFor="profile-image-2"
                  className="absolute top-0 left-0 w-full h-full z-[9999] cursor-pointer"
                >
                  <input
                    type="file"
                    id="profile-image-2"
                    accept="image/*"
                    onClick={(event) => {
                      event.target.value = null;
                    }}
                    onChange={(e) => handleImageChange(e, true)}
                    className="hidden"
                  />
                  <span className="flex justify-center items-center w-full h-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 bg-black bg-opacity-50 text-white rounded-full">
                    Logo
                  </span>
                </label>
                {company?.logo ? (
                  <img
                    src={company?.logo}
                    alt="avatar"
                    className="w-full h-full rounded-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full rounded-full overflow-hidden flex justify-center items-center bg-black bg-opacity-50 text-white">
                    Logo
                  </div>
                )}
              </div>
              {companyErrors.logo && (
                <div className="text-red-500 text-sm">{companyErrors.logo}</div>
              )}
            </div>
          </div>

					<div className="flex justify-between">
						<div className="flex flex-col gap-2 w-64">
							<label className="w-56">City*</label>
							<select
								required
								value={company?.city}
								disabled={!company?.country}
								onChange={(e) => handleCompanyChange("city", e.target.value)}
								className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full">
								<option value="">Select City</option>
								{citiesAvailable?.map((city) => (
									<option value={city.name}>{city.name}</option>
								))}
							</select>
							{companyErrors.city && <div className="text-red-500 text-sm">{companyErrors.city}</div>}
						</div>
						<div className="flex flex-col gap-2 w-64">
							<label className="w-56">Zip Code/Postal Code*</label>
							<input
								required
								type="text"
								value={company?.zipCode}
								onChange={(e) => handleCompanyChange("zipCode", e.target.value)}
								className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full"
							/>
							{companyErrors.zipCode && <div className="text-red-500 text-sm">{companyErrors.zipCode}</div>}
						</div>
					</div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-2 w-64">
              <label className="w-56">Contact Email*</label>
              <input
                required
                type="text"
                value={company?.contact?.email}
                onChange={(e) =>
                  handleCompanyChange("contact.email", e.target.value)
                }
                className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full"
              />
              {companyErrors.contact.email && (
                <div className="text-red-500 text-sm">
                  {companyErrors.contact.email}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 w-64">
              <label className="w-56">Contact Number*</label>
              <input
                required
                type="text"
                value={company?.contact?.phone}
                onChange={(e) =>
                  handleCompanyChange("contact.phone", e.target.value)
                }
                className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full"
              />
              {companyErrors.contact.phone && (
                <div className="text-red-500 text-sm">
                  {companyErrors.contact.phone}
                </div>
              )}
            </div>
          </div>

					<div className="flex flex-col gap-2">
						<label className="w-56">Principal Place Of Business*</label>
						<input
							required
							type="text"
							value={company?.principalPOB}
							onChange={(e) => handleCompanyChange("principalPOB", e.target.value)}
							className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full"
						/>
						{companyErrors.principalPOB && <div className="text-red-500 text-sm">{companyErrors.principalPOB}</div>}
					</div>

					<div className="flex flex-col gap-2">
						<label className="w-56">Current Address*</label>
						<input
							required
							type="text"
							value={company?.address}
							onChange={(e) => handleCompanyChange("address", e.target.value)}
							className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full"
						/>
						{companyErrors.address && <div className="text-red-500 text-sm">{companyErrors.address}</div>}
					</div>

          <div className="flex flex-col gap-2">
            <label className="w-56">Postal Address*</label>
            <input
              required
              type="text"
              value={company?.postalAddress}
              onChange={(e) =>
                handleCompanyChange("postalAddress", e.target.value)
              }
              className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full"
            />
            {companyErrors.postalAddress && (
              <div className="text-red-500 text-sm">
                {companyErrors.postalAddress}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="w-56">Website</label>
            <input
              required
              type="text"
              placeholder="https://www.example.com"
              value={company?.website}
              onChange={(e) => handleCompanyChange("website", e.target.value)}
              className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full"
            />
            {companyErrors.website && (
              <div className="text-red-500 text-sm">
                {companyErrors.website}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="w-56">Description</label>
            <textarea
              required
              type="text"
              value={company?.description}
              onChange={(e) =>
                handleCompanyChange("description", e.target.value)
              }
              className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full"
            />
            {companyErrors.description && (
              <div className="text-red-500 text-sm">
                {companyErrors.description}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Stepper;
