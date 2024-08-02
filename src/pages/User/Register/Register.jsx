import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "flowbite-react";
import { useUserSignupMutation } from "../../../services/nodeApi";
import { ToastContainer, toast } from "react-toastify";
import { environment } from "../../../constants";
import { setBillingAddress } from "../../../redux/slices/Billing";
import {
  Avatar,
  Box,
  CircularProgress,
  FormHelperText,
  IconButton,
  TextField,
} from "@mui/material";

const signupSchema = yup.object({
  firstName: yup.string().required("First Name is mandatory"),
  lastName: yup.string().required("Last Name is mandatory"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is mandatory"),
  password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is mandatory"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is mandatory"),
});

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userSignup, { isLoading: isSignupLoading }] = useUserSignupMutation();

  const [listener, setListener] = useState(null);

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
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
      successMessage = "Registered successfully!";
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
      oAuthProviderWindow(
        environment.api_url + "/user/auth/google?signup=true",
        "Google"
      );
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const continueWithFacebook = async (e) => {
    e.preventDefault();

    try {
      oAuthProviderWindow(
        environment.api_url + "/user/auth/facebook?signup=true",
        "Facebook"
      );
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values, { resetForm }) => {
      const response = await userSignup({ ...values, model: "Tigerman" });

      if ("error" in response) {
        toast.error(response.error.data.message, toastOptions);
      } else {
        resetForm();
        toast.success("Verification email has been sent!", toastOptions);
      }
    },
  });
  return (
    <Modal show={true} className="bg-black bg-opacity-80 z-20">
      <Modal.Body className="bg-theme_quaternary rounded-lg">
        <div className="pb-4">
          <h3 className="text-theme_primary text-center font-bold text-3xl">
            Sign up
          </h3>
        </div>
        <div className="signup-form space-y-6">
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <TextField
                fullWidth
                label="First name*"
                variant="standard"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && !!formik.errors.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <FormHelperText error>{formik.errors.firstName}</FormHelperText>
              )}
            </Box>
            <Box my={2}>
              <TextField
                fullWidth
                label="Last name*"
                variant="standard"
                name="lastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                error={formik.touched.lastName && !!formik.errors.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <FormHelperText error>{formik.errors.lastName}</FormHelperText>
              )}
            </Box>
            <Box>
              <TextField
                fullWidth
                label="Email*"
                variant="standard"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && !!formik.errors.email}
              />
              {formik.touched.email && formik.errors.email && (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              )}
            </Box>
            <Box my={2}>
              <TextField
                fullWidth
                label="Password*"
                variant="standard"
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.touched.password && !!formik.errors.password}
              />
              {formik.touched.password && formik.errors.password && (
                <FormHelperText error>{formik.errors.password}</FormHelperText>
              )}
            </Box>
            <Box>
              <TextField
                fullWidth
                label="Confirm Password*"
                variant="standard"
                type="password"
                name="confirmPassword"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                error={
                  formik.touched.confirmPassword &&
                  !!formik.errors.confirmPassword
                }
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <FormHelperText error>
                    {formik.errors.confirmPassword}
                  </FormHelperText>
                )}
            </Box>
            <div className="flex items-center gap-4 my-4">
              <input
                type="checkbox"
                className="rounded bg-theme_secondary focus:ring-0"
              />
              <span className="text-theme_primary text-sm">
                I agree to the
                <button type="button" className="underline font-semibold">
                  Terms and Conditions
                </button>
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <button
                type="submit"
                className="bg-theme_primary text-white px-4 py-2 rounded-md"
                disabled={isSignupLoading}
              >
                Sign up {isSignupLoading && <CircularProgress size={24} />}
              </button>
            </div>
          </form>
          <div className="flex items-center gap-4 justify-center">
            <hr className="w-40 border-transparent bg-theme_primary" />
            <span>Or</span>
            <hr className="w-40 border-transparent bg-theme_primary" />
          </div>
          <div className="flex justify-center">
            <IconButton onClick={(e) => continueWithGoogle(e)}>
              <Avatar sx={{ color: "black", fontWeight: "bold" }}>G</Avatar>
            </IconButton>
            <IconButton onClick={(e) => continueWithFacebook(e)}>
              <Avatar sx={{ color: "black", fontWeight: "bold" }}>f</Avatar>
            </IconButton>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="text-sm sm:text-lg">Already have an account?</span>
            <Link
              to="/login"
              className="underline font-semibold text-sm sm:text-lg"
            >
              Log in!
            </Link>
          </div>
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
  );
};

export default Register;
