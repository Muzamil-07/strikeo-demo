import { createContext, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { CheckoutContainer } from "../../theme/themes";
import Navbar from "../../components/Navbar/Navbar";
import CheckoutPage from "./CheckoutPage";
import PlaceOrder from "./PlaceOrder";
import "@fontsource/tenor-sans";
import { FaArrowLeft } from "react-icons/fa6";

export const CheckoutProvider = createContext();

const CheckoutMobile = () => {
  const [checkoutStep, setCheckoutStep] = useState(1);
  return (
    <CheckoutContainer>
      <Navbar />
      <Box
        sx={{
          backgroundColor: "white",
          height: "100vh",
          position: "relative",
        }}
        pt={10}
      >
        {checkoutStep !== 1 && (
          <IconButton
            sx={{ position: "absolute", left: 5, top: 95, fontSize: 20 }}
            onClick={() => {
              setCheckoutStep((prev) => prev - 1);
            }}
          >
            <FaArrowLeft />
          </IconButton>
        )}
        {checkoutStep === 1 && (
          <CheckoutPage setCheckoutStep={setCheckoutStep} />
        )}
        {checkoutStep === 2 && <PlaceOrder />}
      </Box>
    </CheckoutContainer>
  );
};

export default CheckoutMobile;
