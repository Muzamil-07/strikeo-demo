import { useState } from "react";
import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Stack,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import {
  CheckoutTitle,
  DividerDot,
  ItemPrice,
  StyledDivider,
  CheckoutPageContainer,
  TotalAmountContainer,
  TotalText,
  EndContainer,
  EndButton,
  ShippingContainer,
  ContainerHeading,
  ContainerButton,
  ContainerText,
  FinalShippingAddressContainer,
  FSAText,
  MoreIcon,
  ButtonContainer,
  CrossButton,
  SubmitButton,
} from "../../theme/themes";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../../../../redux/slices/User";
import { setCart } from "../../../../../redux/slices/Cart";
import {
  useCreateOrderMutation,
  useUpdateUserMutation,
} from "../../../../../services/nodeApi";
import { setBillingAddress } from "../../../../../redux/slices/Billing";
import { AddressForm, AddressFields } from "../../theme/themes";
import countries from "./../../../../../data/countries.json";
import cities from "./../../../../../data/cities.json";
import DownIcon from "../../assets/ArrowDown.svg";
import PlusIcon from "../../assets/Plus.svg";
import CheckoutIcon from "../../assets/Checkout.svg";
import MoreSvg from "./../../assets/More.svg";
import CrossIcon from "../../assets/Cross.svg";
import { Link, useNavigate } from "react-router-dom";

const paymentOps = ["Cash", "Card"];

const shippingAddressSchema = yup.object({
  firstName: yup.string().required("First name is mandatory"),
  lastName: yup.string().required("Last name is mandatory"),
  phone: yup.string().required("Phone number is mandatory"),
  email: yup.string().email("Invalid email").required("Email is mandatory"),
  country: yup.string().required("Country is mandatory"),
  city: yup.string().required("City is mandatory"),
  state: yup.string().required("State is mandatory"),
  address: yup.string().required("Address is mandatory"),
  zipCode: yup.string().required("Zip code is mandatory"),
});

const OrderPlacedDialog = ({ open, openSet }) => {
  const navigate = useNavigate();
  return (
    <Dialog
      open={open}
      onClose={() => {
        openSet(false);
        navigate("/");
      }}
    >
      <DialogTitle>
        <CrossButton
          onClick={() => {
            navigate("/");
            openSet(false);
          }}
        >
          <img src={CrossIcon} alt="CrossIcon" />
        </CrossButton>
      </DialogTitle>
      <DialogContent>
        <Typography textAlign="center">Confirm Order</Typography>
        <Typography textAlign="center" pt={3}>
          Your order has been placed successfully. Please check your mail to
          confirm the order!
        </Typography>
      </DialogContent>
      <StyledDivider>
        <DividerDot />
      </StyledDivider>

      <ButtonContainer display="flex" justifyContent="center" py={2}>
        <SubmitButton
          onClick={() => {
            navigate("/");
            openSet(false);
          }}
        >
          <Link to="https://mail.google.com" target="blank">
            Confirm Now
          </Link>
        </SubmitButton>
        <SubmitButton
          outlined
          onClick={() => {
            navigate("/");
            openSet(false);
          }}
        >
          Back to home
        </SubmitButton>
      </ButtonContainer>
    </Dialog>
  );
};

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const [drawer, setDrawer] = useState(false);
  const [isOrderPlaceedDialogOpen, setIsOrderPlaceedDialogOpen] =
    useState(false);
  const [anchorEl, setAnchorEl] = useState(HTMLElement > null);
  const [selectedPaymentOpt, selectedPaymentOptSet] = useState("Cash");
  const billingDetails = useSelector((state) => state.billing);
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const shippingAddressInitialValues = {
    firstName: billingDetails.firstName || "",
    lastName: billingDetails.lastName || "",
    phone: billingDetails.phone || "",
    email: billingDetails.email || "",
    country: billingDetails.country || "",
    city: billingDetails.city || "",
    state: billingDetails.state || "",
    address: billingDetails.address || "",
    zipCode: billingDetails.zipCode || "",
    instruction: billingDetails.instruction || "",
  };
  const formik = useFormik({
    validationSchema: shippingAddressSchema,
    initialValues: shippingAddressInitialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const res = await updateUser({
        id: user.details.id,
        billing: { ...values },
      });
      if (res.data) {
        dispatch(setUser(res.data.data));
        dispatch(setBillingAddress({ ...values }));
        setDrawer(false);
        toast.success("Shipping address saved successfully!");
      } else {
        toast.error("Error occured!");
      }
    },
  });
  const [createOrder, { isLoading: isPlaceOrderLoading }] =
    useCreateOrderMutation();
  const [updateUser, { isLoading: isUpdateUserLoading }] =
    useUpdateUserMutation();
  const sortedCountries = countries.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const selectedCountry = sortedCountries.find(
    (country) => country.name === formik.values.country
  );
  const states =
    cities[
      formik.values.country?.split(" ").join("_") +
        "-" +
        selectedCountry?.isoCode
    ];
  const statesAvailable = Object.keys(states || {})
    .sort((a, b) => a.localeCompare(b))
    .map((state) => state.split("-")[0]);
  const citiesAvailable = Object.values(states || {})
    .flatMap((stateCities) => stateCities.map((city) => city))
    .sort((a, b) => a.name.localeCompare(b.name));
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(open);
  };
  const placeOrder = async () => {
    if (!user.details?.billing?.id) {
      toast.error("Please add shipping address first!");
      return;
    }
    const res = await createOrder({
      ...user.details.billing,
    });
    dispatch(
      setCart({
        owner: null,
        bill: 0,
        items: [],
      })
    );
    if ("error" in res) toast.error(res.error.data.message);
    else setIsOrderPlaceedDialogOpen(true);
  };
  return (
    <>
      <OrderPlacedDialog
        open={isOrderPlaceedDialogOpen}
        openSet={setIsOrderPlaceedDialogOpen}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={drawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <CheckoutPageContainer>
          <Stack>
            <CheckoutTitle>
              {user?.details?.billing?.id
                ? "Edit shipping address"
                : "Add shipping address"}
            </CheckoutTitle>
            <StyledDivider>
              <DividerDot />
            </StyledDivider>
          </Stack>

          <AddressForm>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box>
                  <AddressFields
                    variant="standard"
                    label="First Name"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    fullWidth
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <FormHelperText error>
                      {formik.errors.firstName}
                    </FormHelperText>
                  )}
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <AddressFields
                    variant="standard"
                    label="Last Name"
                    fullWidth
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <FormHelperText error>
                      {formik.errors.lastName}
                    </FormHelperText>
                  )}
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <AddressFields
                    variant="standard"
                    label="Contact"
                    fullWidth
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <FormHelperText error>{formik.errors.phone}</FormHelperText>
                  )}
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <AddressFields
                    variant="standard"
                    label="Email"
                    fullWidth
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <FormHelperText error>{formik.errors.email}</FormHelperText>
                  )}
                </Box>
              </Grid>
            </Grid>
            <Box>
              <AddressFields
                variant="standard"
                label="Address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                fullWidth
              />
              {formik.touched.address && formik.errors.address && (
                <FormHelperText error>{formik.errors.address}</FormHelperText>
              )}
            </Box>
            <Box>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="country">Country</InputLabel>
                <Select
                  labelId="country"
                  value={formik.values.country}
                  name="country"
                  label="Country"
                  onChange={formik.handleChange}
                >
                  <MenuItem disabled value="Country">
                    Country
                  </MenuItem>
                  {sortedCountries.map((country, i) => (
                    <MenuItem key={country.name + i} value={country.name}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {formik.touched.country && formik.errors.country && (
                <FormHelperText error>{formik.errors.country}</FormHelperText>
              )}
            </Box>
            <Box>
              <FormControl variant="standard" fullWidth>
                <InputLabel id="city">City</InputLabel>
                <Select
                  labelId="city"
                  value={formik.values.city}
                  name="city"
                  label="city"
                  onChange={formik.handleChange}
                >
                  <MenuItem disabled value="City">
                    City
                  </MenuItem>
                  {citiesAvailable.map((city, i) => (
                    <MenuItem key={city.name + i} value={city.name}>
                      {city.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {formik.touched.city && formik.errors.city && (
                <FormHelperText error>{formik.errors.city}</FormHelperText>
              )}
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box>
                  <FormControl variant="standard" fullWidth>
                    <InputLabel id="state">State</InputLabel>
                    <Select
                      labelId="state"
                      value={formik.values.state}
                      name="state"
                      label="state"
                      onChange={formik.handleChange}
                    >
                      <MenuItem disabled value="State">
                        State
                      </MenuItem>
                      {statesAvailable.map((state, i) => (
                        <MenuItem key={state + i} value={state}>
                          {state}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {formik.touched.state && formik.errors.state && (
                    <FormHelperText error>{formik.errors.state}</FormHelperText>
                  )}
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <AddressFields
                    variant="standard"
                    label="ZIP code"
                    fullWidth
                    name="zipCode"
                    value={formik.values.zipCode}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.zipCode && formik.errors.zipCode && (
                    <FormHelperText error>
                      {formik.errors.zipCode}
                    </FormHelperText>
                  )}
                </Box>
              </Grid>
            </Grid>
            <AddressFields
              variant="standard"
              label="Delivery Instructions"
              name="instruction"
              value={formik.values.instruction}
              onChange={formik.handleChange}
              fullWidth
              error={formik.touched.instruction && !!formik.errors.instruction}
            />
          </AddressForm>
        </CheckoutPageContainer>
        <EndContainer>
          <EndButton onClick={formik.handleSubmit}>
            {user?.details?.billing?.id ? "EDIT NOW" : "ADD NOW"}{" "}
            {isUpdateUserLoading && <CircularProgress size={24} />}
          </EndButton>
        </EndContainer>
      </SwipeableDrawer>
      <CheckoutPageContainer>
        <Stack>
          <CheckoutTitle>Checkout</CheckoutTitle>
          <StyledDivider>
            <DividerDot />
          </StyledDivider>
        </Stack>
        <ShippingContainer>
          <ContainerHeading variant="caption">
            Shipping Address
          </ContainerHeading>
          {user?.details?.billing?.id ? (
            <FinalShippingAddressContainer onClick={() => setDrawer(true)}>
              <MoreIcon component="img" src={MoreSvg} />
              <Typography>
                {user.details.billing.firstName} {user.details.billing.lastName}
              </Typography>
              <FSAText variant="caption">
                {user.details.billing.address}
              </FSAText>
              <FSAText variant="caption">
                {user.details.billing.city} {user.details.billing.country},{" "}
                {user.details.billing.state}
              </FSAText>
              <FSAText variant="caption">{user.details.billing.phone}</FSAText>
            </FinalShippingAddressContainer>
          ) : (
            <ContainerButton onClick={() => setDrawer(true)}>
              <ContainerText>Add Shipping Address</ContainerText>
              <img src={PlusIcon} alt="PlusIcon" />
            </ContainerButton>
          )}
        </ShippingContainer>
        <ShippingContainer>
          <ContainerHeading variant="caption">Payment Method</ContainerHeading>
          <ContainerButton onClick={handleClick} disabled>
            <ContainerText>
              {selectedPaymentOpt
                ? selectedPaymentOpt
                : "Select payment Method"}
            </ContainerText>
            <img src={DownIcon} alt="DownIcon" />
          </ContainerButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{ sx: { py: 0 } }}
          >
            <Box>
              {paymentOps.map((el) => {
                return (
                  <MenuItem
                    key={el}
                    onClick={() => {
                      selectedPaymentOptSet(el);
                      setAnchorEl(null);
                    }}
                    selected={el === selectedPaymentOpt}
                  >
                    {el}
                  </MenuItem>
                );
              })}
            </Box>
          </Menu>
        </ShippingContainer>
      </CheckoutPageContainer>
      <EndContainer sx={{ position: "fixed", bottom: 0, width: "100%" }}>
        <TotalAmountContainer>
          <TotalText variant="body2">Total</TotalText>
          <ItemPrice>{cart.bill} T.K</ItemPrice>
        </TotalAmountContainer>
        <EndButton onClick={placeOrder}>
          <img src={CheckoutIcon} alt="CheckoutIcon" />
          Place Order {isPlaceOrderLoading && <CircularProgress size={24} />}
        </EndButton>
      </EndContainer>
    </>
  );
};

export default PlaceOrder;
