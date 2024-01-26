import Header from '../components/Header'
import Footer from '../components/Footer'
import { Tabs, Flowbite } from 'flowbite-react'
import History from './History'
import ToReview from './ToReview'

const theme = {
  tabs: {
    base: 'flex flex-col gap-2',
    tablist: {
      base: 'flex text-center',
      styles: {
        default: 'flex-wrap border-b border-gray-200 dark:border-gray-700',
        underline:
          'flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700',
        pills:
          'flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2',
        fullWidth:
          'w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none'
      },
      tabitem: {
        base: 'flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:outline-none',
        styles: {
          default: {
            base: 'rounded-t-lg',
            active: {
              on: 'bg-gray-100 dark:bg-gray-800',
              off: 'text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300'
            }
          },
          underline: {
            base: 'rounded-t-lg',
            active: {
              on: 'border-b-2 border-b-lime-200 active text-white bg-gradient-to-r from-teal-200 to-lime-200 text-transparent bg-clip-text',
              off: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'
            }
          },
          pills: {
            base: '',
            active: {
              on: 'rounded-lg  text-white',
              off: 'rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
            }
          },
          fullWidth: {
            base: 'ml-0 first:ml-0 w-full rounded-none flex',
            active: {
              on: 'p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none',
              off: 'bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none'
            }
          }
        },
        icon: 'mr-2 h-5 w-5'
      }
    },
    tabitemcontainer: {
      base: '',
      styles: {
        default: '',
        underline: '',
        pills: '',
        fullWidth: ''
      }
    },
    tabpanel: 'py-3'
  }
}

const ReviewProducts = () => {
  return (
    <div>
      <Header background='black' />
      <div className="bg-[url('/strikeo.webp')] h-screen bg-cover bg-no-repeat bg-center bg-fixed text-white px-24">
        <div className='fixed left-0 top-0 bg-black bg-opacity-60 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none'></div>
      </div>
      <div className='fixed inset-0 z-[1065] pt-[7rem]'>
        <div className='h-3/4 px-32 pt-12'>
          <Flowbite theme={{ theme }}>
            <Tabs style='underline'>
              <Tabs.Item active title='To Review'>
                <ToReview />
              </Tabs.Item>
              <Tabs.Item title='History'>
                <History />
              </Tabs.Item>
            </Tabs>
          </Flowbite>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ReviewProducts
