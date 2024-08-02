import React from 'react'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ProductContainer, StyledAccordion } from '../../theme/themes'
import { MdExpandMore } from 'react-icons/md'
import { useGetRelatedProductsQuery } from '../../../../../services/nodeApi'
import CircularProgress from '@mui/material/CircularProgress'
import ProductCard from '../../components/ProductCard'

const RelatedProducts = ({ id }) => {
  const { data, isLoading: isRelatedProductsLoading } =
    useGetRelatedProductsQuery({ id })
  if (isRelatedProductsLoading)
    return (
      <div className='flex justify-center items-center h-full'>
        <CircularProgress color='inherit' />
      </div>
    )
  return (
    <StyledAccordion>
      <AccordionSummary
        expandIcon={<MdExpandMore color={'white'} size={20} />}
        aria-controls='panel1-content'
        id='panel1-header'
        sx={{ fontWeight: 'bold', fontSize: '1rem' }}
      >
        Related Products
      </AccordionSummary>
      <AccordionDetails>
        <ProductContainer container spacing={2} sx={{ paddingInline: 0 }}>
          {data?.data
            .filter(prod => prod._id !== id)
            .map((item, index) => (
              <ProductCard key={index} item={item} />
            ))}
        </ProductContainer>
      </AccordionDetails>
    </StyledAccordion>
  )
}

export default RelatedProducts
