import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

const Spinner = ({ loading = false }) => {
  return (
    loading && (
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          borderRadius: "5px",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.22)",
          color: "black",
        }}
        open={loading}
      >
        <CircularProgress sx={{ color: "black" }} color="primary" />
      </Backdrop>
    )
  );
};

export default Spinner;