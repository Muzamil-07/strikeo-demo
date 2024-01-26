import { Accordion, Avatar, Badge, Rating } from 'flowbite-react'
import moment from 'moment'

export default function Reviews ({ reviews }) {
  // const starElements =

  return (
    <Accordion className='border-none'>
      <Accordion.Panel>
        <Accordion.Title className='flex justify-center text-lg text-white py-3'>
          Reviews
        </Accordion.Title>
        <Accordion.Content>
          {reviews.map((review, i) => (
            <div key={i} className='flex mb-4'>
              <div>
                <Avatar rounded />
              </div>
              <div className='pl-3'>
                <div>
                  <small>{review.user.username}</small>
                  <Badge className='inline opacity-40 ml-1'>
                    {moment(review.reviewedDate).fromNow()}
                  </Badge>
                </div>

                <p style={{ fontSize: 14 }}>{review.description}</p>
                <Rating>
                  {Array.from({ length: 5 }, (_, index) => (
                    <Rating.Star
                      key={index}
                      filled={index < Math.floor(review.rating) || 0}
                    />
                  ))}
                </Rating>
              </div>
            </div>
          ))}
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}
