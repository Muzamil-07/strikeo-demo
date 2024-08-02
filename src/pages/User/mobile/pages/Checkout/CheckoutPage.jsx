import { useSelector } from "react-redux";
import {
  CheckoutItem,
  CheckoutTitle,
  DividerDot,
  ItemAbout,
  ItemAmmountContainer,
  ItemButton,
  ItemDesc,
  ItemImage,
  ItemName,
  ItemPrice,
  StyledDivider,
  CheckoutPageContainer,
  PromoDelieveryContainer,
  PromoDelieveryField,
  TotalAmountContainer,
  TotalText,
  EndContainer,
  EndButton,
} from "../../theme/themes";
import { Stack, Divider, Box } from "@mui/material";
import MinusIcon from "../../assets/Minus.svg";
import PlusIcon from "../../assets/Plus.svg";
import PromoIcon from "../../assets/Promo.svg";
import DelieveryIcon from "../../assets/Delievery.svg";
import CheckoutIcon from "../../assets/Checkout.svg";

const CheckoutPage = ({ setCheckoutStep }) => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <CheckoutPageContainer>
        <Stack>
          <CheckoutTitle>Checkout</CheckoutTitle>
          <StyledDivider>
            <DividerDot />
          </StyledDivider>
        </Stack>
        <Box sx={{ maxHeight: "51vh", overflow: "auto" }}>
          {cart.items?.map((item) => (
            <CheckoutItem key={item.product.id}>
              <ItemImage
                component="img"
                src={item.details.product?.image || ""}
              />
              <ItemAbout>
                <ItemName variant="body2">{item.product?.name}</ItemName>
                <ItemDesc variant="caption">
                  {item.product?.description}
                </ItemDesc>
                <ItemAmmountContainer>
                  <ItemButton>
                    <img src={MinusIcon} alt="MinusIcon" />
                  </ItemButton>
                  {item.details?.quantity}
                  <ItemButton>
                    <img src={PlusIcon} alt="MinusIcon" />
                  </ItemButton>
                </ItemAmmountContainer>
                <ItemPrice>
                  {item.details?.price} <span className="text-sm">T.K</span>
                </ItemPrice>
              </ItemAbout>
            </CheckoutItem>
          ))}
        </Box>

        <PromoDelieveryContainer>
          <PromoDelieveryField
            placeholder="Add Promo Code"
            disableUnderline
            startAdornment={<img src={PromoIcon} alt="PromoIcon" />}
            disabled
          />
          <Divider flexItem />
          <PromoDelieveryField
            placeholder="Delievery"
            disableUnderline
            startAdornment={<img src={DelieveryIcon} alt="DelieveryIcon" />}
            endAdornment={"Free"}
            disabled
          />
        </PromoDelieveryContainer>
      </CheckoutPageContainer>
      <EndContainer sx={{ position: "fixed", bottom: 0, width: "100%" }}>
        <TotalAmountContainer>
          <TotalText variant="body2">Est. Total</TotalText>
          <ItemPrice>{cart.bill} T.K</ItemPrice>
        </TotalAmountContainer>
        <EndButton onClick={() => setCheckoutStep(2)}>
          <img src={CheckoutIcon} alt="CheckoutIcon" />
          Checkout
        </EndButton>
      </EndContainer>
    </>
  );
};

export default CheckoutPage;
