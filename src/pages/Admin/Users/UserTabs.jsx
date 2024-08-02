import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
// import { productPlaceholder } from "../assets";
// import { checkImage } from "../utils/image";
import http from "../../../api";
import OrdersTab from "./OrdersTab";
import { toast } from "react-toastify";
import { environment } from "../../../constants";

function UserTabs({ selectedUser, setSelectedUser, getUsers, currentPage }) {
	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const [mode, setMode] = useState("view");
	const [user, setUser] = useState(selectedUser);
	const [actionLoader, setActionLoader] = useState({
		profile: false,
		orders: false,
	});

	const handleImageChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setUser({
					...user,
					profileImage: reader.result,
					file,
				});
			};

			reader.readAsDataURL(file);
		}
	};

	const getUser = async () => {
		try {
			const res = await http.get("user/" + selectedUser?.id);

			setSelectedUser(res.data.data);
			setUser(res.data.data);
		} catch (error) {
			//
		}
	};

	const filterUpdateUser = (user) => {
		const newUser = { id: selectedUser?.id };

		if (user?.firstName?.trim() && user?.firstName?.trim() !== selectedUser?.firstName)
			newUser.firstName = user?.firstName;
		if (user?.lastName?.trim() && user?.lastName?.trim() !== selectedUser?.lastName) newUser.lastName = user?.lastName;
		if (user?.username?.trim() && user?.username?.trim() !== selectedUser?.username) newUser.username = user?.username;
		if (user?.email?.trim() && user?.email?.trim() !== selectedUser?.email) newUser.email = user?.email;
		if (user?.password?.trim()) newUser.password = user?.password;
		if (user?.file && user?.profileImage !== selectedUser?.profileImage) newUser.profileImage = user?.profileImage;

		// Billing Details
		if (user?.billing) {
			const { firstName, lastName, email, phone, address, country, state, city, zipCode } = user?.billing;

			if (firstName?.trim() && firstName?.trim() !== selectedUser?.billing?.firstName)
				newUser.billing = { ...newUser.billing, firstName };
			if (lastName?.trim() && lastName?.trim() !== selectedUser?.billing?.lastName)
				newUser.billing = { ...newUser.billing, lastName };
			if (email?.trim() && email?.trim() !== selectedUser?.billing?.email)
				newUser.billing = { ...newUser.billing, email };
			if (phone?.trim() && phone?.trim() !== selectedUser?.billing?.phone)
				newUser.billing = { ...newUser.billing, phone };
			if (address?.trim() && address?.trim() !== selectedUser?.billing?.address)
				newUser.billing = { ...newUser.billing, address };
			if (country?.trim() && country?.trim() !== selectedUser?.billing?.country)
				newUser.billing = { ...newUser.billing, country };
			if (state?.trim() && state?.trim() !== selectedUser?.billing?.state)
				newUser.billing = { ...newUser.billing, state };
			if (city?.trim() && city?.trim() !== selectedUser?.billing?.city) newUser.billing = { ...newUser.billing, city };
			if (zipCode?.trim() && zipCode?.trim() !== selectedUser?.billing?.zipCode)
				newUser.billing = { ...newUser.billing, zipCode };
		}

		return newUser;
	};

	const updateUser = async () => {
		setActionLoader({ ...actionLoader, profile: true });
		try {
			let file = user.file;
			let formData = new FormData();
			formData.append("file", file);

			let imgData;
			if (user.profileImage !== selectedUser?.profileImage) {
				const res = await http.post(environment.file_url + "/upload", formData, {
					headers: { "Content-Type": "multipart/form-data" },
				});
				imgData = res.data;
			}
			const res = await http.put(
				"user/update-profile",
				filterUpdateUser({
					...user,
					profileImage: imgData ? imgData[0]?.[user?.file?.name] : user?.profileImage,
				})
			);

			toast.success("User updated successfully!");
			setMode("view");
			getUsers(currentPage);
			getUser();
		} catch (error) {
			toast.error("Failed to update user!");
		}
		setActionLoader({ ...actionLoader, profile: false });
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
						Profile
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
						Orders
					</button>
				</li>
			</ul>
			{activeTabIndex === 0 ? (
				<div className="p-3 rounded flex flex-col gap-5">
					<div className="mb-3 flex justify-between items-center">
						<div>
							<h3 className="text-lg font-semibold">Profile Details</h3>
							<p>Update user details from here.</p>
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
											setUser({ ...selectedUser, password: "" });
										}}>
										CANCEL
									</button>
									<button
										disabled={!actionLoader || actionLoader.profile}
										className="flex items-center justify-center gap-4 px-6 py-2 bg-primary hover:opacity-90 text-white rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed"
										onClick={() => updateUser()}>
										{actionLoader.profile && <ClipLoader size={20} color="#201F20" />}
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
									{user?.profileImage ? (
										<img src={user?.profileImage} alt="avatar" className="w-full h-full rounded-full object-contain" />
									) : (
										<div className="w-full h-full rounded-full overflow-hidden flex justify-center items-center bg-blue-600 text-white">
											{user?.username?.[0]}
										</div>
									)}
								</div>
							</div>
							<div className="flex items-center gap-4">
								<span className="font-semibold w-36">First Name </span>
								<input
									type="text"
									disabled={mode === "view"}
									value={user?.firstName}
									onChange={(e) => setUser({ ...user, firstName: e.target.value })}
									className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
							</div>
							<div className="flex items-center gap-4">
								<span className="font-semibold w-36">Last Name </span>
								<input
									type="text"
									disabled={mode === "view"}
									value={user?.lastName}
									onChange={(e) => setUser({ ...user, lastName: e.target.value })}
									className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
							</div>
							<div className="flex items-center gap-4">
								<span className="font-semibold w-36">Username </span>
								<input
									type="text"
									disabled={mode === "view"}
									value={user?.username}
									onChange={(e) => setUser({ ...user, username: e.target.value })}
									className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
							</div>
							{user?.authType === "local" && (
								<div className="flex items-center gap-4">
									<span className="font-semibold w-36">Email Address </span>
									<input
										type="text"
										disabled={mode === "view"}
										value={user?.email}
										onChange={(e) => setUser({ ...user, email: e.target.value })}
										className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
								</div>
							)}
							{user?.authType === "local" && (
								<div className="flex items-center gap-4">
									<span className="font-semibold w-36">Password </span>
									<input
										type="text"
										placeholder="Enter new password"
										disabled={mode === "view"}
										value={user?.password}
										onChange={(e) => setUser({ ...user, password: e.target.value })}
										className="block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
								</div>
							)}
							{/* <div className="flex items-center gap-4">
								<span className="font-semibold w-36">Authentication </span>
								<span className="capitalize">{user?.authType === "local" ? "Email/Password" : user?.authType}</span>
							</div> */}
						</div>
						{user?.billing && (
							<div className="flex flex-col flex-1 gap-5">
								<div className="pt-4">
									<h3 className="text-lg font-semibold">Billing Details</h3>
									<p>This information is used while user checkout.</p>
								</div>
								<div className="flex justify-between">
									<div className="flex items-center gap-2">
										<span className="font-semibold w-24">First Name </span>
										<input
											type="text"
											disabled={mode === "view"}
											value={user?.billing?.firstName}
											onChange={(e) =>
												setUser({
													...user,
													billing: {
														...user?.billing,
														firstName: e.target.value,
													},
												})
											}
											className="block px-4 py-2 w-40 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										/>
									</div>
									<div className="flex items-center gap-2">
										<span className="font-semibold w-24">Last Name </span>
										<input
											type="text"
											disabled={mode === "view"}
											value={user?.billing?.lastName}
											onChange={(e) =>
												setUser({
													...user,
													billing: {
														...user?.billing,
														lastName: e.target.value,
													},
												})
											}
											className="block px-4 py-2 w-40 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										/>
									</div>
								</div>
								<div className="flex items-center gap-2">
									<span className="font-semibold w-24">Email </span>
									<input
										type="text"
										disabled={mode === "view"}
										value={user?.billing?.email}
										onChange={(e) =>
											setUser({
												...user,
												billing: { ...user?.billing, email: e.target.value },
											})
										}
										className="block flex-1 px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
								</div>
								<div className="flex items-center gap-2">
									<span className="font-semibold w-24">Phone </span>
									<input
										type="text"
										disabled={mode === "view"}
										value={user?.billing?.phone}
										onChange={(e) =>
											setUser({
												...user,
												billing: { ...user?.billing, phone: e.target.value },
											})
										}
										className="block flex-1 px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
								</div>
								<div className="flex items-center gap-2">
									<span className="font-semibold w-24">Address </span>
									<input
										type="text"
										disabled={mode === "view"}
										value={user?.billing?.address}
										onChange={(e) =>
											setUser({
												...user,
												billing: { ...user?.billing, address: e.target.value },
											})
										}
										className="block flex-1 px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									/>
								</div>
								<div className="flex justify-between">
									<div className="flex items-center gap-2">
										<span className="font-semibold w-24">Country </span>
										<input
											type="text"
											disabled={mode === "view"}
											value={user?.billing?.country}
											onChange={(e) =>
												setUser({
													...user,
													billing: {
														...user?.billing,
														country: e.target.value,
													},
												})
											}
											className="block px-4 py-2 w-40 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										/>
									</div>
									<div className="flex items-center gap-2">
										<span className="font-semibold w-24">Province </span>
										<input
											type="text"
											disabled={mode === "view"}
											value={user?.billing?.state}
											onChange={(e) =>
												setUser({
													...user,
													billing: {
														...user?.billing,
														state: e.target.value,
													},
												})
											}
											className="block px-4 py-2 w-40 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										/>
									</div>
								</div>
								<div className="flex justify-between">
									<div className="flex items-center gap-2">
										<span className="font-semibold w-24">City </span>
										<input
											type="text"
											disabled={mode === "view"}
											value={user?.billing?.city}
											onChange={(e) =>
												setUser({
													...user,
													billing: { ...user?.billing, city: e.target.value },
												})
											}
											className="block px-4 py-2 w-40 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										/>
									</div>
									<div className="flex items-center gap-2">
										<span className="font-semibold w-24">ZIP </span>
										<input
											type="text"
											disabled={mode === "view"}
											value={user?.billing?.zipCode}
											onChange={(e) =>
												setUser({
													...user,
													billing: { ...user?.billing, zipCode: e.target.value },
												})
											}
											className="block px-4 py-2 w-40 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										/>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			) : (
				<OrdersTab user={selectedUser} />
			)}
		</div>
	);
}

export default UserTabs;
