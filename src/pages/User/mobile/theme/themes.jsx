import {
  createTheme,
  alpha,
  styled,
  useTheme,
  Stack,
  Button,
  Divider,
  Box,
  Typography,
  Grid,
  CardMedia,
  IconButton,
  Rating,
  Input,
  TextField,
  Chip,
  Pagination,
  PaginationItem,
} from "@mui/material";
import Bg10 from "../assets/10.svg";
import ATMCard from "../assets/CardBg.svg";
import Accordion from "@mui/material/Accordion";

import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import React from "react";

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
      main: colors.golden,
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

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: "black",
    fontSize: "20px !important",
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      backgroundColor: `rgba(17, 17, 17, 0.9)`,
      color: "white",
      borderRadius: 0,
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
}));

export const StyledTreeItem = React.forwardRef(function StyledTreeItem(
  props,
  ref
) {
  const theme = useTheme();
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelText,
    colorForDarkMode,
    bgColorForDarkMode,
    ...other
  } = props;

  const styleProps = {
    "--tree-view-color": "red",
    "--tree-view-bg-color": "yellow",
  };

  return (
    <StyledTreeItemRoot
      label={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 0.5,
            pr: 0,
            my: 0.8,
          }}
        >
          <Box
            component={LabelIcon}
            color="inherit"
            sx={{ mr: 1, fontSize: "20px" }}
          />
          <Typography variant="body2" sx={{ flexGrow: 1, fontSize: "16px" }}>
            {labelText}
          </Typography>
        </Box>
      }
      // style={styleProps}
      {...other}
      ref={ref}
    />
  );
});

// Navbar --
export const TopBar = styled(Stack)(({ theme }) => ({
  height: "80px",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 10px",
}));

// Footer --
export const BottomBar = styled(Stack)(({ theme }) => ({
  marginTop: "auto",
  alignItems: "center",
  gap: "20px",
  padding: "20px 10px",
}));

export const StyledDivider = styled(Divider)(({ theme, invert }) => ({
  width: "120px",
  alignSelf: "center",
  "& .MuiDivider-wrapper": {
    padding: 0,
  },
  "&::before": {
    borderTop: `thin solid ${alpha(
      invert ? theme.palette.background.default : theme.palette.background.dark,
      0.2
    )}`,
  },
  "&::after": {
    borderTop: `thin solid ${alpha(
      invert ? theme.palette.background.default : theme.palette.background.dark,
      0.2
    )}`,
  },
}));

export const DividerDot = styled(Box)(({ theme, invert }) => ({
  transform: "rotate(45deg)",
  height: "8px",
  width: "8px",
  border: `thin solid ${alpha(
    invert ? theme.palette.background.default : theme.palette.background.dark,
    0.12
  )}`,
}));

export const AboutBox = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  color: alpha(theme.palette.text.primary, 0.8),
}));

export const CopyrightBar = styled(Box)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.text.secondary, 0.2),
  padding: "10px 2px",
  width: "100%",
  textAlign: "center",
}));

// You may also like --
export const MLContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.dark,
  alignItems: "center",
  padding: "40px 20px",
  color: theme.palette.background.default,
  gap: "20px",
}));

export const MLTypography = styled(Typography)({
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: "4px",
  fontWeight: 400,
});

export const MLImageBox = styled(CardMedia)(({ theme }) => ({
  height: "360px",
  width: "280px",
  backgroundColor: "gray",
  objectFit: "cover",
}));

// Banner --

export const BannerContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.dark,
  color: theme.palette.background.default,
  alignItems: "center",
  padding: "20px",
  gap: "20px",
}));

export const BannerTextContainer = styled(Stack)({
  backgroundImage: `url(${Bg10})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
  alignItems: "center",
});
export const BannerText = styled(Typography)({
  fontFamily: "Abhaya Libre, sans-serif",
  letterSpacing: "2px",
  fontWeight: 800,
});

export const BannerImage = styled(CardMedia)({
  objectPosition: "cover",
  width: "100%",
  height: "470px",
  backgroundColor: "blanchedalmond",
});

// Products --

export const ProductContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.background.dark,
  color: theme.palette.background.default,
  padding: "20px",
  justifyContent: "center",
}));
export const ProductItem = styled(Grid)(({ theme }) => ({
  flexDirection: "column",
  alignItems: "center",
}));

export const ProductImage = styled(CardMedia)({
  backgroundColor: "white",
  height: "220px",
  position: "relative",
  objectFit: "cover",
});

export const HeartIcon = styled(IconButton)({
  position: "absolute",
  bottom: 2,
  right: 4,
});

export const ProductAbout = styled(Stack)({
  padding: "8px 0px",
});

export const ProductRating = styled(Rating)(({ theme }) => ({
  color: theme.palette.primary.main,
  "& .MuiRating-icon": {
    color: "#DD8560",
  },
}));

// Checkout --

export const CheckoutContainer = styled(Stack)({
  height: "100vh",
});

// CheckpoutPage --

export const CheckoutPageContainer = styled(Stack)(({ theme }) => ({
  padding: "20px",
  gap: "30px",
}));
export const CheckoutTitle = styled(Typography)({
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: "4px",
  fontWeight: 400,
});

export const CheckoutItem = styled(Stack)(({ theme }) => ({
  width: "100%",
  flexDirection: "row",
  gap: "25px",
}));

export const ItemImage = styled(CardMedia)({
  height: "140px",
  width: "110px",
  backgroundColor: "black",
});

export const ItemAbout = styled(Stack)({
  gap: "8px",
});

export const ItemName = styled(Typography)({
  fontWeight: 400,
  letterSpacing: "2px",
  textTransform: "uppercase",
});

export const ItemDesc = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.5),
}));

export const ItemAmmountContainer = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: "14px",
});
export const ItemButton = styled(IconButton)(({ theme }) => ({
  borderRadius: "100%",
  border: `thin solid ${alpha(theme.palette.background.dark, 0.12)}`,
}));

export const ItemPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const PromoDelieveryContainer = styled(Stack)({
  width: "100%",
  gap: "15px",
  borderTop: `thin solid ${alpha(theme.palette.background.dark, 0.12)}`,
  borderBottom: `thin solid ${alpha(theme.palette.background.dark, 0.12)}`,
  padding: "15px 0px",
});
export const PromoDelieveryField = styled(Input)({
  gap: "10px",
  width: "100%",
  fontSize: "0.875rem",
  padding: "0px 25px",
  "& ::placeholder": {
    color: theme.palette.background.dark,
    opacity: "1 !important",
  },
});

export const EndContainer = styled(Stack)({
  justifySelf: "flex-end",
  marginTop: "auto",
  gap: "20px",
});
export const TotalAmountContainer = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "0px 20px",
  alignItems: "center",
});

export const TotalText = styled(Typography)({
  letterSpacing: "4px",
  textTransform: "uppercase",
});

export const EndButton = styled(Button)({
  backgroundColor: theme.palette.background.dark,
  color: theme.palette.background.default,
  width: "100%",
  height: "60px",
  textTransform: "uppercase",
  letterSpacing: ".16px",
  gap: "20px",
  borderRadius: "0px",
  "&:hover": {
    backgroundColor: theme.palette.background.dark,
  },
  alignItems: "center !important",
});

// place order Page --

export const ShippingContainer = styled(Stack)(({ theme }) => ({
  gap: "8px",
}));

export const ContainerHeading = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.background.dark, 0.55),
  textTransform: "uppercase",
  letterSpacing: "1px",
}));

export const ContainerButton = styled(Button)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.text.secondary, 0.12),
  borderRadius: "55px",
  padding: "12px 18px",
  justifyContent: "space-between",
  "&:hover": {
    backgroundColor: alpha(theme.palette.text.secondary, 0.12),
  },
}));

export const ContainerText = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.7),
  fontSize: "0.83rem",
  textTransform: "none",
}));

// add shippping address --
export const AddressForm = styled(Stack)(({ theme }) => ({
  gap: "25px",
}));

export const CompactFields = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: "8px",
}));

export const AddressFields = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    fontSize: "0.875rem",
    color: `${alpha(theme.palette.background.dark, 0.5)} !important`,
  },
  "& .MuiInputBase-root ": {
    fontSize: "0.9rem",
  },
  "& ::before": {
    borderBottom: `thin solid ${alpha(
      theme.palette.background.dark,
      0.12
    )} !important`,
  },
  "& ::after": {
    borderBottom: `thin solid ${alpha(
      theme.palette.background.dark,
      0.3
    )} !important`,
  },
}));

// payment method --
export const ATMCardBg = styled(Stack)({
  backgroundImage: `url(${ATMCard})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top",
  justifyContent: "flex-end",
  height: "190px",
  width: "100%",
  borderRadius: "20px",
  position: "relative",
  padding: "15px",
  color: theme.palette.background.default,
});

export const MasterCardLogo = styled(CardMedia)({
  position: "absolute",
  top: 15,
  right: 15,
  width: "auto",
});

export const CardAboutContainer = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
});

// final page --
export const FinalShippingAddressContainer = styled(Stack)({
  position: "relative",
  padding: "0px 20px",
});

export const FSAText = styled(Typography)({
  color: alpha(theme.palette.background.dark, 0.7),
});

export const MoreIcon = styled(CardMedia)({
  position: "absolute",
  top: "50%",
  transform: "translate(0%, -50%)",
  width: "auto",
  right: 10,
});

export const FinalATMCard = styled(Stack)({
  flexDirection: "row",
  borderTop: `thin solid ${alpha(theme.palette.background.dark, 0.12)}`,
  borderBottom: `thin solid ${alpha(theme.palette.background.dark, 0.12)}`,
  padding: "25px 10px",
  alignItems: "center",
  justifyContent: "space-between",
});

// payment success --
export const SuccessCard = styled(Stack)({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "35px 15px",
  height: "480px",
  width: "343px",
  backgroundColor: theme.palette.background.default,
  alignItems: "center",
  zIndex: 10,
  gap: "22px",
});

export const CrossButton = styled(IconButton)({
  position: "absolute",
  right: 2,
  top: 2,
});

export const SuccessText = styled(Typography)({
  fontWeight: 400,
  letterSpacing: "4px",
  textTransform: "uppercase",
});

export const TickIconContainer = styled(Stack)({
  position: "relative",
  height: "65px",
  width: "65px",
  alignItems: "center",
  justifyContent: "flex-end",
});

export const TickStarIcon1 = styled(CardMedia)({
  position: "absolute",
  top: 0,
  right: 0,
  width: "auto",
});

export const TickStarIcon2 = styled(CardMedia)({
  position: "absolute",
  top: "20%",
  left: 0,
  width: "auto",
});

export const SuccessAbout = styled(Typography)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 400,
  color: alpha(theme.palette.text.primary, 0.8),
  textAlign: "center",
}));

export const PaymentId = styled(Typography)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 400,
  color: alpha(theme.palette.text.primary, 0.6),
  textAlign: "center",
}));

export const EmojiCOntainer = styled(Stack)({
  flexDirection: "row",
  gap: "8px",
});

export const ButtonContainer = styled(Stack)({
  flexDirection: "row",
  gap: "8px",
});
export const SubmitButton = styled(Button)(({ outlined }) => ({
  backgroundColor: !outlined && theme.palette.background.dark,
  color: outlined
    ? theme.palette.background.dark
    : theme.palette.background.default,
  borderRadius: "0",
  padding: outlined ? "12px 10px" : "12px 33px",
  border:
    outlined && `0.1px solid ${alpha(theme.palette.background.dark, 0.3)}`,
  "&:hover": {
    backgroundColor: outlined
      ? theme.palette.background.default
      : theme.palette.background.dark,
  },
  flexShrink: 0,
}));

export const BackgroundOverlay = styled("div")({
  position: "fixed",
  inset: 0,
  backgroundColor: alpha(theme.palette.background.dark, 0.8),
  zIndex: 1,
});

// search
export const SearchContainer = styled(Stack)({
  padding: "0px 20px",
  gap: "25px",
});

export const SearchBar = styled(Input)(({ theme }) => ({
  width: "100%",
  fontSize: "0.75rem",
  paddingBottom: "10px",
  gap: "10px",
  justifyContent: "center",
  "& ::placeholder": {
    color: theme.palette.background.dark,
    opacity: "0.6 !important",
  },
  borderBottom: `thin solid ${alpha(theme.palette.background.dark, 0.7)}`,
  "& .MuiInput-input": {
    padding: "0px",
  },
}));

export const SearchHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  color: alpha(theme.palette.background.dark, 0.6),
}));

export const RecentSearchContainer = styled(Stack)({
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "8px",
});

export const RecentSearch = styled(Chip)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.text.secondary, 0.3),
  padding: "8px 12px",
  fontSize: "0.7rem",
  borderRadius: "33px",
  height: "auto",
  color: alpha(theme.palette.background.dark, 0.8),
}));

export const PopularSearchContainer = styled(Stack)({
  gap: "15px",
});

// search view --

export const SearchViewContainer = styled(Stack)({
  gap: "30px",
  padding: "20px",
});

export const SearchViewBar = styled(Input)(({ theme }) => ({
  width: "100%",
  fontSize: "0.875rem",
  padding: "10px 0px",
  gap: "10px",
  "& ::placeholder": {
    color: theme.palette.background.dark,
    opacity: "1 !important",
  },
  borderBottom: `thin solid ${alpha(theme.palette.background.dark, 0.3)}`,
  "& .MuiInput-input": {
    padding: "0px",
  },
}));

export const CrossIconBtn = styled(IconButton)({
  padding: "0px",
  backgroundColor: alpha(theme.palette.text.secondary, 0.3),
  "&:hover": {
    backgroundColor: alpha(theme.palette.text.secondary, 0.3),
  },
});

export const SearchResultContainer = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const SearchResultHeading = styled(Typography)({
  textTransform: "uppercase",
  fontWeight: 400,
});

export const FilterButtonContainer = styled(Stack)({
  flexDirection: "row",
  gap: "4px",
});

export const NewButton = styled(Button)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.text.secondary, 0.3),
  "&:hover": {
    backgroundColor: alpha(theme.palette.text.secondary, 0.3),
  },
  borderRadius: "33px",
  height: "38px",
  textTransform: "none",
}));

export const FilterButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.text.secondary, 0.3),
  "&:hover": {
    backgroundColor: alpha(theme.palette.text.secondary, 0.3),
  },
  borderRadius: "100%",
  height: "38px",
  width: "38px",
}));

export const SearchProductContainer = styled(Grid)(({ theme }) => ({
  color: theme.palette.background.default,
  padding: "0px",
  justifyContent: "center",
}));

export const StyledPagination = styled(Pagination)(({ theme }) => ({
  alignSelf: "center",
}));

export const StyledPaginationItem = styled(PaginationItem)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: theme.palette.background.dark,
    color: theme.palette.background.default,
    "&:hover": {
      backgroundColor: `${theme.palette.background.dark} !important`,
    },
  },

  borderRadius: "0px",
}));

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  root: {
    background: "transparent",
  },
  "& .MuiAccordion-root": {
    background: "transparent",
  },
}));
