import FavouriteItem from './FavItem'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RxCrossCircled } from 'react-icons/rx'
import { useEffect, useRef } from 'react'
import { Button } from 'flowbite-react'

const Favourites = ({ removeItem, onClose, onCheckout }) => {
  const navigate = useNavigate()
  const user = useSelector(state => state.user)
  const favourites = useSelector(state => state.favourites)
  const containerRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      containerRef.current.classList.remove(
        'transform-none',
        'translate-x-full'
      )
    }, 50)

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-50 z-[100]'>
        <div
          ref={containerRef}
          className='w-full md:w-[30rem] z-[20000] h-[70%] p-4 bg-white absolute bottom-0 right-0 flex flex-col justify-between transition-transform duration-500 translate-x-full'
        >
          <div>
            <div className='flex justify-between text-black'>
              <div className='pb-2 border-b-2 border-black w-[85%]'>
                <h3 className='text-2xl font-semibold'>Favourites</h3>
              </div>

              <div onClick={onClose} className='cursor-pointer'>
                <RxCrossCircled className='w-6 h-6' />
              </div>
            </div>
            <div className='overflow-y-auto mt-3'>
              {favourites?.length > 0 ? (
                favourites.map(item => (
                  <FavouriteItem
                    key={item.id}
                    item={item}
                    removeItem={() => removeItem(item)}
                  />
                ))
              ) : (
                <div className='text-black text-sm text-center'>
                  Your favourite list is empty.
                </div>
              )}
            </div>
          </div>

          <div>
            <div className='pt-4 text-center'>
              {favourites?.length > 0 ? (
                <div className='flex justify-center'>
                  <Button
                    onClick={() => navigate('/shop?category=jacket')}
                    className='bg-[#DD8560]'
                  >
                    Add More Favourites
                  </Button>
                </div>
              ) : (
                <div className='flex justify-center '>
                  <Button
                    onClick={() => navigate('/shop?category=jacket')}
                    className='bg-[#DD8560]'
                  >
                    Add Favourites
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Favourites
