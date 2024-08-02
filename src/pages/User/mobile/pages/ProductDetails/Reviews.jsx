import React from 'react'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ProductRating, StyledAccordion } from '../../theme/themes'
import { MdExpandMore } from 'react-icons/md'
import Avatar from '@mui/material/Avatar'
import moment from 'moment'
import { Typography } from '@mui/material'

const Reviews = ({ reviews }) => {
  return (
    <StyledAccordion>
      <AccordionSummary
        expandIcon={<MdExpandMore color={'white'} size={20} />}
        aria-controls='panel1-content'
        id='panel1-header'
        sx={{ fontWeight: 'bold', fontSize: '1rem' }}
      >
        Reviews{' '}
        <span style={{ fontSize: '12px', marginLeft: '5px', color: 'grey' }}>
          ({reviews?.length})
        </span>
      </AccordionSummary>
      <AccordionDetails>
        {reviews?.map((review, i) => (
          <div key={i} className='flex mb-4'>
            <div>
              <Avatar rounded />
            </div>
            <div className='pl-3'>
              <div>
                <span style={{ fontSize: '14px' }}>{review.user.username}</span>
                <span
                  style={{
                    background: 'grey',
                    color: 'black',
                    marginLeft: '5px',
                    paddingBlock: '2px',
                    paddingInline: '5px',
                    fontSize: '11px',
                    borderRadius: '6px'
                  }}
                >
                  {moment(review.reviewedDate).fromNow()}{' '}
                </span>
              </div>

              <Typography sx={{ color: 'grey' }}>
                {review.description}
              </Typography>
              <ProductRating value={review.rating} readOnly size='small' />
            </div>
          </div>
        ))}
      </AccordionDetails>
    </StyledAccordion>
  )
}

export default Reviews
