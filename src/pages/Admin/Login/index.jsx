import { useEffect, useState } from "react";
import { logo } from "../../../assets";
import { useNavigate } from "react-router-dom";
import UserService from "../../../services/User";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../redux/slices/Theme";
import { login } from "../../../redux/slices/User";

const Login = () => {
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState({
		email: null,
		password: null,
	});

	const theme = useSelector((state) => state.theme);

	const handleInputChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const validateForm = () => {
		let errs = {};

		if (!form.email) {
			errs.email = "Email cannot be empty";
		}

		if (!form.password) {
			errs.password = "Password cannot be empty";
		}

		const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

		if (!EMAIL_REGEX.test(form.email)) {
			errs.email = "Invalid email address";
		}

		return errs;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const errs = validateForm();

		if (Object.keys(errs).length > 0) {
			setErrors(errs);
			return;
		} else {
			setErrors({});

			try {
				const response = await UserService.adminLogin(form.email, form.password);

				const { token, role, ...details } = response.data.data;


				if (role && role.type !== "StrikeO" && role !== "employee" && role.type !== "Vendor") {
					toast.error("Authorization failed");
					return;
				}

				if (theme.mode === "dark") {
					dispatch(toggleTheme());
				}
				dispatch(login({ token, details: { role, ...details } }));
				toast.success("Logged in successfully");
			} catch (error) {
				if (error.response) {
					toast.error(error.response.data.message);
				} else {
					toast.error("Something went wrong");
				}
			}
		}
	};

	useEffect(() => {
		if (user.isLoggedIn) {
			if (user.details?.role?.type === "StrikeO") {
				navigate("/admin/vendors");
			}
			if (user.details.role?.type === "Vendor") {
				navigate("/vendor/insights");
			}
		}
	}, [user]);

	return (
		<div className="w-full md:h-full flex flex-col dark:bg-primary bg-white">
			<div className="py-10 md:pt-14 md:pb-5 flex justify-center relative">
				<img src={logo} alt="logo" className="w-28 md:w-44 dark:filter-none filter invert" />
				<button
					type="button"
					className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1 absolute right-10 top-10"
					onClick={() => dispatch(toggleTheme())}>
					<svg
						className="dark:hidden w-8 h-8"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
					</svg>
					<svg
						className="hidden dark:block w-8 h-8"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
							fillRule="evenodd"
							clipRule="evenodd"></path>
					</svg>
				</button>
			</div>
			<div className="w-full flex-grow pt-24 px-10 md:px-44">
				<div className="h-full">
					<h3 className="pb-4 text-2xl font-medium text-center">Admin Login</h3>
					<div className="flex flex-col md:justify-center md:flex-row">
						<div className="w-[80%] mx-auto md:w-[30%] md:mx-0 pt-6">
							<form>
								<div className="flex flex-col gap-4">
									<label htmlFor="email">Username or Email Address</label>
									<input
										required
										type="email"
										name="email"
										id="email"
										className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 mb-2 w-full"
										onChange={handleInputChange}
									/>
									{errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
									<label htmlFor="password">Password</label>
									<input
										required
										type="password"
										name="password"
										id="password"
										className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 w-full"
										onChange={handleInputChange}
									/>
									{errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
									<button
										className="border border-white bg-primary hover:opacity-90 text-white rounded-xl px-8 py-4 my-4"
										onClick={handleSubmit}>
										Login
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
