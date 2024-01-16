import http from "../api";

const register = (body, model) => {
	return http.post("/user/signup", { ...body, model });
};

const login = (email, password) => {
	return http.post("/user/login", { email, password });
};

const adminLogin = (email, password) => {
	return http.post("/admin/user/login", { email, password });
};

const getContext = () => {
	return http.get("/user/context");
};

const UserService = {
	register,
	login,
	adminLogin,
	getContext,
};

export default UserService;
