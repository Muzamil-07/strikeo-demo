import React, { useEffect, useState } from 'react'
import { bikeLogo, cart, heartEmpty } from '../../../../assets'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react'
import {
  nodeAPI,
  useGetAllCategoriesQuery,
  useGetAllProductsQuery,
  useGetCartQuery,
  useGetFavouritesQuery,
  useRemoveItemFromCartMutation,
  useRemoveItemFromFavouritesMutation
} from '../../../../services/nodeApi'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../../redux/slices/User'
import { removeBillingAddress } from '../../../../redux/slices/Billing'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { setCart } from '../../../../redux/slices/Cart'
import { setFavourites } from '../../../../redux/slices/Favourite'
import Favourites from '../../../../components/Favourites'
import ShoppingCart from '../../../../components/Cart'
import { HiShoppingCart } from 'react-icons/hi'
import { MdOutlineRateReview } from 'react-icons/md'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useDebounce } from 'use-debounce'
import { FaSearch } from 'react-icons/fa'
import { setContentVisibilty } from '../../../../redux/slices/ContentVisibility'

const Header = ({ background }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isFavouritesOpen, setIsFavouritesOpen] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [removeItemFromCart] = useRemoveItemFromCartMutation()
  const [removeItemFromFavourites] = useRemoveItemFromFavouritesMutation()

  const [categories, setCategories] = useState(null)
  const { data, isLoading, isError } = useGetAllCategoriesQuery()

  const user = useSelector(state => state.user)

  useEffect(() => {
    if (data) setCategories(data)
  }, [data])

  const handleCheckout = () => {
    // setItems([]);
    setIsCartOpen(false)
  }

  const {
    data: cartData,
    isLoading: isCartLoading,
    isError: isCartError
  } = useGetCartQuery()
  const { data: productsData } = useGetAllProductsQuery({
    page: 1,
    search: searchText,
    limit: 10
  })
  const {
    data: favouriteData,
    isLoading: isFavouriteLoading,
    isError: isFavouriteError
  } = useGetFavouritesQuery()

  useEffect(() => {
    if (cartData && cartData.data) {
      dispatch(setCart(cartData.data))
    }
    if (favouriteData) {
      dispatch(setFavourites(favouriteData.data))
    }
  }, [cartData, dispatch, favouriteData])

  const removeFromCart = async id => {
    const response = await removeItemFromCart({ productId: id })
  }

  const handleRemoveFav = async product => {
    const response = await removeItemFromFavourites(product.id)
    // try {
    //   const res = await http.post("/user/favourites/remove/" + product.id);
    //   dispatch(setUser(res.data.data));
    //   getUserFavourites();
    //   toast.success(`${product.name} removed from favourites!`);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  const handleLogout = () => {
    dispatch(logout())
    dispatch(nodeAPI.util.resetApiState())
    dispatch(removeBillingAddress())
    Cookies.remove('jwt')
    toast.success('You have been logged out!')
    navigate('/login')
  }

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    setSearchText(string)
  }

  // const handleOnHover = (result) => {
  // 	// the item hovered
  // 	console.log(result);
  // };

  const handleOnSelect = item => {
    navigate(`/products/${item.id}`, {
      state: {
        category: item.category,
        item
      }
    })
  }

  const formatResult = item => {
    return (
      <div className='flex gap-4 cursor-pointer'>
        <img src={item.image} alt={item.name} className='w-8 h-8' />
        <span>{item.name}</span>
      </div>
    )
  }

  const [toggleSearchbar, setToggleSearchbar] = useState(false)

  if (categories)
    return (
      <>
        <Navbar
          rounded
          className={`bg-transparent z-[20000] rounded-none absolute top-0 left-0 w-full`}
        >
          <Navbar.Brand href='/experience'>
            <img
              src={bikeLogo}
              alt='logo'
              className='w-20 cursor-pointer'
              onClick={() => navigate('/experience')}
            />
            <span className='self-center whitespace-nowrap text-xl font-semibold text-white'>
              STRIKE-O
            </span>
          </Navbar.Brand>

          <div className='flex gap-4 md:order-2'>
            <div style={{ width: !toggleSearchbar ? '' : 350 }}>
              {!toggleSearchbar ? (
                <FaSearch
                  color='white'
                  size={30}
                  className='mt-2 mr-3 cursor-pointer'
                  onClick={() => setToggleSearchbar(true)}
                />
              ) : (
                <ReactSearchAutocomplete
                  items={productsData?.data?.products || []}
                  onSearch={handleOnSearch}
                  onSelect={handleOnSelect}
                  inputDebounce={1000}
                  autoFocus
                  formatResult={formatResult}
                />
              )}
            </div>

            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt='User settings' img='' rounded />}
            >
              {user.isLoggedIn ? (
                <>
                  <Dropdown.Header>
                    <span className='block text-sm'>
                      {user.details.firstName + ' ' + user.details.lastName}
                    </span>
                    <span className='block truncate text-sm font-medium'>
                      {user.details.email}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item onClick={() => navigate('/orders')}>
                    Orders
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => navigate('/review-products')}>
                    Review Products
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setIsFavouritesOpen(true)}>
                    Favourite Items
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                </>
              ) : (
                <>
                  <Dropdown.Item>
                    <Link to='/login'>Login</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to='/register'>Register</Link>
                  </Dropdown.Item>
                </>
              )}

              {/* <Dropdown.Header>
      <span className='block text-sm'>Bonnie Green</span>
      <span className='block truncate text-sm font-medium'>
        name@flowbite.com
      </span>
    </Dropdown.Header>
    <Dropdown.Item>Profile</Dropdown.Item>
    <Dropdown.Item>Orders</Dropdown.Item>
    <Dropdown.Item>Review Products</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item>Sign out</Dropdown.Item> */}
            </Dropdown>

            <Navbar.Toggle />
            {cartData && (
              <div
                className='ml-5 cursor-pointer relative'
                onClick={() => setIsCartOpen(true)}
              >
                <small className='absolute top-[-8px] right-[-10px] bg-gradient-to-r from-teal-200 to-lime-200 text-center rounded-full w-[23px]'>
                  {cartData.data.items.length}
                </small>
                <HiShoppingCart color='white' size={30} className='mt-2' />
              </div>
            )}
          </div>
          <Navbar.Collapse>
            <Link
              to='/experience'
              className='cursor-pointer font-medium text-white'
            >
              Home
            </Link>
            <Link to='/about' className='cursor-pointer font-medium text-white'>
              About
            </Link>

            <Dropdown
              arrowIcon={true}
              inline
              dismissOnClick={false}
              renderTrigger={() => (
                <span className='text-white cursor-pointer'>Categories</span>
              )}
              size='lg'
            >
              {categories.data.map(category => {
                if (!category.subCategories)
                  return (
                    <Dropdown.Item>
                      <Link
                        to={`/products/`}
                        state={{
                          category: category.name,
                          item: 'laptop'
                        }}
                        onClick={()=>dispatch(setContentVisibilty(true))}
                      >
                        {category.name}
                      </Link>
                    </Dropdown.Item>
                  )
                else
                  return (
                    <Dropdown.Item>
                      <Dropdown
                        placement='right-start'
                        arrowIcon={true}
                        inline
                        label={category.name}
                        size='lg'
                        className='w-[300px]'
                      >
                        {category.subCategories.map((subCategory, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={() => dispatch(setContentVisibilty(true))}
                          >
                            <Link
                              to={`/products/category/${category.name}`}
                              state={{
                                category: category.name,
                                item: 'laptop'
                              }}
                              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                            >
                              {subCategory.name}
                            </Link>
                          </Dropdown.Item>
                        ))}
                      </Dropdown>
                    </Dropdown.Item>
                  )
              })}
            </Dropdown>
          </Navbar.Collapse>

          {isCartOpen && (
            <ShoppingCart
              // items={products.slice(0, 3)}
              removeItem={removeFromCart}
              onClose={() => setIsCartOpen(false)}
              onCheckout={handleCheckout}
              setIsCartOpen={setIsCartOpen}
            />
          )}
          {isFavouritesOpen && (
            <Favourites
              // favourites={favourites}
              onClose={() => setIsFavouritesOpen(false)}
              removeItem={handleRemoveFav}
            />
          )}
        </Navbar>
      </>
    )
  else return <></>
}

export default Header
