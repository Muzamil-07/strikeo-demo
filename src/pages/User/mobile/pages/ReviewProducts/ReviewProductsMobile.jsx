import { useState } from "react";
import History from "./History";
import ToReview from "./ToReview";
import Navbar from "../../components/Navbar";
import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import { DividerDot, StyledDivider } from "../../theme/themes";

function TabPanel(props) {
  // eslint-disable-next-line react/prop-types
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children} </Box>}
    </div>
  );
}

const ReviewProductsMobile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Navbar />
      <Box sx={{ backgroundColor: "white", height: "100vh" }} pt={10}>
        <Stack pt={5}>
          <Typography
            sx={{
              textAlign: "center",
              letterSpacing: "4px",
              fontWeight: 400,
            }}
          >
            Review Products
          </Typography>
          <StyledDivider>
            <DividerDot />
          </StyledDivider>
        </Stack>
        <Box pt={3}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label={<Typography fontSize={12}>To Review</Typography>} />
            <Tab label={<Typography fontSize={12}>History</Typography>} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <ToReview />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <History />
          </TabPanel>
        </Box>
      </Box>
    </div>
  );
};

export default ReviewProductsMobile;
