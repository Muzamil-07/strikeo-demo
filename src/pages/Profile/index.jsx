import React, { Suspense, useEffect, useState } from "react";
import { character, logo } from "../../assets";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Model from "../../models";
import DotLoader from "react-spinners/DotLoader";
import UserService from "../../services/User";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/User";
import { toggleTheme } from "../../redux/slices/Theme";
import { environment } from "../../constants";
import http from "../../api";
import Header from "../../components/Header";
import props from "../../data/props";

const Profile = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams();
	const [modelIndex, setModelIndex] = useState(1);
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState({
		email: null,
		password: null,
	});
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

	const theme = useSelector((state) => state.theme);
	const user = useSelector((state) => state.user);

	useEffect(() => {
		const email = searchParams.get("email");
		const token = searchParams.get("token");

		if (email && token) {
			verifyUser();
		}
	}, []);

	return (
		<div className="w-full flex flex-col flex-grow h-full dark:bg-primary">
			<Header />
			<div className="w-full flex-grow py-4 px-10 md:px-44">
				{/* <h3 className="pb-4 text-2xl font-medium text-center md:text-start">Login</h3> */}
				<div className="h-full flex flex-col md:justify-between md:flex-row md:items-center">
					<div className="flex flex-col h-[300px] md:h-[423px]">
						<div className="h-full">
							<Suspense
								fallback={
									<div className="flex justify-center items-center h-full">
										<DotLoader color="#c87d15" />
									</div>
								}>
								<Model
									modelProps={[props[user.details.model]]}
									// cameraPosition={[0, -0.4, 1]}
									// groupPosition={[0, -0.9, 0]}
								/>
							</Suspense>
						</div>
					</div>
					{/* <div className="flex flex-col -order-1 md:order-last h-[300px] md:h-[423px]"></div> */}
					<div className="flex flex-col w-[40%] -order-1 md:order-last h-[300px] md:h-[423px]">
						<Suspense
							fallback={
								<div className="flex justify-center items-center h-full w-[590px]">
									<DotLoader color="#c87d15" />
								</div>
							}>
							<div className="flex items-start justify-end flex-grow relative">
								<div className="flex justify-center pr-10 md:flex absolute bottom-10 w-full">
									<p className={`text-xl font-medium flex items-center gap-4 dark:text-white`}>
										{modelIndex === 1
											? "Tigerman"
											: modelIndex === 2
											? "Man In Suit"
											: modelIndex === 3
											? "Man with Bag"
											: modelIndex === 4
											? "Man In Jeans"
											: modelIndex === 5
											? "Arab Man"
											: "Man In Pant Coat"}
									</p>
								</div>
								<div className="w-[600px] h-full">
									<div className="h-full">
										<Model
											modelProps={[
												{
													modelName: "Arab.jsx",
													modelScale: [130, 130, 130],
													modelPosition: [-300, 0, 500],
													modelRotation: [0, 0, 0],
												},
												{
													modelName: "ManInJeans.jsx",
													modelScale: [1, 1, 1],
													modelPosition: [240, 0, 700],
													modelRotation: [0, -1.6, 0],
												},
												{
													modelName: "ManWithBag.jsx",
													modelScale: [1.8, 1.8, 1.8],
													modelPosition: [350, 350, -300],
													modelRotation: [0, 0.55, 0],
												},
												// Pent Coat
												{
													modelName: "ManInSuit.jsx",
													modelScale: [1.3, 1.3, 1.3],
													modelPosition: [-680, 120, 1250],
													modelRotation: [0, -3.2, 0],
												},
												{
													modelName: "ManWithShirt.jsx",
													modelScale: [120, 120, 120],
													modelPosition: [200, 0, 800],
													modelRotation: [0, 0, 0],
												},
												{
													modelName: "Tigerman.jsx",
													modelScale: [120, 120, 120],
													modelPosition: [-25, 0, 920],
													modelRotation: [0, 0, 0],
												},
											]}
											cameraPosition={[0, 0, 1200]}
											groupPosition={[0, -60, 0]}
											modelIndex={modelIndex}
											setModelIndex={setModelIndex}
											isRegisterPage={true}
										/>
									</div>
								</div>
							</div>
						</Suspense>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
