/* eslint-disable react/prop-types */
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
// import { productPlaceholder } from "../../../assets";
// import { checkImage } from "../../../utils/image";
import http from "../../../api";
import Orders from "./Orders";
import { toast } from "react-toastify";
import { environment } from "../../../constants";
import countryList from "country-list";
import countries from "../../../data/countries.json";
import cities from "../../../data/cities.json";
import validator from "validator";

const VendorTabs = ({ selectedVendor, setSelectedVendor, getVendors, currentPage }) => {
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const [mode, setMode] = useState("view");
	const [vendor, setVendor] = useState(selectedVendor);
	const [actionLoader, setActionLoader] = useState({
		vendor: false,
		company: false,
	});
	const defaultCompanyErrors = {
		name: null,
		description: null,
		contact: {
			email: null,
			phone: null,
		},
		country: null,
		address: null,
		postalAddress: null,
		website: null,
		logo: null,
	};
	const [companyErrors, setCompanyErrors] = useState(defaultCompanyErrors);
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
		roleId: null,
	};
	const [vendorErrors, setVendorErrors] = useState(defaultVendorErrors);
	const selectedCountry = countries.find((country) => country.name === selectedVendor?.company?.country);
	const states = cities[selectedCountry?.name?.split(" ").join("_") + "-" + selectedCountry?.isoCode];
	const citiesAvailable = Object.values(states || {}).flatMap((stateCities) => stateCities.map((city) => city));
	const [availableCities, setAvailableCities] = useState(citiesAvailable);

	const handleImageChange = (e, isCompanyLogo) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				if (isCompanyLogo) {
					setVendor({
						...vendor,
						company: { ...vendor?.company, logo: reader.result, file },
					});
				} else {
					setVendor({ ...vendor, profileImage: reader.result, file });
				}
			};

			reader.readAsDataURL(file);
		}
	};

	const getVendor = async () => {
		try {
			const res = await http.get("vendor/" + selectedVendor?.id);

			setSelectedVendor(res.data.data);
			setVendor(res.data.data);
		} catch (error) {
			console.log(error);
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

		if (!vendor.contact.email.trim()) {
			errors.contact.email = "Email is required";
		} else {
			if (!validator.isEmail(vendor.contact.email)) {
				errors.contact.email = "Invalid email address";
			}
		}

		if (!vendor.contact.phone.trim()) {
			errors.contact.phone = "Phone number is required";
		} else {
			if (!validator.isMobilePhone(vendor.contact.phone)) {
				errors.contact.phone = "Invalid phone number";
			}
		}

		if (!vendor.contact.address.trim()) {
			errors.contact.address = "Address is required";
		}

		if (!vendor.country.trim()) {
			errors.country = "Country is required";
		}

		if (!vendor.dob.trim()) {
			errors.dob = "Date of birth is required";
		} else {
			if (new Date(vendor.dob).getTime() > new Date().getTime()) {
				errors.dob = "Invalid date of birth";
			}
		}

		if (Object.keys(errors).length > 1 || Object.keys(errors.contact).length > 0) {
			setVendorErrors(errors);
			return;
		} else {
			setVendorErrors(defaultVendorErrors);
			updateUser();
		}
	};

	const updateUser = async () => {
		try {
			let file = vendor.file;
			let formData = new FormData();
			formData.append("file", file);

			let imgData;
			if (vendor.profileImage !== selectedVendor?.profileImage) {
				const res = await http.post(environment.file_url + "/upload", formData, {
					headers: { "Content-Type": "multipart/form-data" },
				});
				imgData = res.data;
			}

			setActionLoader({ ...actionLoader, vendor: true });
			// eslint-disable-next-line no-unused-vars
			const res = await http.put("vendor/" + selectedVendor?.id, {
				...vendor,
				profileImage: imgData ? imgData[0]?.[vendor?.file?.name] : vendor?.profileImage,
			});

			toast.success("Vendor updated successfully!");
			setMode("view");
			getVendors(currentPage);
			getVendor();
		} catch (error) {
			console.log(error);
			toast.error("Failed to update vendor!");
		}
		setActionLoader({ ...actionLoader, vendor: false });
	};

	const handleCompanyChange = (key, value) => {
		if (key.includes(".")) {
			const [parentKey, childKey] = key.split(".");
			setVendor({
				...vendor,
				company: {
					...vendor?.company,
					[parentKey]: {
						...vendor?.company?.[parentKey],
						[childKey]: value,
					},
				},
			});
		} else {
			if (key === "country") {
				const selectedCountry = countries.find((country) => country.name === value);
				const states = cities[selectedCountry?.name?.split(" ").join("_") + "-" + selectedCountry?.isoCode];
				const citiesAvailable = Object.values(states || {}).flatMap((stateCities) => stateCities.map((city) => city));

				setAvailableCities(citiesAvailable);
				setVendor({
					...vendor,
					company: {
						...vendor?.company,
						[key]: value,
						city: "",
					},
				});
			} else {
				setVendor({
					...vendor,
					company: {
						...vendor?.company,
						[key]: value,
					},
				});
			}
		}
	};

	const validateCompany = () => {
		const errors = {
			contact: {},
		};

		if (!vendor?.company.name.trim()) {
			errors.name = "Name of company is required";
		}

		if (!vendor?.company.country) {
			errors.country = "Country is required";
		}

		if (!vendor?.company.city) {
			errors.city = "City is required";
		}

		if (!vendor?.company.address.trim()) {
			errors.address = "Address is required";
		}

		if (!vendor?.company.postalAddress.trim()) {
			errors.postalAddress = "Postal address is required";
		}

		if (!vendor?.company.principalPOB.trim()) {
			errors.principalPOB = "Principal Place Of Busisness is required";
		}

		if (!vendor?.company.contact.email.trim()) {
			errors.contact.email = "Email is required";
		}

		if (!vendor?.company.contact.phone.trim()) {
			errors.contact.phone = "Phone is required";
		}

		if (Object.keys(errors).length > 1 || Object.keys(errors.contact).length > 0) {
			setCompanyErrors(errors);
			return;
		} else {
			setCompanyErrors(defaultCompanyErrors);
			updateCompany();
		}
	};

	const updateCompany = async () => {
		setActionLoader({ ...actionLoader, company: true });
		try {
			let file = vendor.company.file;
			let formData = new FormData();
			formData.append("file", file);

			let imgData;
			if (vendor.company.file) {
				const res = await http.post(environment.file_url + "/upload", formData, {
					headers: { "Content-Type": "multipart/form-data" },
				});
				imgData = res.data;
			}

			// console.log("imgData: ", imgData[0]?.[company?.file?.name]);

			const res = await http.put("company/" + vendor.company.id, {
				...vendor.company,
				logo: vendor.company.file ? imgData[0]?.[vendor.company?.file?.name] : vendor.company.logo,
			});

			// console.log(res.data.data, "company updated");
			toast.success("Company updated successfully");
			setVendor({ ...vendor, company: res.data.data });
			setMode("view");
			setSelectedVendor({ ...selectedVendor, company: res.data.data });
			getVendors(currentPage);
		} catch (error) {
			console.log(error);
			toast.error("Failed to update company");
		}
		setActionLoader({ ...actionLoader, company: false });
	};

	return (
		<div className="text-black mb-4">
			<ul className="flex flex-wrap mb-5 text-sm font-medium text-center border-b border-gray-200">
				<li onClick={() => setActiveTabIndex(0)} className="mr-2">
					<button
						className={
							"inline-block p-4 border-b-2 rounded-t-lg " +
							(0 !== activeTabIndex
								? "border-transparent hover:text-gray-600 hover:border-gray-300"
								: "text-blue-600 border-blue-600")
						}>
						Vendor
					</button>
				</li>
				<li onClick={() => setActiveTabIndex(1)} className="mr-2">
					<button
						className={
							"inline-block p-4 border-b-2 rounded-t-lg " +
							(1 !== activeTabIndex
								? "border-transparent hover:text-gray-600 hover:border-gray-300"
								: "text-blue-600 border-blue-600")
						}>
						Company
					</button>
				</li>
				<li onClick={() => setActiveTabIndex(2)} className="mr-2">
					<button
						className={
							"inline-block p-4 border-b-2 rounded-t-lg " +
							(2 !== activeTabIndex
								? "border-transparent hover:text-gray-600 hover:border-gray-300"
								: "text-blue-600 border-blue-600")
						}>
						Orders
					</button>
				</li>
			</ul>
			{activeTabIndex === 0 ? (
				<div className="p-3 rounded flex flex-col gap-5">
					<div className="mb-3 flex justify-between items-center">
						<div>
							<h3 className="text-lg font-semibold">Profile Details</h3>
							<p>Update vendor details from here.</p>
						</div>

						<div className="flex items-center">
							{mode === "view" ? (
								<button className="text-white bg-primary text-sm px-6 py-2 rounded-md" onClick={() => setMode("edit")}>
									EDIT
								</button>
							) : (
								<div className="flex gap-2">
									<button
										className="text-white bg-secondary text-sm px-6 py-2 rounded-md"
										onClick={() => {
											setMode("view");
											setVendor(selectedVendor);
											setVendorErrors(defaultVendorErrors);
										}}>
										CANCEL
									</button>
									<button
										disabled={!actionLoader || actionLoader.vendor}
										className="flex items-center justify-center gap-4 px-6 py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
										onClick={() => validateVendor()}>
										{actionLoader.vendor && <ClipLoader size={20} color="#201F20" />}
										SAVE
									</button>
								</div>
							)}
						</div>
					</div>
					<div className="flex gap-32">
						<div className="flex flex-col gap-5">
							<div className="flex gap-10 mb-5">
								<div className="pt-4">
									<h3 className="text-lg font-semibold">Profile Picture</h3>
									<p>This will be displayed on user profile.</p>
								</div>
								<div className="w-24 max-w-24 h-24 max-h-24 relative cursor-pointer">
									{mode !== "view" && (
										<label
											htmlFor="profile-image"
											className="absolute top-0 left-0 w-full h-full z-[9999] cursor-pointer">
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
									)}
									{vendor?.profileImage ? (
										<img
											src={vendor?.profileImage}
											alt="avatar"
											className="w-full h-full rounded-full object-contain"
										/>
									) : (
										<div className="w-full h-full rounded-full overflow-hidden flex justify-center items-center bg-blue-600 text-white">
											{vendor?.firstName?.[0]}
										</div>
									)}
								</div>
							</div>
							<div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
								<div className="flex flex-col gap-2">
									<span className="font-semibold w-36">First Name </span>
									<input
										type="text"
										disabled={mode === "view"}
										value={vendor?.firstName}
										onChange={(e) => setVendor({ ...vendor, firstName: e.target.value })}
										className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
									{vendorErrors.firstName && <span className="text-red-500 text-sm">{vendorErrors.firstName}</span>}
								</div>
								<div className="flex flex-col gap-2">
									<span className="font-semibold w-36">Last Name </span>
									<input
										type="text"
										disabled={mode === "view"}
										value={vendor?.lastName}
										onChange={(e) => setVendor({ ...vendor, lastName: e.target.value })}
										className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
									{vendorErrors.lastName && <span className="text-red-500 text-sm">{vendorErrors.lastName}</span>}
								</div>
								<div className="flex flex-col gap-2">
									<span className="font-semibold w-36">Gender </span>
									<select
										required
										disabled={mode === "view"}
										value={vendor?.gender}
										onChange={(e) =>
											setVendor({
												...vendor,
												gender: e.target.value,
											})
										}
										className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
										<option value="male">Male</option>
										<option value="female">Female</option>
										<option value="other">Other</option>
									</select>
								</div>
								<div className="flex flex-col gap-2">
									<span className="font-semibold w-36">Email Address </span>
									<input
										type="text"
										disabled={mode === "view"}
										value={vendor?.contact?.email}
										onChange={(e) =>
											setVendor({
												...vendor,
												contact: { ...vendor?.contact, email: e.target.value },
											})
										}
										className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
									{vendorErrors.contact?.email && (
										<span className="text-red-500 text-sm">{vendorErrors.contact?.email}</span>
									)}
								</div>
								<div className="flex flex-col gap-2">
									<span className="font-semibold w-36">Country </span>
									<select
										required
										disabled={mode === "view"}
										value={vendor?.country}
										onChange={(e) =>
											setVendor({
												...vendor,
												country: e.target.value,
											})
										}
										className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
										<option value="" disabled>
											Select Country
										</option>
										{countries.map((country) => (
											<option key={country.name} value={country.name}>
												{country.name}
											</option>
										))}
									</select>
									{vendorErrors.country && <span className="text-red-500 text-sm">{vendorErrors.country}</span>}
								</div>
								<div className="flex flex-col gap-2">
									<span className="font-semibold w-36">Date of Birth </span>
									<input
										type="date"
										disabled={mode === "view"}
										value={vendor?.dob ? new Date(vendor.dob).toISOString().split("T")[0] : ""}
										onChange={(e) => setVendor({ ...vendor, dob: e.target.value })}
										className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
									{vendorErrors.dob && <span className="text-red-500 text-sm">{vendorErrors.dob}</span>}
								</div>
								<div className="flex flex-col gap-2">
									<span className="font-semibold w-36">Primary Contact</span>
									<input
										type="text"
										disabled={mode === "view"}
										value={vendor?.contact?.phone}
										onChange={(e) =>
											setVendor({
												...vendor,
												contact: { ...vendor?.contact, phone: e.target.value },
											})
										}
										className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
									{vendorErrors.contact?.phone && (
										<span className="text-red-500 text-sm">{vendorErrors.contact?.phone}</span>
									)}
								</div>
								<div className="flex flex-col gap-2">
									<span className="font-semibold">Secondary Contact</span>
									<input
										type="text"
										disabled={mode === "view"}
										value={mode === "view" ? vendor?.contact?.secondaryPhone || "N/A" : vendor?.contact?.secondaryPhone}
										onChange={(e) =>
											setVendor({
												...vendor,
												contact: {
													...vendor?.contact,
													secondaryPhone: e.target.value,
												},
											})
										}
										className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<span className="font-semibold">Emergency Contact Name</span>
									<input
										type="text"
										disabled={mode === "view"}
										value={mode === "view" ? vendor?.emergencyContact?.name || "N/A" : vendor?.emergencyContact?.name}
										onChange={(e) =>
											setVendor({
												...vendor,
												emergencyContact: {
													...vendor?.emergencyContact,
													name: e.target.value,
												},
											})
										}
										className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<span className="font-semibold">Emergency Contact Ph.</span>
									<input
										type="text"
										disabled={mode === "view"}
										value={mode === "view" ? vendor?.emergencyContact?.phone || "N/A" : vendor?.emergencyContact?.phone}
										onChange={(e) =>
											setVendor({
												...vendor,
												emergencyContact: {
													...vendor?.emergencyContact,
													phone: e.target.value,
												},
											})
										}
										className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<span className="font-semibold w-36">Alias </span>
									<input
										type="text"
										disabled={mode === "view"}
										value={mode === "view" ? vendor?.alias || "N/A" : vendor?.alias}
										onChange={(e) => setVendor({ ...vendor, alias: e.target.value })}
										className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
								</div>
								<div className="flex flex-col gap-2">
									<span className="font-semibold w-36">Password </span>
									<input
										type="text"
										placeholder={mode !== "view" ? "Enter new password" : "Select edit mode"}
										disabled={mode === "view"}
										value={vendor?.password}
										onChange={(e) => setVendor({ ...vendor, password: e.target.value })}
										className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<label className="font-semibold w-36">Address</label>
								<textarea
									rows={2}
									disabled={mode === "view"}
									value={vendor?.contact?.address}
									onChange={(e) =>
										setVendor({
											...vendor,
											contact: { ...vendor?.contact, address: e.target.value },
										})
									}
									className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
								/>
								{vendorErrors.contact?.address && (
									<span className="text-red-500 text-sm">{vendorErrors.contact?.address}</span>
								)}
							</div>
						</div>
					</div>
				</div>
			) : activeTabIndex === 1 ? (
				<div className="p-3 rounded flex flex-col gap-5">
					<div className="mb-3 flex justify-between items-center">
						<div>
							<h3 className="text-lg font-semibold">Company Details</h3>
							<p>Update company details from here.</p>
						</div>

						<div className="flex items-center">
							{mode === "view" ? (
								<button className="text-white bg-primary text-sm px-6 py-2 rounded-md" onClick={() => setMode("edit")}>
									EDIT
								</button>
							) : (
								<div className="flex gap-2">
									<button
										className="text-white bg-secondary text-sm px-6 py-2 rounded-md"
										onClick={() => {
											setMode("view");
											setVendor(selectedVendor);
											setCompanyErrors(defaultCompanyErrors);
										}}>
										CANCEL
									</button>
									<button
										disabled={!actionLoader || actionLoader.company}
										className="flex items-center justify-center gap-4 px-6 py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
										onClick={validateCompany}>
										{actionLoader.company && <ClipLoader size={20} color="#201F20" />}
										SAVE
									</button>
								</div>
							)}
						</div>
					</div>
					<div className="flex gap-32">
						<div className="flex flex-col gap-5 w-full">
							<div className="flex gap-10 mb-5">
								<div className="pt-4">
									<h3 className="text-lg font-semibold">Company Logo</h3>
									<p>This will be displayed on company profile.</p>
								</div>
								<div className="w-24 max-w-24 h-24 max-h-24 relative cursor-pointer">
									{mode !== "view" && (
										<label
											htmlFor="profile-image"
											className="absolute top-0 left-0 w-full h-full z-[9999] cursor-pointer">
											<input
												type="file"
												id="profile-image"
												accept="image/*"
												onClick={(event) => {
													event.target.value = null;
												}}
												onChange={(e) => handleImageChange(e, true)}
												className="hidden"
											/>
											<span className="flex justify-center items-center w-full h-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 bg-black bg-opacity-50 text-white rounded-full">
												Upload
											</span>
										</label>
									)}
									{vendor?.company?.logo ? (
										<img
											src={vendor?.company?.logo}
											alt="avatar"
											className="w-full h-full rounded-full object-contain"
										/>
									) : (
										<div className="w-full h-full rounded-full overflow-hidden flex justify-center items-center bg-blue-600 text-white">
											{vendor?.company?.name?.[0]}
										</div>
									)}
								</div>
							</div>
							<div className="flex gap-10">
								<div className="min-w-[480px] flex flex-col gap-5">
									<div className="flex justify-between">
										<div className="flex flex-col gap-4">
											<span className="font-semibold w-36">Name*</span>
											<input
												type="text"
												disabled={mode === "view"}
												value={vendor?.company?.name}
												onChange={(e) => handleCompanyChange("name", e.target.value)}
												className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											/>
										</div>
										<div className="flex flex-col gap-4">
											<label className="font-semibold w-36">Country*</label>
											<select
												required
												disabled={mode === "view"}
												value={vendor?.company?.country}
												onChange={(e) => handleCompanyChange("country", e.target.value)}
												className="w-52 block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
												{/* <option value="">Select Country</option> */}
												{countries.map((country) => (
													<option value={country.name}>{country.name}</option>
												))}
											</select>
											{companyErrors.country && <div className="text-red-500 text-sm">{companyErrors.country}</div>}
										</div>
									</div>
									<div className="flex justify-between">
										<div className="flex flex-col gap-4">
											<label className="font-semibold w-36">City*</label>
											<select
												required
												disabled={mode === "view"}
												value={vendor?.company?.city}
												onChange={(e) => handleCompanyChange("city", e.target.value)}
												className="w-52 block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
												<option value="" disabled>
													Select City
												</option>
												{availableCities?.map((city) => (
													<option value={city.name}>{city.name}</option>
												))}
											</select>
											{companyErrors.city && <div className="text-red-500 text-sm">{companyErrors.city}</div>}
										</div>

										<div className="flex flex-col gap-4">
											<label className="font-semibold">Contact Number*</label>
											<input
												required
												disabled={mode === "view"}
												type="text"
												value={vendor?.company?.contact?.phone}
												onChange={(e) => handleCompanyChange("contact.phone", e.target.value)}
												className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											/>
											{companyErrors.contact.phone && (
												<div className="text-red-500 text-sm">{companyErrors.contact.phone}</div>
											)}
										</div>
									</div>
									<div className="flex flex-col gap-4">
										<label className="font-semibold w-36">Contact Email*</label>
										<input
											required
											disabled={mode === "view"}
											type="text"
											value={vendor?.company?.contact?.email}
											onChange={(e) => handleCompanyChange("contact.email", e.target.value)}
											className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										/>
										{companyErrors.contact.email && (
											<div className="text-red-500 text-sm">{companyErrors.contact.email}</div>
										)}
									</div>
									<div className="flex flex-col gap-2">
										<label className="font-semibold w-36">Website</label>
										<input
											required
											disabled={mode === "view"}
											type="text"
											placeholder="https://www.example.com"
											value={vendor?.company?.website}
											onChange={(e) => handleCompanyChange("website", e.target.value)}
											className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										/>
										{companyErrors.website && <div className="text-red-500 text-sm">{companyErrors.website}</div>}
									</div>
								</div>
								<div className="flex-1 flex flex-col gap-7">
									<div className="flex flex-col gap-2">
										<label className="font-semibold w-36">Current Address*</label>
										<input
											required
											disabled={mode === "view"}
											type="text"
											value={vendor?.company?.address}
											onChange={(e) => handleCompanyChange("address", e.target.value)}
											className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										/>
										{companyErrors.address && <div className="text-red-500 text-sm">{companyErrors.address}</div>}
									</div>
									<div className="flex flex-col gap-2">
										<label className="font-semibold w-36">Postal Address*</label>
										<input
											required
											disabled={mode === "view"}
											type="text"
											value={vendor?.company?.postalAddress}
											onChange={(e) => handleCompanyChange("postalAddress", e.target.value)}
											className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										/>
										{companyErrors.postalAddress && (
											<div className="text-red-500 text-sm">{companyErrors.postalAddress}</div>
										)}
									</div>
									<div className="flex flex-col gap-2">
										<label className="font-semibold">Principal Place Of Business*</label>
										<input
											required
											disabled={mode === "view"}
											type="text"
											value={vendor?.company?.principalPOB}
											onChange={(e) => handleCompanyChange("principalPOB", e.target.value)}
											className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										/>
										{companyErrors.principalPOB && (
											<div className="text-red-500 text-sm">{companyErrors.principalPOB}</div>
										)}
									</div>

									<div className="flex flex-col gap-3">
										<label className="font-semibold w-36">Description</label>
										<textarea
											required
											disabled={mode === "view"}
											type="text"
											value={vendor?.company?.description}
											rows={5}
											onChange={(e) => handleCompanyChange("description", e.target.value)}
											className="w-full block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										/>
										{companyErrors.description && (
											<div className="text-red-500 text-sm">{companyErrors.description}</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<>
					<Orders company={vendor?.company} />
				</>
			)}
		</div>
	);
};

export default VendorTabs;
