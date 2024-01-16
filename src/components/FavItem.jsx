import { useNavigate } from 'react-router-dom'
import { removeItemIcon } from '../assets'

const FavItem = ({ item, removeItem }) => {
  const navigate = useNavigate()
  return (
    <div className='grid grid-cols-[max-content_1fr] gap-5 p-2 text-black'>
      <div className='flex justify-center items-center bg-secondary bg-opacity-50 w-10'>
        <img
          src={item.image.replace(
            'http://localhost:3000/',
            'http://localhost:8000/'
          )}
          alt={item.name}
          className='w-8 h-8'
        />
      </div>
      <div className='relative'>
        <div
          onClick={() =>
            navigate(`/products/${item.id}`, {
              state: {
                category: item.category
              }
            })
          }
          className='flex flex-col cursor-pointer'
        >
          <span>{item.name}</span>
          <div className='flex gap-4'>
            <span className='text-secondary'>1</span>
            <span className='text-secondary'>x</span>
            <span>T.K {item.salePrice}</span>
          </div>
        </div>
        <button
          onClick={() => removeItem(item.id)}
          className='text-red-500 absolute bottom-1 right-2'
        >
          <img src={removeItemIcon} alt='' />
        </button>
      </div>
    </div>
  )
}

export default FavItem
