import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  Avatar,
  Box,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormHelperText,
  IconButton,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/slices/User";
import { environment } from "../../../constants";
import http from "../../../api";
import { Modal } from "flowbite-react";
import { useLoginUserMutation } from "../../../services/nodeApi";
import Cook from "js-cookie";
import { setBillingAddress } from "../../../redux/slices/Billing";

const resetPassSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is mandatory"),
});

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is mandatory"),
  password: yup.string().required("Password is mandatory"),
});

const Login = () => {
  const Cookies = Cook.withAttributes({
    path: "/",
    sameSite: "Strict",
    secure: true,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [listener, setListener] = useState(null);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [loginUser, { isLoading: isLoginLoading }] = useLoginUserMutation();
  const handleOpen = () => {
    setIsEmailModalOpen(true);
  };
  const handler = useCallback((e) => {
    handleMessage(e);
    e.returnValue = true;
  }, []);
  const oAuthProviderWindow = (url) => {
    setListener(() => handler);
    window.open(
      url,
      "Login",
      "location=1,status=1,scrollbars=1, width=400,height=400"
    );
    window.addEventListener("message", handler);
  };
  const handleMessage = (message) => {
    if (message.data?.user?.token) {
      const { token, ...details } = message.data.user;
      dispatch(login({ token, details }));
      const billingDetails = details.billing;
      if (billingDetails) dispatch(setBillingAddress(billingDetails));
      Cookies.set("jwt", token);
      let successMessage;
      // if (message.data.linked) {
      //   successMessage = `${provider} account linked successfully`
      // } else {
      successMessage = "Logged in successfully";
      // }
      toast.success(successMessage);
      navigate("/", { replace: true });
      window.removeEventListener("message", listener);
      setListener(null);
    }
    if (message.data?.error) {
      toast.error(message.data.error);
      window.removeEventListener("message", listener);
      setListener(null);
    }
  };
  const continueWithGoogle = async (e) => {
    e.preventDefault();

    try {
      oAuthProviderWindow(environment.api_url + "/user/auth/google", "Google");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const continueWithFacebook = async (e) => {
    e.preventDefault();

    try {
      oAuthProviderWindow(
        environment.api_url + "/user/auth/facebook",
        "Facebook"
      );
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const verifyUser = async () => {
    try {
      const email = searchParams.get("email");
      const token = searchParams.get("token");
      await http.post("/user/verify-email", {
        email,
        token,
      });
      toast.success("Email verified successfully!");
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      }
    }
  };
  const resetPassFormik = useFormik({
    enableReinitialize: true,
    initialValues: { email: "" },
    validationSchema: resetPassSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await http.post("/user/forgot-password", {
          email: values.email,
        });
        handleClose();
        resetForm();
        toast.success("Email sent successfully!");
      } catch (error) {
        if (error.response?.data?.message === "Email not found!") {
          toast.error("Email not found!");
        } else {
          toast.error("Something went wrong!");
        }
      }
    },
  });
  const loginFormik = useFormik({
    enableReinitialize: true,
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: async (values, { resetForm }) => {
      const response = await loginUser({
        email: values.email,
        password: values.password,
      });
      if ("error" in response) {
        toast.error(response.error.data.message, toastOptions);
      } else {
        const { token, role, ...details } = response.data.data;
        if (role.type === "User") {
          Cookies.set("jwt", token);
          dispatch(login({ token, details }));
          const billingDetails = details.billing;
          if (billingDetails) dispatch(setBillingAddress(billingDetails));
          toast.success("Logged in successfully");
          resetForm();
          navigate("/", { replace: true });
        } else {
          toast.error("Login failed!");
        }
      }
    },
  });
  const handleClose = () => {
    setIsEmailModalOpen(false);
    resetPassFormik.resetForm();
  };
  // useEffect(() => {
  //   if (listener) {
  //     window.addEventListener('message', listener)

  //     return () => {
  //       window.removeEventListener('message', listener)
  //     }
  //   }
  // }, [listener])
  useEffect(() => {
    const email = searchParams.get("email");
    const token = searchParams.get("token");

    if (email && token) {
      verifyUser();
    }
  }, []);
  return (
    <>
      <Dialog open={isEmailModalOpen} onClose={handleClose}>
        <form onSubmit={resetPassFormik.handleSubmit}>
          <DialogTitle>Reset Password</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To forgot your password, please enter your email address here. We
              will send you a mail regarding it.
            </DialogContentText>

            <TextField
              margin="dense"
              name="email"
              label="Email Address"
              onChange={resetPassFormik.handleChange}
              value={resetPassFormik.values.email}
              fullWidth
              variant="standard"
              error={
                resetPassFormik.touched.email && !!resetPassFormik.errors.email
              }
            />
            {resetPassFormik.touched.email && resetPassFormik.errors.email && (
              <FormHelperText error>
                {resetPassFormik.errors.email}
              </FormHelperText>
            )}
          </DialogContent>
          <DialogActions sx={{ paddingRight: 4, paddingBottom: 2 }}>
            <button
              type="button"
              onClick={handleClose}
              className="bg-red-500 text-white px-4 py-2 text-sm rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-theme_primary text-white px-4 py-2 text-sm rounded-md"
            >
              Reset
            </button>
          </DialogActions>
        </form>
      </Dialog>
      <Modal show={true} className="bg-black bg-opacity-80">
        <Modal.Body className="bg-theme_quaternary rounded-lg px-[44px]">
          <div className="pb-4">
            <h3 className="text-theme_primary text-center font-bold text-3xl">
              Log In
            </h3>
          </div>
          <Box>
            <form onSubmit={loginFormik.handleSubmit}>
              <Box>
                <TextField
                  label="Email*"
                  variant="standard"
                  fullWidth
                  name="email"
                  onChange={loginFormik.handleChange}
                  value={loginFormik.values.email}
                  error={
                    loginFormik.touched.email && !!loginFormik.errors.email
                  }
                />
                {loginFormik.touched.email && loginFormik.errors.email && (
                  <FormHelperText error>
                    {loginFormik.errors.email}
                  </FormHelperText>
                )}
              </Box>
              <Box mt={2}>
                <TextField
                  label="Password*"
                  fullWidth
                  variant="standard"
                  type="password"
                  name="password"
                  onChange={loginFormik.handleChange}
                  value={loginFormik.values.password}
                  error={
                    loginFormik.touched.password &&
                    !!loginFormik.errors.password
                  }
                />
                {loginFormik.touched.password &&
                  loginFormik.errors.password && (
                    <FormHelperText error>
                      {loginFormik.errors.password}
                    </FormHelperText>
                  )}
              </Box>
              <Box mt={3} className="flex flex-col">
                <button
                  type="submit"
                  className="bg-theme_primary text-white px-4 py-2 rounded-md"
                  disabled={isLoginLoading}
                >
                  Log in {isLoginLoading && <CircularProgress size={24} />}
                </button>
              </Box>
            </form>
          </Box>
          <div className="py-2">
            <button className="text-sm" onClick={handleOpen}>
              Forgot Password?
            </button>
          </div>
          <div className="flex items-center justify-center gap-4">
            <hr className="w-40 border-transparent bg-theme_primary" />
            <span>Or</span>
            <hr className="w-40 border-transparent bg-theme_primary" />
          </div>
          <div className="flex justify-center py-2">
            <IconButton onClick={(e) => continueWithGoogle(e)}>
              <Avatar sx={{ color: "black", fontWeight: "bold" }}>G</Avatar>
            </IconButton>
            <IconButton onClick={(e) => continueWithFacebook(e)}>
              <Avatar sx={{ color: "black", fontWeight: "bold" }}>f</Avatar>
            </IconButton>
          </div>
          <div className="flex justify-center gap-2">
            <span className="text-sm sm:text-lg">Don't have an account?</span>
            <Link
              to="/register"
              className="underline font-semibold sm:text-lg text-sm"
            >
              Sign up!
            </Link>
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={3500}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            theme="light"
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
