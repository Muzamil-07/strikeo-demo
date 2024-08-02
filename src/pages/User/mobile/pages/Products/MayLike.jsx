import React from 'react';
import {DividerDot, MLContainer, MLTypography, MLImageBox, StyledDivider} from '../../theme/themes';

const MayLike = () => {
  return (
    <MLContainer>
      <MLTypography variant='h6'>You May Also Like</MLTypography>
      <StyledDivider flexItem invert>
        <DividerDot invert />
      </StyledDivider>
      <MLImageBox component='img' />
    </MLContainer>
  );
};

export default MayLike;
