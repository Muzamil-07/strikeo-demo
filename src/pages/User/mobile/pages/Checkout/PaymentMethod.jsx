import {
  CheckoutTitle,
  DividerDot,
  StyledDivider,
  CheckoutPageContainer,
  EndContainer,
  EndButton,
  ATMCardBg,
  MasterCardLogo,
  CardAboutContainer,
  AddressForm,
  CompactFields,
  AddressFields,
} from "../../theme/themes";
import { Stack, Typography } from "@mui/material";
import MastercardIcon from "../../assets/MastercardIcon.svg";

const PaymentMethod = () => {
  return (
    <>
      <CheckoutPageContainer>
        <Stack>
          <CheckoutTitle>Payment Method</CheckoutTitle>
          <StyledDivider>
            <DividerDot />
          </StyledDivider>
        </Stack>
        <ATMCardBg>
          <MasterCardLogo component="img" src={MastercardIcon} />
          <Stack>
            <CardAboutContainer>
              <Typography variant="body2">Iris Watson</Typography>
              <Typography variant="body2">03/25</Typography>
            </CardAboutContainer>
            <Typography variant="body2">2365 3654 2365 3698</Typography>
          </Stack>
        </ATMCardBg>

        <AddressForm>
          <AddressFields
            label="Name on Card"
            disableUnderline
            variant="standard"
          />
          <AddressFields
            label="Card Number"
            disableUnderline
            variant="standard"
          />
          <CompactFields>
            <AddressFields
              label="Exp Month"
              disableUnderline
              variant="standard"
            />
            <AddressFields
              label="Exp Date"
              disableUnderline
              variant="standard"
            />
          </CompactFields>
          <AddressFields label="CVV" disableUnderline variant="standard" />
        </AddressForm>
      </CheckoutPageContainer>

      <EndContainer>
        <EndButton>Add Card</EndButton>
      </EndContainer>
    </>
  );
};

export default PaymentMethod;
