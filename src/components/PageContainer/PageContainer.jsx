/* eslint-disable react/prop-types */
import { theme } from "../../themes/themes";
import AdminSidebar from "../AdminSidebar";
import { Outlet } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

export default function PageContainer() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AdminSidebar />
        <div
          className="w-full flex flex-col flex-grow bg-white text-gray-500"
          style={{ paddingLeft: "250px" }}
        >
          <div className="flex flex-grow">
            <Outlet />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
