import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Navbar from "../../components/Navbar";
import { DividerDot, StyledDivider } from "../../theme/themes";
import { useState } from "react";
import { StyledInput } from "../../../../../themes/themes";
import English from "./English";
import Bangal from "./Bangal";

export default function PrivacyPolicyMobile() {
  const [lang, setLang] = useState("english");
  const handleChange = (event) => {
    setLang(event.target.value);
  };
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
            Privacy Policy
          </Typography>
          <StyledDivider>
            <DividerDot />
          </StyledDivider>
          <Box alignSelf={"end"} mr={5} mt={1}>
            <FormControl sx={{ maxWidth: 80 }} size="small">
            <Select
                sx={{
                  "& .MuiInputBase-input": { padding: "4px", fontSize: "12px" },
                }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                value={lang}
                onChange={handleChange}
              >
                <MenuItem sx={{ fontSize: "12px" }} value={"english"}>
                  English
                </MenuItem>
                <MenuItem sx={{ fontSize: "12px" }} value={"bangali"}>
                  Bangali
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
        {lang === "english" ? <English /> : <Bangal />}
      </Box>
    </>
  );
}
