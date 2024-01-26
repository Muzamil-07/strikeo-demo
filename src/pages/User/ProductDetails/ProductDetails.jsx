/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import {
  NavLink,
  Navigate,
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'
import { Flowbite, Spinner, Rating } from 'flowbite-react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { IoMdHeart } from 'react-icons/io'
import ExportModel from '../components/ModelExporter'
import {
  useAddItemToCartMutation,
  useAddItemToFavouritesMutation,
  useGetFavouritesQuery,
  useGetProductQuery,
  useRemoveItemFromFavouritesMutation
} from '../../../services/nodeApi'
import ContentLoader from '../components/ContentLoader/ContentLoader'
import { Button } from 'flowbite-react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setFavourites } from '../../../redux/slices/Favourite'
import Header from '../components/Header/Header'
import Cookies from 'js-cookie'
import Reviews from './Reviews'
import RelatedProducts from './RelatedProducts'
import ImageContainer from '../../../components/ImageContainer'

const theme = {
  accordion: {
    root: {
      base: 'divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700',
      flush: {
        off: 'rounded-lg border',
        on: 'border-b'
      }
    },
    content: {
      base: 'py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg'
    },
    title: {
      arrow: {
        base: 'h-6 w-6 shrink-0',
        open: {
          off: '',
          on: 'rotate-180'
        }
      },
      base: 'flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400',
      flush: {
        off: '',
        on: 'bg-transparent dark:bg-transparent'
      },
      heading: '',
      open: {
        off: '',
        on: 'bg-none'
      }
    }
  }
}

const QuantitySelector = ({ handleDecrement, quantity, handleIncrement }) => {
  return (
    <div className='mt-3'>
      <label
        htmlFor='quantity-input'
        className='block mb-2 text-sm font-medium  dark:text-white'
        // className="bg-gradient-to-r from-teal-200 to-lime-200 text-transparent bg-clip-text"
      >
        Choose quantity:
      </label>
      <div className='relative flex items-center max-w-[8rem]'>
        <button
          type='button'
          id='decrement-button'
          onClick={handleDecrement}
          className='bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:outline-none'
        >
          <svg
            className='w-3 h-3 text-gray-900 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 18 2'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h16'
            />
          </svg>
        </button>
        <input
          type='text'
          id='quantity-input'
          aria-describedby='helper-text-explanation'
          className='border-x-0 border-gray-300 h-11 text-center text-sm block w-full py-2.5 dark:border-gray-600 dark:placeholder-gray-400 text-black'
          placeholder='999'
          value={quantity}
          readOnly
          required
        />
        <button
          type='button'
          id='increment-button'
          onClick={handleIncrement}
          className='bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:outline-none'
        >
          <svg
            className='w-3 h-3 text-gray-900 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 18 18'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9 1v16M1 9h16'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

const ProductDetails = () => {
  const { state } = useLocation()
  if (!state) <Navigate to='/experience' />

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [selectedImage, setSelectedImage] = useState('')
  const [favouriteItem, setFavouriteItem] = useState(null)
  const [selectedSize, setSelectedSize] = useState()
  const [selectedColor, setSelectedColor] = useState()
  const [quantity, setQuantity] = useState(1)

  const [addItemToCart, { isLoading: isAddToCartLoading }] =
    useAddItemToCartMutation()
  const [addItemToFavourites, { isLoading: isAddtoFavLoading }] =
    useAddItemToFavouritesMutation()
  const [removeItemFromFavourites, { isLoading: isRremoveFromFavLoading }] =
    useRemoveItemFromFavouritesMutation()

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }

  const { id } = useParams()
  const { data: productData, isLoading: isProductsLoading } =
    useGetProductQuery({ id })

  const { data: favouriteData, isLoading: isFavouriteLoading } =
    useGetFavouritesQuery()

  const starElements = Array.from({ length: 5 }, (_, index) => (
    <Rating.Star
      key={index}
      filled={index < Math.floor(productData?.data.averageRating) || 0}
    />
  ))

  const handleAddToCart = async () => {
    if (!Cookies.get('jwt')) return navigate('/login')

    const response = await addItemToCart({
      productId: id,
      quantity,
      selectedSize: selectedSize,
      selectedColor: selectedColor
    })
    if ('error' in response) {
      toast.error('Something went wrong! Try again')
    } else {
      toast.success('Item has been added to cart successfully!')
    }
  }
  const handleAddToFavourite = async () => {
    const response = await addItemToFavourites(id)
    if ('error' in response) {
      toast.error('Something went wrong! Try again')
    } else {
      toast.success('Item has been added to your favourite list!')
    }
  }
  const handleRemoveFromFavourite = async () => {
    const response = await removeItemFromFavourites(id)
    if ('error' in response) {
      toast.error('Something went wrong! Try again')
    } else {
      toast.success('Item has been removed from your favourite list!')
    }
  }

  useEffect(() => {
    if (productData) {
      setSelectedImage(
        productData.data.image.replace(
          'http://localhost:3000/',
          'http://localhost:8000/'
        )
      )
      setSelectedSize(productData.data.sizes[0])
      setSelectedColor(productData.data.colors[0])
    }
    if (favouriteData) {
      dispatch(setFavourites(favouriteData.data))
      setFavouriteItem(favouriteData.data.find(el => el.id === id))
    }
  }, [dispatch, favouriteData, id, productData])
  return (
    <>
      <Header background={'black'} />
      <div className="bg-[url('/strikeo.webp')] h-screen bg-cover bg-no-repeat bg-center bg-fixed text-white px-24">
        <div className='fixed left-0 top-0 bg-black bg-opacity-60 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none'></div>
        <div className='fixed inset-0 z-[1065] h-full pt-[6rem] pb-[3rem]'>
          <div className='h-full w-11/12 mx-auto rounded-2xl bg-primary bg-opacity-70 pl-8 pr-6 py-8'>
            {/*TOP BACK ARROW */}
            <div className='text-2xl font-semibold flex justify-center items-start relative'>
              <NavLink
                to={`/products/category/${state.category.name}`}
                state={{
                  category: state.category.name,
                  item: state.item
                }}
              >
                <svg
                  className='w-6 h-6 text-white absolute left-0'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='white'
                  viewBox='0 0 14 10'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 5H1m0 0 4 4M1 5l4-4'
                  />
                </svg>
              </NavLink>
            </div>

            <div className='h-full py-6 pt-14'>
              <div className='h-full w-full flex gap-4'>
                {/* LEFT CONTENT */}
                <div className='w-1/3 px-4 bg-black flex justify-center items-center'>
                  <ExportModel
                    type={state.item}
                    category={state.category.name}
                  />
                </div>

                {/* RIGHT CONTENT */}
                {productData ? (
                  <div className='flex-1 px-4 border-l overflow-y-auto info-scroll  flex-col gap-6'>
                    <div className='grid grid-cols-2 px-6 gap-3'>
                      <div className='items-center w-[80%] justify-center'>
                        <ImageContainer
                          width={350}
                          height={350}
                          src={productData.data.image}
                          // src={selectedImage}
                        />
                        <div className='grid grid-cols-4 gap-2'>
                          {productData.data.subImages?.map(
                            (otherImages, index, arr) => {
                              if (otherImages)
                                return (
                                  <div
                                    key={index}
                                    className={`w-[calc(100%/${arr.length})] h-50 cursor-pointer`}
                                    onClick={e =>
                                      setSelectedImage(e.target.src)
                                    }
                                  >
                                    <img
                                      // src={otherImages.replace(
                                      //   "http://localhost:3000/",
                                      //   "http://localhost:8000/"
                                      // )}
                                      src={otherImages}
                                      value={otherImages}
                                      alt={productData.data.name}
                                      className='h-auto max-w-full rounded-lg'
                                    />
                                  </div>
                                )
                            }
                          )}
                        </div>
                      </div>
                      <div className=''>
                        <div className='text-3xl mb-2'>
                          {productData.data.name}
                        </div>
                        <p className='text-secondary whitespace-normal mb-2'>
                          {productData.data.description}
                        </p>
                        <div className='flex'>
                          <Rating>{starElements}</Rating>
                          <span className='ml-3 rounded px-2.5 py-0.5 text-xs font-semibold text-cyan-800 bg-gradient-to-r from-teal-200 to-lime-200'>
                            {productData?.data.averageRating || 0}.0
                          </span>
                        </div>
                        <QuantitySelector
                          handleDecrement={handleDecrement}
                          quantity={quantity}
                          handleIncrement={handleIncrement}
                        />
                        <div className='mt-5'>
                          <div className='text-xl text-[white] font-semibold inline'>
                            Sizes:
                          </div>

                          <Button.Group className='ml-3'>
                            {productData.data.sizes.map((size, i) => {
                              return (
                                <button
                                  key={`size-${i}`}
                                  onClick={() => setSelectedSize(size)}
                                  className={`mr-2 ${
                                    selectedSize === size
                                      ? 'text-black bg-gradient-to-r from-teal-200 to-lime-200'
                                      : 'bg-[gray] text-black'
                                  }  hover:bg-gray-400 px-2 py-1 rounded-sm text-[black]`}
                                >
                                  {size}
                                </button>
                              )
                            })}
                          </Button.Group>
                        </div>

                        <div className='mt-5'>
                          <div className='text-xl mr-3 text-[white] font-semibold inline'>
                            Colors:
                          </div>

                          <Button.Group>
                            {productData.data.colors.map((color, i) => {
                              return (
                                <button
                                  key={`size-${i}`}
                                  onClick={() => setSelectedColor(color)}
                                  style={{
                                    background: color,
                                    border:
                                      selectedColor === color
                                        ? '2px solid #d9f99d'
                                        : 'none'
                                  }}
                                  className={`mr-2 p-6 rounded-[50%] `}
                                ></button>
                              )
                            })}
                          </Button.Group>
                        </div>

                        <div className='flex gap-4 my-6'>
                          <div className='text-xl font-semibold'>
                            {productData.data.salePrice} T.K.
                          </div>
                          {!favouriteItem ? (
                            isAddtoFavLoading ? (
                              <Spinner size='sm' />
                            ) : (
                              <button
                                className='ml-3'
                                onClick={handleAddToFavourite}
                              >
                                <IoMdHeartEmpty className='fill-lime-200 h-6 w-6' />
                              </button>
                            )
                          ) : isRremoveFromFavLoading ? (
                            <Spinner size='sm' />
                          ) : (
                            <button
                              className='ml-3'
                              onClick={handleRemoveFromFavourite}
                            >
                              <IoMdHeart className='fill-red-700 h-6 w-6' />
                            </button>
                          )}
                        </div>
                        {productData?.data?.amount === 0 ? (
                          <Button gradientDuoTone='tealToLime' disabled={true}>
                            Out of Stock
                          </Button>
                        ) : (
                          <Button
                            gradientDuoTone='tealToLime'
                            onClick={handleAddToCart}
                            disabled={isAddToCartLoading}
                            isProcessing={isAddToCartLoading}
                          >
                            Add to Cart
                          </Button>
                        )}
                      </div>
                    </div>
                    <div className='mt-14'>
                      {/**********************************(START) REVIEW ********************/}
                      <Flowbite theme={{ theme }}>
                        <Reviews reviews={productData.data.reviews} />
                        {/**********************************(END) REVIEW ********************/}

                        {/**********************************(START) RELATED PRODUCTS ********************/}
                        <RelatedProducts id={id} state={state} />
                        {/**********************************(END) RELATED PRODUCTS ********************/}
                      </Flowbite>
                    </div>
                  </div>
                ) : (
                  <div
                    className={
                      'flex-1 px-4 border-l flex flex-wrap overflow-y-auto info-scroll justify-center'
                    }
                  >
                    <ContentLoader />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
