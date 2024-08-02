import React from 'react';
import {RecentSearch} from '../../theme/themes';
import CrossIcon from '../../assets/Cross.svg';

const RecentSearchChip = ({...props}) => {
  return (
    <RecentSearch
      {...props}
      clickable
      deleteIcon={<img src={CrossIcon} alt='CrossIcon' height={18} width={18} />}
    />
  );
};

export default RecentSearchChip;
