import {
  BackgroundOverlay,
  ButtonContainer,
  CrossButton,
  DividerDot,
  EmojiCOntainer,
  PaymentId,
  StyledDivider,
  SubmitButton,
  SuccessAbout,
  SuccessCard,
  SuccessText,
  TickIconContainer,
  TickStarIcon1,
  TickStarIcon2,
} from '../../theme/themes';
import CrossIcon from '../../assets/Cross.svg';
import TickSvg from '../../assets/Tick.svg';
import TickStar1 from '../../assets/TickStar1.svg';
import TickStar2 from '../../assets/TickStar2.svg';
import Happy from '../../assets/Happy.svg';
import Disappointed from '../../assets/Disappointed.svg';
import InLove from '../../assets/InLove.svg';
import {Stack, IconButton} from '@mui/material';

const PaymentSuccess = () => {
  return (
    <>
      <SuccessCard>
        <CrossButton>
          <img src={CrossIcon} alt='CrossIcon' />
        </CrossButton>
        <SuccessText>Payment Success</SuccessText>
        <TickIconContainer>
          <img src={TickSvg} alt='TickIconContainer' />
          <TickStarIcon1 component='img' src={TickStar1} />
          <TickStarIcon2 component='img' src={TickStar2} />
        </TickIconContainer>
        <Stack>
          <SuccessAbout>Your payment was success</SuccessAbout>
          <PaymentId variant='subtitle2'>Payment ID 2345671</PaymentId>
        </Stack>
        <StyledDivider>
          <DividerDot />
        </StyledDivider>
        <Stack>
          <SuccessAbout>Rate your purchase</SuccessAbout>
          <EmojiCOntainer>
            <IconButton>
              <img src={Disappointed} alt='Disappointed' />
            </IconButton>
            <IconButton>
              <img src={Happy} alt='Happy' />
            </IconButton>
            <IconButton>
              <img src={InLove} alt='InLove' />
            </IconButton>
          </EmojiCOntainer>
        </Stack>
        <ButtonContainer>
          <SubmitButton>Submit</SubmitButton>
          <SubmitButton outlined>Back to home</SubmitButton>
        </ButtonContainer>
      </SuccessCard>
      <BackgroundOverlay />
    </>
  );
};

export default PaymentSuccess;
