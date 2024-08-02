import React from 'react'
import {
  BannerContainer,
  BannerImage,
  BannerText,
  BannerTextContainer,
  MLTypography
} from '../../theme/themes'
import '@fontsource/abhaya-libre'
import ExportModel from '../../../components/ModelExporter'

const Banner = ({ category, item }) => {
  return (
    <BannerContainer>
      <BannerTextContainer>
        <BannerText variant='h3'>{category}</BannerText>
        {/* <MLTypography>Collection</MLTypography> */}
      </BannerTextContainer>
      <div className='h-[400px] w-[100%] px-4 bg-black flex justify-center items-center'>
        <ExportModel category={category} type={item}/>
      </div>
    </BannerContainer>
  )
}

export default Banner
