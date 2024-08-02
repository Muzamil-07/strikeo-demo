import React, { useEffect, useState } from "react";
import http from "../api";
import validator from "validator";
import countries from "../data/countries.json";
import cities from "../data/cities.json";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";
import { environment } from "../constants";
import { useDebounce } from "use-debounce";

const Profile = ({ loggedInUser, selectedUser, setSelectedUser, getUsers, userType }) => {
	const canEditProfile =
		(loggedInUser?.details?.role?.type === "StrikeO" && loggedInUser?.details?.role?.name === "SuperAdmin") ||
		(loggedInUser?.details?.id !== selectedUser.id &&
			loggedInUser?.details?.role?.type === "Vendor" &&
			loggedInUser?.details?.role?.vendorPermissions.includes("Update Employees"));

	const canChangeRole = loggedInUser?.details?.role?.type === "Vendor" && loggedInUser?.details?.role?.name === "Admin";

	const defaultProfileErrors = {
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
	if (userType === "agent") {
		defaultProfileErrors.city = null;
		defaultProfileErrors.zipCode = null;
	}
	const [mode, setMode] = useState("view");
	const [isLoading, setIsLoading] = useState(false);
	const [profile, setProfile] = useState(selectedUser);
	const [profileErrors, setProfileErrors] = useState(defaultProfileErrors);
	const [roles, setRoles] = useState([]);

	const selectedCountry = countries.find((country) => country.name === selectedUser?.country);
	const states = cities[selectedCountry?.name?.split(" ").join("_") + "-" + selectedCountry?.isoCode];
	const citiesAvailable = Object.values(states || {}).flatMap((stateCities) => stateCities.map((city) => city));

	const handleImageChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setProfile({ ...profile, profileImage: reader.result, file: file });
			};

			reader.readAsDataURL(file);
		}
	};

	const getSelectedUser = async () => {
		try {
			let apiUrl = "company/employee/" + profile?.id;
			if (userType === "agent") {
				apiUrl = "agent/" + profile?.id;
			}
			const res = await http.get(apiUrl);

			setSelectedUser(res.data.data);
			setProfile(res.data.data);
		} catch (error) {
			//
		}
	};

	const validateProfile = () => {
		const errors = {
			contact: {},
		};

		if (!profile.firstName.trim()) {
			errors.firstName = "First name is required";
		}

		if (!profile.lastName.trim()) {
			errors.lastName = "Last name is required";
		}

		if (!profile.contact.email.trim()) {
			errors.contact.email = "Email is required";
		} else {
			if (!validator.isEmail(profile.contact.email)) {
				errors.contact.email = "Invalid email address";
			}
		}

		if (!profile.contact.phone.trim()) {
			errors.contact.phone = "Phone number is required";
		} else {
			if (!validator.isMobilePhone(profile.contact.phone)) {
				errors.contact.phone = "Invalid phone number";
			}
		}

		if (!profile.contact.address.trim()) {
			errors.contact.address = "Address is required";
		}

		if (!profile.country.trim()) {
			errors.country = "Country is required";
		}

		if (!profile.dob.trim()) {
			errors.dob = "Date of birth is required";
		} else {
			if (new Date(profile.dob).getTime() > new Date().getTime()) {
				errors.dob = "Invalid date of birth";
			}
		}

		if (userType === "agent") {
			if (!profile.city.trim()) {
				errors.city = "City is required";
			}
			if (!profile.zipCode.trim()) {
				errors.zipCode = "Zip code is required";
			}
		}

		if (Object.keys(errors).length > 1 || Object.keys(errors.contact).length > 0) {
			setProfileErrors(errors);
			return;
		} else {
			setProfileErrors(defaultProfileErrors);
			updateProfile();
		}
	};

	const updateProfile = async () => {
		try {
			let file = profile.file;
			let formData = new FormData();
			formData.append("file", file);

			let imgData;
			if (profile.profileImage !== selectedUser?.profileImage) {
				const res = await http.post(environment.file_url + "/upload", formData, {
					headers: { "Content-Type": "multipart/form-data" },
				});
				imgData = res.data;
			}

			setIsLoading(true);
			let apiUrl = "company/employee/" + profile?.id;
			if (userType === "agent") {
				apiUrl = "agent/" + profile?.id;
			}

			let apiData = {
				...profile,
				profileImage: imgData ? imgData[0]?.[profile?.file?.name] : profile?.profileImage,
			};
			const res = await http.put(apiUrl, apiData);

			toast.success("Profile updated successfully!");
			setMode("view");
			getUsers();
			getSelectedUser();
		} catch (error) {
			toast.error("Failed to update profile!");
		}
		setIsLoading(false);
	};

	const getRoles = async () => {
		try {
			const res = await http.get("/role/vendor?all=true");
			setRoles(res.data.data?.roles);
		} catch (error) {
			//
		}
	};

	useEffect(() => {
		getRoles();
	}, []);

	return (
		<div className="text-black mb-4 mt-5">
			<div className="p-3 rounded flex flex-col gap-5">
				<div className="mb-3 flex justify-between items-center">
					<div>
						<h3 className="text-lg font-semibold">Profile Details</h3>
						<p>Update profile details from here.</p>
					</div>

					{canEditProfile && (
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
											setProfile(selectedUser);
											setProfileErrors(defaultProfileErrors);
										}}>
										CANCEL
									</button>
									<button
										disabled={isLoading}
										className="flex items-center justify-center gap-4 px-6 py-2 bg-primary hover:opacity-90 text-white rounded-md disabled:bg-opacity-30 disabled:cursor-not-allowed"
										onClick={() => validateProfile()}>
										{isLoading && <ClipLoader size={20} color="#201F20" />}
										SAVE
									</button>
								</div>
							)}
						</div>
					)}
				</div>
				<div className="flex gap-32">
					<div className="flex flex-col gap-5">
						<div className="flex gap-10 mb-3">
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
								{profile?.profileImage ? (
									<img src={profile?.profileImage} alt="avatar" className="w-full h-full rounded-full object-contain" />
								) : (
									<div className="w-full h-full rounded-full overflow-hidden flex justify-center items-center bg-blue-600 text-white">
										{profile?.firstName?.[0]}
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
									value={profile?.firstName}
									onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
									className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
								{profileErrors.firstName && <span className="text-red-500 text-sm">{profileErrors.firstName}</span>}
							</div>
							<div className="flex flex-col gap-2">
								<span className="font-semibold w-36">Last Name </span>
								<input
									type="text"
									disabled={mode === "view"}
									value={profile?.lastName}
									onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
									className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
								{profileErrors.lastName && <span className="text-red-500 text-sm">{profileErrors.lastName}</span>}
							</div>
							<div className="flex flex-col gap-2">
								<span className="font-semibold w-36">Gender </span>
								<select
									required
									disabled={mode === "view"}
									value={profile?.gender}
									onChange={(e) =>
										setProfile({
											...profile,
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
									value={mode === "view" ? profile?.contact?.email || "N/A" : profile?.contact?.email}
									onChange={(e) => setProfile({ ...profile, contact: { ...profile?.contact, email: e.target.value } })}
									className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
								{profileErrors.contact?.email && (
									<span className="text-red-500 text-sm">{profileErrors.contact?.email}</span>
								)}
							</div>
							{userType === "employee" && (
								<div className="flex flex-col gap-2">
									<label className="font-semibold w-36">Role</label>
									<select
										required
										disabled={mode === "view" || !canChangeRole}
										value={mode !== "view" ? profile?.roleId : profile?.role?.id}
										onChange={(e) => setProfile({ ...profile, roleId: e.target.value })}
										className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										aria-label="Select Role">
										<option value="" disabled>
											Select Role
										</option>
										{roles && roles.map((role) => <option value={role.id}>{role.name}</option>)}
									</select>
									{profileErrors.roleId && <div className="text-red-500 text-sm">{profileErrors.roleId}</div>}
								</div>
							)}
							<div className="flex flex-col gap-2">
								<span className="font-semibold w-36">Country </span>
								<select
									required
									disabled={mode === "view"}
									value={profile?.country}
									onChange={(e) =>
										setProfile({
											...profile,
											country: e.target.value,
											city: "",
										})
									}
									className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
									<option value="" disabled>
										Select Country
									</option>
									{countries.map((country) => (
										<option value={country.name}>{country.name}</option>
									))}
								</select>
								{profileErrors.country && <span className="text-red-500 text-sm">{profileErrors.country}</span>}
							</div>
							{userType === "agent" && (
								<>
									<div className="flex flex-col gap-2">
										<span className="font-semibold w-36">City</span>
										<select
											required
											value={profile?.city}
											disabled={!profile?.country || mode === "view"}
											onChange={(e) => setProfile({ ...profile, city: e.target.value })}
											className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
											<option value="">Select City</option>
											{citiesAvailable?.map((city) => (
												<option value={city.name}>{city.name}</option>
											))}
										</select>
										{profileErrors.city && <div className="text-red-500 text-sm">{profileErrors.city}</div>}
									</div>
									<div className="flex flex-col gap-2">
										<span className="font-semibold w-48">Zip Code/Postal Code</span>
										<input
											type="text"
											required
											value={profile?.zipCode}
											disabled={mode === "view"}
											onChange={(e) => setProfile({ ...profile, zipCode: e.target.value })}
											className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										/>
										{profileErrors.zipCode && <div className="text-red-500 text-sm">{profileErrors.zipCode}</div>}
									</div>
								</>
							)}
							<div className="flex flex-col gap-2">
								<span className="font-semibold w-36">Date of Birth </span>
								<input
									type="date"
									disabled={mode === "view"}
									value={profile?.dob ? new Date(profile.dob).toISOString().split("T")[0] : ""}
									onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
									className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
								{profileErrors.dob && <span className="text-red-500 text-sm">{profileErrors.dob}</span>}
							</div>
							<div className="flex flex-col gap-2">
								<span className="font-semibold w-36">Primary Contact</span>
								<input
									type="text"
									disabled={mode === "view"}
									value={profile?.contact?.phone}
									onChange={(e) => setProfile({ ...profile, contact: { ...profile?.contact, phone: e.target.value } })}
									className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
								{profileErrors.contact?.phone && (
									<span className="text-red-500 text-sm">{profileErrors.contact?.phone}</span>
								)}
							</div>
							<div className="flex flex-col gap-2">
								<span className="font-semibold">Secondary Contact</span>
								<input
									type="text"
									disabled={mode === "view"}
									value={mode === "view" ? profile?.contact?.secondaryPhone || "N/A" : profile?.contact?.secondaryPhone}
									onChange={(e) =>
										setProfile({ ...profile, contact: { ...profile?.contact, secondaryPhone: e.target.value } })
									}
									className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
							</div>

							<div className="flex flex-col gap-2">
								<span className="font-semibold">Emergency Contact Name</span>
								<input
									type="text"
									disabled={mode === "view"}
									value={mode === "view" ? profile?.emergencyContact?.name || "N/A" : profile?.emergencyContact?.name}
									onChange={(e) =>
										setProfile({
											...profile,
											emergencyContact: { ...profile?.emergencyContact, name: e.target.value },
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
									value={mode === "view" ? profile?.emergencyContact?.phone || "N/A" : profile?.emergencyContact?.phone}
									onChange={(e) =>
										setProfile({
											...profile,
											emergencyContact: { ...profile?.emergencyContact, phone: e.target.value },
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
									value={mode === "view" ? profile?.alias || "N/A" : profile?.alias}
									onChange={(e) => setProfile({ ...profile, alias: e.target.value })}
									className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
							</div>
						</div>

						<div className="flex flex-col justify-center gap-2">
							<span className="font-semibold w-36">Address</span>
							<textarea
								disabled={mode === "view"}
								value={profile?.contact?.address}
								onChange={(e) => setProfile({ ...profile, contact: { ...profile?.contact, address: e.target.value } })}
								className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
							/>
							{profileErrors.contact?.address && (
								<span className="text-red-500 text-sm">{profileErrors.contact?.address}</span>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
