import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`products-tabpanel-${index}`}
//       aria-labelledby={`products-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
  return {
    id: `products-tab-${index}`,
    "aria-controls": `products-tabpanel-${index}`,
  };
}

export function ProductsTabs({ tabIndex = 0, setTabIndex }) {
  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, width: "100%", borderColor: "divider" }}>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Review Products" {...a11yProps(0)} />
        <Tab label="Published Products" {...a11yProps(1)} />
      </Tabs>
    </Box>
  );
}
