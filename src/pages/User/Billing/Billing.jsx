import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import CartService from "../../services/Cart";
// import { setCart } from "../../redux/slices/Cart";
import { setBillingAddress } from "../../../redux/slices/Billing";
import { toast } from "react-toastify";
import validator from "validator";
import countries from ".././../../data/countries.json";
import cities from ".././../../data/cities.json";

const Billing = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [errors, setErrors] = useState({
		firstName: "",
		lastName: "",
		email: "",
		country: "",
		address: "",
		city: "",
		state: "",
		zipCode: "",
		phone: "",
	});

	const cart = useSelector((state) => state.cart);
	const billingDetails = useSelector((state) => state.billing);

	const selectedCountry = countries.find((country) => country.name === billingDetails?.country);
	const states = cities[selectedCountry?.name?.split(" ").join("_") + "-" + selectedCountry?.isoCode];
	const statesAvailable = Object.keys(states || {})
		.sort((a, b) => a.localeCompare(b))
		.map((state) => state.split("-")[0]);
	const citiesAvailable = Object.values(states || {})
		.flatMap((stateCities) => stateCities.map((city) => city))
		.sort((a, b) => a.name.localeCompare(b.name));

	const handleInputChange = (e, field) => {
		dispatch(setBillingAddress({ [field]: e.target.value }));
	};

	const formatNumber = (number) => {
		if (typeof number !== "number" || isNaN(number)) {
			return "";
		}

		return number.toLocaleString("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});
	};

	// const getUserCart = async () => {
	// 	try {
	// 		const res = await CartService.getCart(user.details.id);
	// 		dispatch(setCart(res.data.data));
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	const checkout = async () => {
		if (checkDisabled()) {
			toast.error("Please fill all the required fields of billing details!");
			return;
		}

		navigate("/checkout");
	};

	const checkDisabled = () => {
		const newErrors = {};
		if (!billingDetails.firstName) {
			newErrors.firstName = "First name is required!";
		}

		if (!billingDetails.lastName) {
			newErrors.lastName = "Last name is required!";
		}

		if (!billingDetails.country) {
			newErrors.country = "Country is required!";
		}

		if (!billingDetails.address) {
			newErrors.address = "Address is required!";
		}

		if (!billingDetails.city) {
			newErrors.city = "City is required!";
		}

		if (!billingDetails.state) {
			newErrors.state = "State is required!";
		}

		if (!billingDetails.zipCode) {
			newErrors.zipCode = "ZIP Code is required!";
		}

		if (!billingDetails.phone) {
			newErrors.phone = "Phone is required!";
		} else {
			if (!validator.isMobilePhone(billingDetails.phone)) {
				newErrors.phone = "Phone is invalid!";
			}
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return true;
		} else {
			setErrors({});
			return false;
		}
	};

	return (
		<div className="w-full flex flex-col h-full bg-primary">
			<Header />
			<div className="flex justify-between flex-col gap-3 md:gap-0 md:flex-row h-[75%] px-8 md:px-16 my-2 md:my-4 md:overflow-y-hidden">
				<div className="flex flex-col gap-3 md:pl-20 md:pr-4 w-full md:w-2/5 h-[80%] md:h-auto overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
					<h3 className="text-2xl font-medium">Billing Details</h3>
					<span className="text-sm text-secondary">(For Card payments use in-built form to fill details)</span>
					<div className="flex justify-between gap-3">
						<div className="flex flex-col gap-2">
							<label htmlFor="name">First Name</label>
							<div>
								<input
									required
									type="text"
									name="name"
									id="name"
									value={billingDetails?.firstName}
									onChange={(e) => handleInputChange(e, "firstName")}
									className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 mb-2 w-full"
								/>
								{errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="name">Last Name</label>
							<div>
								<input
									required
									type="text"
									name="name"
									id="name"
									value={billingDetails?.lastName}
									onChange={(e) => handleInputChange(e, "lastName")}
									className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3 mb-2 w-full"
								/>
								{errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="email">Email Address</label>
						<input
							required
							disabled
							type="email"
							name="email"
							id="email"
							value={billingDetails?.email}
							className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3"
						/>
						{errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="phone" className="flex justify-between">
							Phone <span className="text-secondary text-sm">(Use format: +31636363634)</span>
						</label>
						<input
							required
							type="text"
							name="phone"
							id="phone"
							value={billingDetails?.phone}
							onChange={(e) => handleInputChange(e, "phone")}
							className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3"
						/>
						{errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="name">Country / Region</label>
						<select
							name="country"
							id="country"
							value={billingDetails?.country}
							onChange={(e) => handleInputChange(e, "country")}
							className="py-3 px-3 rounded-md border border-gray-400 border-r-8 border-r-white outline-none text-black">
							<option value="">Select Country</option>
							{countries.map((country, index) => (
								<option key={`country-${index}`} value={country.name}>
									{country.name}
								</option>
							))}
						</select>
						{errors.country && <span className="text-red-500 text-sm">{errors.country}</span>}
					</div>

					<div className="flex flex-col gap-2">
						<label htmlFor="state">State</label>
						<select
							required
							disabled={!billingDetails?.country}
							value={billingDetails.state}
							onChange={(e) => handleInputChange(e, "state")}
							className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3">
							<option value="">Select State</option>
							{statesAvailable?.map((state) => (
								<option key={state} value={state}>
									{state}
								</option>
							))}
						</select>
						{errors.state && <span className="text-red-500 text-sm">{errors.state}</span>}
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="name">Town / City</label>
						<select
							required
							// disabled={!billingDetails?.country || !billingDetails?.state}
							value={billingDetails?.city}
							onChange={(e) => handleInputChange(e, "city")}
							className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3">
							<option value="">Select City</option>
							{citiesAvailable?.map((city) => (
								<option key={city.name} value={city.name}>
									{city.name}
								</option>
							))}
						</select>
						{errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="name">Street Address</label>
						<input
							required
							type="text"
							name="address"
							id="address"
							value={billingDetails?.address}
							onChange={(e) => handleInputChange(e, "address")}
							className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3"
						/>
						{errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="zip">Zip Code/Postal Code</label>
						<input
							required
							type="text"
							name="zip"
							id="zip"
							value={billingDetails?.zipCode}
							onChange={(e) => handleInputChange(e, "zipCode")}
							className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3"
						/>
						{errors.zipCode && <span className="text-red-500 text-sm">{errors.zipCode}</span>}
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="instructions">Delivery Instructions</label>
						<textarea
							rows={4}
							name="instructions"
							id="instructions"
							value={billingDetails?.instruction}
							onChange={(e) => handleInputChange(e, "instruction")}
							className="outline-none border border-gray-400 rounded-md text-black bg-white px-3 py-3"
						/>
					</div>
				</div>
				<div className="flex flex-col w-full md:w-2/5 md:h-[100%] text-sm overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
					<div className="flex justify-between pb-4">
						<div className="flex flex-col gap-3 w-full">
							<div className="flex justify-between">
								<h3 className="text-lg font-medium">Product</h3>
								<h3 className="text-lg font-medium">Subtotal</h3>
							</div>
							{cart.items &&
								cart.items.map((item, index) => (
									<div key={`item-${index}`} className="flex justify-between">
										<span className="text-secondary">
											{item.product.name}
											<span className="mx-3"> x </span> <span>{item.details.quantity}</span>
										</span>
										<span className="text-secondary">
											TK. {formatNumber(item.details.price * item.details.quantity)?.slice(1)}
										</span>
									</div>
								))}
							<div className="flex justify-between">
								<span>Total</span>
								<span className="text-tertiary text-xl font-medium">TK. {formatNumber(cart.bill)?.slice(1)}</span>
							</div>
						</div>
					</div>
					<hr />
					<div className="pt-6"></div>
					<p className="pb-8 text-justify">
						<span className="text-base font-medium">Note:</span> Your personal data will be used to support your
						experience throughout this website, to manage access to your account, and for other purposes described in
						our privacy policy.
					</p>
					<div className="mt-4">
						<button
							onClick={checkout}
							className="border border-white rounded-xl px-28 py-4 flex items-center justify-center gap-4 mx-auto">
							<span>Proceed to Checkout</span>
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Billing;
