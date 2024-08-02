import { useEffect, useState } from 'react'
import '@fontsource/tenor-sans'
import { Box } from '@mui/material'
import Navbar from '../../components/Navbar/Navbar'
import Products from './Products'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import { useGetAllProductsQuery } from '../../../../../services/nodeApi'
import CircularProgress from '@mui/material/CircularProgress'

const ProductsPageMobile = () => {
  const { state } = useLocation()
  if (!state) return <Navigate to='/' />
  const [currentPage, setCurrentPage] = useState(1)
  const { category } = useParams()
  const { data, isLoading, refetch } = useGetAllProductsQuery(
    {
      category: category,
      page: currentPage,
      limit: 10,
      all:true
    },
    { skip: !currentPage }
  )
  const [products, setProducts] = useState(null)
  const onPageChange = page => {
    setCurrentPage(page)
    refetch({
      category: category,
      page: page,
      limit: 10
    })
  }

  useEffect(() => {
    if (data && data.data) {
      setProducts(data.data.products)
    }
  }, [data])

  return (
    <>
      <Navbar />
      <Box pt={10} pb={5} sx={{ backgroundColor: '#111' }}>
        {isLoading ? (
          <div className='flex justify-center items-center h-full'>
            <CircularProgress />
          </div>
        ) : (
          <>
            {/* BANNER FOR 3D MODEL */}
            <Banner category={category} item={state.item} />
            <Products category={category} products={products} />
          </>
        )}
      </Box>
    </>
  )
}

export default ProductsPageMobile
