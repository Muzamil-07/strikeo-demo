import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import English from "./English";
import Bangali from "./Bangali";
import { StyledInput } from "../../themes/themes";

const TermsAndConditions = () => {
  const [lang, setLang] = useState("english");
  const handleChange = (event) => {
    setLang(event.target.value);
  };

  return (
    <div className="bg-[url('/strikeo.webp')] h-screen bg-cover bg-no-repeat bg-center bg-fixed text-white px-24">
      <div className="fixed left-0 top-0 bg-black bg-opacity-60 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none"></div>
      <div className="fixed inset-0 z-[1065] h-full py-10">
        <div className="h-full w-3/5 mx-auto rounded-2xl bg-primary bg-opacity-70 pl-8 pr-6 py-8">
          <div className="text-2xl font-semibold flex justify-between items-center relative">
            <NavLink to="/">
              <svg
                className="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 5H1m0 0 4 4M1 5l4-4"
                />
              </svg>
            </NavLink>
            <h3 className="text-2xl">Terms & Conditions</h3>
            <FormControl variant="standard" sx={{ minWidth: 100 }} size="small">
              <StyledInput
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                value={lang}
                onChange={handleChange}
              >
                <MenuItem value={"english"}>English</MenuItem>
                <MenuItem value={"bangali"}>Bangali</MenuItem>
              </StyledInput>
            </FormControl>
          </div>
          {lang === "english" ? <English /> : <Bangali />}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
