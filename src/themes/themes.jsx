import { createTheme, TableCell, styled, alpha, Select } from "@mui/material";

const colors = {
  black: "#111",
  white: "#FFF",
  grey: "#C4C4C4",
  golden: "#DD8560",
};
export const theme = createTheme({
  palette: {
    background: {
      default: colors.white,
      dark: colors.black,
    },
    primary: {
      main: colors.black,
    },
    text: {
      primary: colors.black,
      secondary: colors.grey,
      tertiary: colors.golden,
    },
  },
  typography: {
    fontFamily: "Tenor Sans, sans-serif",
  },
});

export const StyledTableHeadCell = styled(TableCell)({
  backgroundColor: "#F6F5F5",
  borderBottom: "0px",
  whiteSpace: "nowrap",
  fontWeight: "bold",
});
export const StyledInput = styled(Select)(({ theme }) => ({
  // "label + &": {},
  "& .MuiInputBase-input": {
    color: "white",
    borderRadius: 4,
    padding: "5px 5px 5px 10px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    position: "relative",
    backgroundColor: theme.palette.background.black,
    border: "1px solid white",
    maxWidth: 100,
    "&:focus": {
      borderRadius: 4,
      border: "1px solid white",
    },
  },
  "&:after": {
    border: "none",
  },
  "&:before": {
    border: "none",
  },
}));
