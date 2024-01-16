import { useNavigate } from 'react-router-dom'
import { removeItemIcon } from '../assets'
import { ClipLoader } from 'react-spinners'
import { useState } from 'react'

const ShoppingCartItem = ({ item, removeItem, key }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const handleRemoveItem = async id => {
    setIsLoading(true)
    await removeItem(id)
    setIsLoading(false)
  }

  return (
    <div
      key={key}
      className='grid grid-cols-[max-content_1fr] gap-5 p-2 text-black'
    >
      <div className='flex justify-center items-center bg-secondary bg-opacity-50 w-10'>
        <img
          src={item.product.image.replace(
            'http://localhost:3000/',
            'http://localhost:8000/'
          )}
          alt={item.product.name}
          className='w-8 h-8'
        />
      </div>
      <div className='relative'>
        <div
          onClick={() =>
            navigate(`/products/${item.product.id}`, {
              state: {
                category: item.product.category
              }
            })
          }
          className='flex flex-col cursor-pointer'
        >
          <span>{item.product.name}</span>
          <div className='flex gap-4'>
            <span className='text-secondary'>{item.details.quantity}</span>
            <span className='text-secondary'>x</span>
            <span>T.K {item.details.price}</span>
          </div>
        </div>
        {!isLoading && (
          <button
            onClick={() => handleRemoveItem(item.product.id)}
            className='text-red-500 absolute bottom-1 right-2'
          >
            <img src={removeItemIcon} alt='' />
          </button>
        )}
        {isLoading && (
          <div className='absolute bottom-1 right-2'>
            <ClipLoader color='#808080' size={20} />
          </div>
        )}
      </div>
    </div>
  )
}

export default ShoppingCartItem
