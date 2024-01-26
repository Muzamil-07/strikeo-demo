/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { Card, Rating } from 'flowbite-react'
import ImageContainer from '../../../../components/ImageContainer'

const ProductCard = ({ product, item, category }) => {
  let { id, image, name, description, salePrice, ratings } = product
  const starElements = Array.from({ length: 5 }, (_, index) => (
    <Rating.Star key={index} filled={index < ratings} />
  ))

  return (
    <>
      <Card className='w-52 h-72 m-3 bg-gradient-to-r from-teal-200 to-lime-200'>
        <ImageContainer src={image} width={160} height={160} />
        <div className=''>
          <Link
            to={`/products/${id}`}
            state={{ product, item, category }}
            className='text-xl'
          >
            <h5 className='text-sm font-semibold tracking-tight text-gray-900 dark:text-white'>
              {name}
            </h5>
          </Link>
          <small className='text-black opacity-50'>
            {description.slice(0, 20)}
          </small>
          <div className='flex items-center'>
            <Rating>{starElements}</Rating>
            <span className='ml-3 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800'>
              {ratings || 0}.0
            </span>
          </div>
          <span className='text-md pb-3 font-bold text-gray-900 dark:text-white'>
            {salePrice} TK
          </span>
        </div>
      </Card>
    </>
  )
}

export default ProductCard
