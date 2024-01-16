import { useEffect, useState } from 'react'
import { NavLink, Navigate, useLocation, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard/ProductCard'
import { useGetAllProductsQuery } from '../../../services/nodeApi'
import ModelCanvas from '../Canvas/Canvas'
import { Laptop } from '../Experience/Items/Computer/Laptop'
import ContentLoader from '../components/ContentLoader/ContentLoader'
import ExportModel from '../components/ModelExporter'
import Header from '../components/Header/Header'
import { Pagination } from 'flowbite-react'
import VideoComponent from '../components/Video/VideoComponent'

const Products = () => {
  const { state } = useLocation()
  console.log('----------=======', state)

  if (!state) return <Navigate to='/experience' />
  const [currentPage, setCurrentPage] = useState(1)
  const [contentVisibility, setContentVisibility] = useState(false)

  const { category } = useParams()

  const { data, isLoading, refetch } = useGetAllProductsQuery(
    {
      category: category,
      page: currentPage,
      limit: 10
    },
    { skip: !currentPage }
  )

  const [products, setProducts] = useState(null)

  const onPageChange = page => {
    setCurrentPage(page)

    // Call refetch to fetch data with the updated page number
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
      <VideoComponent setContentVisibility={setContentVisibility} />

      <Header background={'black'} />
      {contentVisibility && (
        <div className="bg-[url('/strikeo.png')] h-screen bg-cover bg-no-repeat bg-center bg-fixed text-white px-24">
          <div className='fixed left-0 top-0 bg-black bg-opacity-60 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none'></div>
          <div className='fixed inset-0 z-[1065] h-full  pt-[6rem] pb-[3rem]'>
            <div className='h-full w-11/12 mx-auto rounded-2xl bg-primary bg-opacity-70 pl-8 pr-6 py-8'>
              <div className='text-2xl font-semibold flex justify-center items-start relative'>
                <NavLink to='/experience'>
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
                <h3 className='text-2xl'>Products</h3>
              </div>
              <div className='h-full py-6 pt-14'>
                <div className='h-full w-full flex gap-4'>
                  <div className='w-1/3 px-4 bg-black flex justify-center items-center'>
                    <ExportModel type={state.item} category={category} />
                  </div>

                  <div
                    className={`flex-1 px-4 border-l flex flex-wrap overflow-y-auto info-scroll ${
                      !products && 'justify-center'
                    }`}
                  >
                    {isLoading && <ContentLoader />}
                    {!isLoading && !data && !products && (
                      <div className='flex items-center justify-center'>
                        <p className='text-[white] text-2xl font-bold'>
                          No Products found for{' '}
                          <span className='text-tertiary'>"{category}"</span>!
                        </p>
                      </div>
                    )}
                    {products &&
                      products.map((product, index) => {
                        return (
                          <ProductCard
                            key={index}
                            product={product}
                            item={state.item}
                            category={product.category} //temporary
                          />
                        )
                      })}
                  </div>
                  {data && data.data && (
                    <div className='fixed bottom-[7%] right-[5%]'>
                      <Pagination
                        currentPage={currentPage}
                        totalPages={data.data.totalPages}
                        onPageChange={onPageChange}
                        showIcons
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Products
