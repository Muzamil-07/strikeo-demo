import {
  CheckoutTitle,
  DividerDot,
  StyledDivider,
  CheckoutPageContainer,
  EndContainer,
  EndButton,
  FinalShippingAddressContainer,
  FSAText,
  MoreIcon,
  FinalATMCard,
  TotalAmountContainer,
  TotalText,
  ItemPrice,
  CheckoutItem,
  ItemImage,
  ItemAbout,
  ItemName,
  ItemDesc,
  ItemAmmountContainer,
  ItemButton,
} from "../../theme/themes";
import { Stack, Typography } from "@mui/material";
import MoreSvg from "../../assets/More.svg";
import MastercardIcon from "../../assets/MastercardIcon.svg";
import CheckoutIcon from "../../assets/Checkout.svg";
import MinusIcon from "../../assets/Minus.svg";
import PlusIcon from "../../assets/Plus.svg";
import format from "../../../../../utils/format";

const FinalPage = () => {
  return (
    <>
      <CheckoutPageContainer>
        <Stack>
          <CheckoutTitle>Checkout</CheckoutTitle>
          <StyledDivider>
            <DividerDot />
          </StyledDivider>
        </Stack>

        <FinalShippingAddressContainer>
          <MoreIcon component="img" src={MoreSvg} />
          <Typography>Iris Watson</Typography>
          <FSAText variant="caption">606-3727 Ullamcorper. Street</FSAText>
          <FSAText variant="caption">Roseville NH 11523</FSAText>
          <FSAText variant="caption">(786) 713-8616</FSAText>
        </FinalShippingAddressContainer>

        <FinalATMCard>
          <img src={MastercardIcon} alt="MastercardLogo" />
          <Typography variant="body2">Master Card ending ••••89</Typography>
          <img src={MoreSvg} alt="MoreSvg" />
        </FinalATMCard>

        <CheckoutItem>
          <ItemImage component="img" src="" />
          <ItemAbout>
            <ItemName variant="body2">Biker helmet</ItemName>
            <ItemDesc variant="caption">Lorem ipsum</ItemDesc>
            <ItemAmmountContainer>
              <ItemButton>
                <img src={MinusIcon} alt="MinusIcon" />
              </ItemButton>
              1
              <ItemButton>
                <img src={PlusIcon} alt="MinusIcon" />
              </ItemButton>
            </ItemAmmountContainer>
            <ItemPrice>{format.formatMoney(120)}</ItemPrice>
          </ItemAbout>
        </CheckoutItem>
      </CheckoutPageContainer>

      <EndContainer>
        <TotalAmountContainer>
          <TotalText variant="body2">Est. Total</TotalText>
          <ItemPrice>{format.formatMoney(120)}</ItemPrice>
        </TotalAmountContainer>
        <EndButton>
          <img src={CheckoutIcon} alt="CheckoutIcon" />
          Checkout
        </EndButton>
      </EndContainer>
    </>
  );
};

export default FinalPage;
