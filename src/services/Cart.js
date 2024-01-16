import http from "../api";

const getCart = (owner) => {
	return http.get("/cart/" + owner);
};

const CartService = {
	getCart,
};

export default CartService;
