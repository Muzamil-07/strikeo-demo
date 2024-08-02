import { useState, useEffect } from 'react'
import HamburgerIcon from '../../assets/Hamburger.svg'
import SearchIcon from '../../assets/Search.svg'
import CartIcon from '../../assets/Cart.svg'
import { Stack, IconButton, Box } from '@mui/material'
import { TopBar } from '../../theme/themes'
import SearchDrawer from '../SearchDrawer/SearchDrawer'
import { bikeLogo } from '../../../../../assets'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  useGetCartQuery,
  useRemoveItemFromCartMutation,
  useRemoveItemFromFavouritesMutation
} from '../../../../../services/nodeApi'
import Badge from '@mui/material/Badge'
import { setCart } from '../../../../../redux/slices/Cart'
import { useDispatch, useSelector } from 'react-redux'
import ShoppingCart from '../../../../../components/Cart'
import Menu from '../Menu'
import Favourites from '../../../../../components/Favourites'

const Navbar = ({ bgLight }) => {
  const user = useSelector(state => state.user)
  const [drawerState, drawerStateSet] = useState(false)
  const [menuState, setMenuState] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isFavouritesOpen, setIsFavouritesOpen] = useState(false)

  const [removeItemFromCart] = useRemoveItemFromCartMutation()
  const [removeItemFromFavourites] = useRemoveItemFromFavouritesMutation()

  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const toggleSearchDrawer = () => {
    drawerStateSet(pre => !pre)
  }
  const toggleMenu = () => {
    setMenuState(pre => !pre)
  }
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
    // }
  }
  const handleCheckout = () => {
    // setItems([]);
    setIsCartOpen(false)
  }
  const {
    data: cartData,
    isLoading: isCartLoading,
    isError: isCartError
  } = useGetCartQuery(null, {
    skip: !user.isLoggedIn
  })

  useEffect(() => {
    if (cartData && cartData.data) {
      dispatch(setCart(cartData.data))
    }
  }, [cartData, dispatch])

  
    return (
      <Box zIndex={200000} position='fixed' width='100%'>
        <TopBar sx={{ backgroundColor: bgLight ? 'rgba(0,0,0,0.5)' : '#111' }}>
          <IconButton onClick={toggleMenu}>
            <img src={HamburgerIcon} alt='HamburgerIcon' />
          </IconButton>
          {location.pathname !== '/' && (
            <IconButton onClick={() => navigate('/')}>
              <img src={bikeLogo} width={45} alt='logo' />
            </IconButton>
          )}
          <Stack direction='row' gap={1}>
            <IconButton onClick={toggleSearchDrawer}>
              <img src={SearchIcon} alt='SearchIcon' />
            </IconButton>
            {cartData?.data ? (
              <IconButton onClick={() => setIsCartOpen(true)}>
                <Badge
                  badgeContent={cartData.data.items.length}
                  style={{ fontWeight: 'bold' }}
                  color='primary'
                >
                  <img src={CartIcon} alt='CartIcon' />
                </Badge>
              </IconButton>
            ) : (
              <img src={CartIcon} alt='CartIcon' />
            )}
          </Stack>
        </TopBar>
        <SearchDrawer
          drawerState={drawerState}
          toggleSearchDrawer={toggleSearchDrawer}
        />
        <Menu
          menuState={menuState}
          toggleMenu={toggleMenu}
          setIsFavouritesOpen={setIsFavouritesOpen}
        />

        {isCartOpen && (
          <ShoppingCart
            removeItem={removeFromCart}
            onClose={() => setIsCartOpen(false)}
            onCheckout={handleCheckout}
            setIsCartOpen={setIsCartOpen}
          />
        )}
        {isFavouritesOpen && (
          <Favourites
            onClose={() => setIsFavouritesOpen(false)}
            removeItem={handleRemoveFav}
          />
        )}
      </Box>
    )
}

export default Navbar
