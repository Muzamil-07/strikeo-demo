/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useDebounce } from 'use-debounce'
import { Flowbite, Table } from 'flowbite-react'
import ClipLoader from 'react-spinners/ClipLoader'
import format from '../../../utils/format'
import Pagination from '../../../components/Pagination'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useGetOrdersQuery } from '../../../services/nodeApi'

const theme = {
  table: {
    root: {
      base: 'w-full text-left text-sm text-gray-500 dark:text-gray-400',
      shadow:
        'absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10',
      wrapper: 'relative'
    },
    body: {
      base: 'group/body',
      cell: {
        base: 'group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4'
      }
    },
    head: {
      base: 'group/head text-xs uppercase text-gray-700 dark:text-gray-400',
      cell: {
        base: 'group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700 px-6 py-3'
      }
    },
    row: {
      base: 'group/row',
      hovered: 'hover:bg-gray-50 dark:hover:bg-gray-600',
      striped:
        'even:bg-gray-50 odd:bg-gradient-to-r odd:from-teal-200 odd:to-lime-200'
    }
  }
}

const Orders = () => {
  const itemsPerPage = 5
  const [status, setStatus] = useState('All')
  const [searchText, setSearchText] = useState('')
  const [searchedOrder] = useDebounce(searchText, 1000)
  const [currentPage, setCurrentPage] = useState(1)
  const { data: paginatedData, isLoading } = useGetOrdersQuery({
    page: currentPage,
    limit: itemsPerPage,
    completed:
      status === 'Completed' ? 'true' : status === 'Progressing' ? 'false' : '',
    search: searchedOrder
  })
  const statusOptions = ['All', 'Completed', 'Progressing']

  const handlePageChange = page => {
    if (page === currentPage) return
    setCurrentPage(page)
  }

  const statusColor = {
    Pending: ['gray', '500/10'],
    Processing: ['blue', '700/10'],
    Shipped: ['yellow', '600/20'],
    Delivered: ['green', '600/20'],
    Cancelled: ['red', '600/10'],
    Progressing: ['blue', '700/10'],
    Completed: ['green', '600/20']
  }
  const createStatusBadge = status =>
    `inline-flex items-center rounded-md bg-${statusColor[status][0]}-50 px-2 py-1 text-xs font-medium text-${statusColor[status][0]}-700 ring-1 ring-inset ring-${statusColor[status][0]}-${statusColor[status][1]}`
  return (
    <div>
      <Header background='black' />
      <div className="bg-[url('/strikeo.webp')] h-screen bg-cover bg-no-repeat bg-center bg-fixed text-white px-24">
        <div className='fixed left-0 top-0 bg-black bg-opacity-60 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none'></div>
      </div>
      <div className='fixed inset-0 z-[1065] pt-[4rem]'>
        {isLoading || !paginatedData?.orders ? (
          <div className='h-3/4 flex justify-center items-center'>
            <ClipLoader size={60} color='#201F20' />
          </div>
        ) : (
          <div className='h-3/4 px-32 pt-12'>
            <div className='flex justify-between mb-5'>
              <div>
                <h3 className='text-lg text-white font-semibold'>
                  Search Filters
                </h3>
                <p className='text-sm mb-2 text-white'>
                  With the help of filters, you can easily find orders.
                </p>
                <div className='flex'>
                  <div>
                    <label
                      htmlFor='default-search'
                      className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
                    >
                      Search
                    </label>
                    <div className='relative'>
                      <div className='absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer'>
                        <svg
                          className='w-4 h-4 text-gray-500 dark:text-gray-400'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 20 20'
                        >
                          <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                          />
                        </svg>
                      </div>
                      <input
                        type='text'
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                        id='default-search'
                        className='block px-4 py-2 ps-10 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='Search orders...'
                      />
                    </div>
                  </div>
                  <div className='ml-5'>
                    <select
                      required
                      defaultValue={status}
                      onChange={e => {
                        setCurrentPage(1)
                        setStatus(e.target.value)
                      }}
                      className='block px-4 py-2 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      aria-label='Default select example'
                    >
                      {statusOptions &&
                        statusOptions.map(statusOption => (
                          <option key={statusOption} value={statusOption}>
                            {statusOption}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className='max-h-[650px] relative overflow-x-auto border shadow-md sm:rounded-lg'>
              <Flowbite theme={{ theme }}>
                <Table hoverable striped>
                  <Table.Head>
                    <Table.HeadCell className='text-sm' align='center'>
                      Order no.
                    </Table.HeadCell>
                    <Table.HeadCell className='text-sm' align='center'>
                      Items
                    </Table.HeadCell>
                    <Table.HeadCell className='text-sm' align='center'>
                      Total Bill
                    </Table.HeadCell>
                    <Table.HeadCell align='center' className='text-sm'>
                      Ordered On
                    </Table.HeadCell>
                    <Table.HeadCell align='center' className='text-sm'>
                      Payment Method
                    </Table.HeadCell>
                    <Table.HeadCell align='center' className='text-sm'>
                      Status
                    </Table.HeadCell>
                  </Table.Head>
                  {!paginatedData.orders?.length ? (
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell colSpan={12} align='center'>
                          <p className='text-black'>Nothing to show here!</p>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  ) : (
                    <Table.Body className='divide-y'>
                      {paginatedData.orders?.map(order => {
                        return (
                          <Table.Row
                            key={order.id}
                            className='bg-white dark:border-gray-700 dark:bg-gray-800'
                          >
                            <Table.Cell align='center'>
                              {order.orderNumber}
                            </Table.Cell>
                            <Table.Cell align='center'>
                              {order.orders.reduce(
                                (acc, _order) => acc + _order.items.length,
                                0
                              )}
                            </Table.Cell>
                            <Table.Cell
                              align='center'
                              className='whitespace-nowrap font-medium text-gray-900 dark:text-white'
                            >
                              {format.formatMoney(order?.bill)}
                            </Table.Cell>
                            <Table.Cell align='center'>
                              {format.formatDate(order?.orderedAt)}
                            </Table.Cell>
                            <Table.Cell
                              align='center'
                              className='flex justify-center pt-7'
                            >
                              {order?.payment.method}
                            </Table.Cell>
                            <Table.Cell align='center'>
                              <span
                                className={createStatusBadge(
                                  order?.isCompleted
                                    ? 'Completed'
                                    : 'Progressing'
                                )}
                              >
                                {order?.isCompleted
                                  ? 'Completed'
                                  : 'Progressing'}
                              </span>
                            </Table.Cell>
                          </Table.Row>
                        )
                      })}
                    </Table.Body>
                  )}
                </Table>
              </Flowbite>
            </div>
            {paginatedData && paginatedData.totalPages > 1 && (
              <nav
                className='flex items-center flex-wrap md:gap-0 gap-4 justify-between pt-4'
                aria-label='Table navigation'
              >
                <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
                  Showing{' '}
                  <span className='font-semibold '>
                    {(currentPage - 1) * itemsPerPage + 1}-
                    {Math.min(
                      currentPage * itemsPerPage,
                      paginatedData.totalOrders
                    )}
                  </span>{' '}
                  of{' '}
                  <span className='font-semibold '>
                    {paginatedData.totalOrders}
                  </span>
                </span>
                <Pagination
                  totalItems={paginatedData.totalOrders}
                  itemsPerPage={itemsPerPage}
                  onPageChange={handlePageChange}
                />
              </nav>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Orders
