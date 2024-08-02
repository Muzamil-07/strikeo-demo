import { Link } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import { DividerDot, StyledDivider } from "../../theme/themes";

export default function CookiesMobile() {
  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "white", height: "fit-content" }} pt={10}>
        <Stack mt={4}>
          <Typography
            sx={{
              textAlign: "center",
              letterSpacing: "4px",
              fontWeight: 400,
            }}
          >
            StrikeO's Use of Cookies and Technologies
          </Typography>
          <StyledDivider>
            <DividerDot />
          </StyledDivider>
        </Stack>
        <Box mt={3} px={3}>
          <Typography fontSize={14}>
            At StrikeO, we employ an array of technologies, including cookies,
            pixels, and others collectively referred to as "cookies," to enhance
            your browsing experience, understand your interests, and provide
            essential features and services. Here's how these technologies
            contribute to your interaction with our platform:
          </Typography>
          <Typography fontSize={14} py={2} fontWeight="bold">
            Key Functions of Cookies:
          </Typography>
          <Typography fontSize={13} fontWeight="bold">
            • User Recognition:
          </Typography>
          <Typography fontSize={14}>
            Cookies recognize your browser or device when you sign in, enabling
            us to offer personalized features such as product recommendations,
            customized content, and acknowledgment of your membership status.
            Features like 1-Click purchasing are made possible through this
            recognition.
          </Typography>
          <Typography fontSize={13} fontWeight="bold">
            • Preferences Tracking:
          </Typography>
          <Typography fontSize={14}>
            Your specified preferences, like the choice to view interest-based
            ads, are tracked through cookies. Manage your preferences
            conveniently through Your Account.
          </Typography>
          <Typography fontSize={13} fontWeight="bold">
            • Shopping Basket Management:
          </Typography>
          <Typography fontSize={14}>
            Cookies keep track of items stored in your shopping basket,
            streamlining your shopping experience.
          </Typography>
          <Typography fontSize={13} fontWeight="bold">
            • Research and Diagnostics:
          </Typography>
          <Typography fontSize={14}>
            We utilize cookies for research and diagnostics, constantly striving
            to enhance the content, products, and services offered on StrikeO.
          </Typography>
          <Typography fontSize={13} fontWeight="bold">
            • Fraud Prevention and Security:
          </Typography>
          <Typography fontSize={14}>
            Cookies play a crucial role in preventing fraudulent activity and
            improving the overall security of our platform.
          </Typography>
          <Typography fontSize={13} fontWeight="bold">
            • Content Delivery and Reporting:
          </Typography>
          <Typography fontSize={14}>
            Cookies enable the delivery of content, including ads tailored to
            your interests, both on StrikeO and third-party sites. Detailed
            performance measurement and analysis are conducted through reporting
            mechanisms.
          </Typography>
          <Typography fontSize={13} pt={2} fontWeight="bold">
            The Importance of StrikeO’s Cookies
          </Typography>
          <Typography fontSize={14}>
            StrikeO’s cookies are integral to unlocking essential features.
            Blocking or rejecting these cookies may impact your ability to add
            items to your Shopping Cart, proceed to Checkout, or use other
            services requiring sign-in.
          </Typography>
          <Typography fontSize={13} pt={2} fontWeight="bold">
            Third-Party Involvement
          </Typography>
          <Typography fontSize={14}>
            Approved third parties may also utilize cookies when you engage with
            StrikeO services. These parties, including search engines, analytics
            providers, social media networks, and advertising companies,
            leverage cookies to deliver content and ads aligned with your
            interests. The effectiveness of their ads is measured through these
            cookies, and they may perform services on behalf of StrikeO.
          </Typography>
          <Typography fontSize={14} pt={2} fontWeight="bold">
            Managing Your Cookies
          </Typography>
          <Typography fontSize={14}>
            You have control over browser cookies through your browser settings.
            Most browsers offer a 'Help' feature guiding you on how to prevent
            new cookies, receive notifications about new cookies, block cookies,
            and understand when cookies expire. Blocking all cookies may require
            manual adjustment of preferences during each site visit, and certain
            features may not function as intended.
          </Typography>
          <Typography fontSize={14} py={2}>
            Refer to our Privacy Notice for a comprehensive understanding of the
            information gathered through these technologies. At StrikeO, we
            prioritize transparency and your ability to tailor your browsing
            experience.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
