import {
  Box,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
  Divider,
  Stack,
} from "@mui/material";
import React from "react";
import { DividerDot, StyledDivider } from "../../theme/themes";
import Navbar from "../../components/Navbar";

const AboutMobile = () => {
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
            About Us
          </Typography>
          <StyledDivider>
            <DividerDot />
          </StyledDivider>
        </Stack>
        <Box mt={3} px={3}>
          <Typography fontSize={14} py={1} fontWeight="bold">
            Welcome to StrikeO: Your Ultimate Destination for Next-Gen
            E-Commerce Experiences!
          </Typography>
          <Box>
            <Typography fontSize={14} py={1} fontWeight="bold">
              Who We Are
            </Typography>
            <Typography fontSize={14}>
              At StrikeO, we're not just another e-commerce platform – we're a
              vibrant community of trendsetters, innovators, and game-changers,
              redefining the rules of online shopping. From the visionary minds
              behind sports and automotive excellence, we've transformed into
              the world's most advanced 3D e-commerce hub, offering an eclectic
              mix of products and services that cater to every lifestyle.
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={14} py={1} fontWeight="bold">
              Our Roots, Our Vision
            </Typography>
            <Typography fontSize={14}>
              From farmers to producers, designers to tech wizards, we hail from
              diverse backgrounds with one common thread: a relentless passion
              for innovation and creativity. Our journey began with a simple
              idea – to revolutionize the way people shop, connect, and
              experience life. Today, that idea has blossomed into a dynamic
              ecosystem where imagination knows no bounds.
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={14} py={1} fontWeight="bold">
              Pioneering the Future
            </Typography>
            <Typography fontSize={14}>
              At StrikeO, we're not just keeping up with the trends – we're
              setting them. Our commitment to innovation drives everything we
              do, from our cutting-edge 3D technology to our seamless user
              experiences. We're not satisfied with the status quo; we're
              constantly pushing the boundaries of what's possible in the world
              of e-commerce.
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={14} py={1} fontWeight="bold">
              Beyond Products: Services Redefined
            </Typography>
            <Typography fontSize={14}>
              But we're more than just a platform for buying and selling. We're
              a one-stop destination for all your needs, offering a curated
              selection of services that elevate your shopping experience to new
              heights. Whether you're seeking automotive solutions, sports gear,
              or the latest in lifestyle trends, we've got you covered.
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={14} py={1} fontWeight="bold">
              Immerse Yourself in the Future of Shopping
            </Typography>
            <Typography fontSize={14}>
              Experience online shopping like never before with StrikeO. Say
              goodbye to traditional sorting and browsing – with our immersive
              3D environment, you can explore products in a whole new way. From
              interactive displays to virtual try-ons, we're redefining the
              shopping experience one click at a time.
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={14} py={1} fontWeight="bold">
              Community at Our Core
            </Typography>
            <Typography fontSize={14}>
              At the heart of StrikeO lies a thriving community of like-minded
              individuals who share our passion for innovation and exploration.
              We believe in the power of diversity, inclusion, and
              collaboration, and we're committed to building a space where every
              voice is heard and every idea is celebrated. Together, we're not
              just shaping the future of e-commerce – we're redefining it.
            </Typography>
          </Box>
          <Box>
            <Typography fontSize={14} py={1} fontWeight="bold">
              Join the Revolution
            </Typography>
            <Typography fontSize={14}>
              So come on board and join us as we embark on this exhilarating
              journey into the future of online shopping. Whether you're a
              trendsetter, a trailblazer, or just someone looking to experience
              something new, there's a place for you at StrikeO. Experience the
              future of e-commerce today – because here, the possibilities are
              endless.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutMobile;
