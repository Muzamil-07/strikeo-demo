import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
import { environment } from '../constants'

const baseUrl = 'https://strikeo.com/api'
export const nodeAPI = createApi({
  reducerPath: 'nodeAPI',
  baseQuery: fetchBaseQuery({ baseUrl }),

  // Entities of API
  tagTypes: ['User', 'Cart', 'Favourites', 'Order', 'ShippingDetails'],

  endpoints: builder => ({
    //********** Login User query
    loginUser: builder.mutation({
      query: body => ({
        url: '/user/login',
        method: 'POST',
        body
      }),
      invalidatesTags: ['User', 'Order']
    }),

    //********** Sign up User
    userSignup: builder.mutation({
      query: body => ({
        url: '/user/signup',
        method: 'POST',
        body
      }),
      invalidatesTags: ['User', 'Order']
    }),

    //********** Update User
    updateUser: builder.mutation({
      query: body => ({
        url: '/user/update-profile',
        method: 'PUT',
        body,
        headers: {
          authorization: `Bearer ${Cookies.get('jwt')}`
        }
      }),
      invalidatesTags: ['User']
    }),

    //********** Forgot Password Email
    forgotPassword: builder.mutation({
      query: body => ({
        url: '/user/forgotpassword',
        method: 'POST',
        body
      })
      // invalidatesTags: [ 'User' ],
    }),
    //********** Reset Password
    resetPassword: builder.mutation({
      query: payload => ({
        url: `/user/resetpassword/${payload.resetToken}`,
        method: 'POST',
        body: payload.data
      })
      // invalidatesTags: [ 'User' ],
    }),
    //*********** Get all countries data
    getAllCountries: builder.query({
      query: () => ({
        url: 'https://restcountries.com/v2/all',
        method: 'GET',
        headers: {
          authorization: `Bearer ${Cookies.get('jwt')}`
        }
      })
    }),
    //*********** Get all Products related to specific category
    getAllProducts: builder.query({
      query: payload => ({
        url: `/product?page=${payload.page}&limit=${payload.limit}${
          payload.category ? '&category=' + payload.category : ''
        }${payload.search ? '&search=' + payload.search : ''}${
          payload.all ? '&all=true' : ''
        }`,
        method: 'GET'
      })
    }),
    //*********** Get specific product based on id
    getProduct: builder.query({
      query: payload => ({
        url: `/product/${payload.id}`,
        method: 'GET'
      })
    }),
    //*********** Get products related to specific product id
    getRelatedProducts: builder.query({
      query: payload => ({
        url: `/product/related/${payload.id}`,
        method: 'GET'
      })
    }),
    //*********** Get All Categories
    getAllCategories: builder.query({
      query: () => ({
        url: `/category?all=true`,
        method: 'GET'
      })
    }),
    //*********** Add item to cart
    addItemToCart: builder.mutation({
      query: body => ({
        url: '/cart/add',
        method: 'POST',
        body,
        headers: {
          authorization: `Bearer ${Cookies.get('jwt')}`
        }
      }),
      invalidatesTags: ['Cart']
    }),
    //*********** Remove item to cart
    removeItemFromCart: builder.mutation({
      query: body => ({
        url: '/cart/remove',
        method: 'POST',
        body,
        headers: {
          authorization: `Bearer ${Cookies.get('jwt')}`
        }
      }),
      invalidatesTags: ['Cart']
    }),
    //*********** Get Cart
    getCart: builder.query({
      query: () => ({
        url: `/cart`,
        method: 'GET',
        headers: {
          authorization: `Bearer ${Cookies.get('jwt')}`
        }
      }),
      providesTags: ['Cart']
    }),
    //*********** Get Favourites
    getFavourites: builder.query({
      query: () => ({
        url: `/user/favourites`,
        method: 'GET',
        headers: {
          authorization: `Bearer ${Cookies.get('jwt')}`
        }
      }),
      providesTags: ['Favourites']
    }),
    //*********** Add item to favourites
    addItemToFavourites: builder.mutation({
      query: id => ({
        url: `/user/favourites/add/${id}`,
        method: 'POST',
        headers: {
          authorization: `Bearer ${Cookies.get('jwt')}`
        }
      }),
      invalidatesTags: ['Favourites']
    }),
    //*********** Remove item to favourites
    removeItemFromFavourites: builder.mutation({
      query: id => ({
        url: `/user/favourites/remove/${id}`,
        method: 'POST',
        headers: {
          authorization: `Bearer ${Cookies.get('jwt')}`
        }
      }),
      invalidatesTags: ['Favourites']
    }),

    //***** Get Orders
    getOrders: builder.query({
      query: ({ page, completed, search, limit = 5 }) => ({
        url: `/order?page=${page}&completed=${completed}&search=${search}&limit=${limit}`,
        method: 'GET',
        headers: {
          authorization: `Bearer ${Cookies.get('jwt')}`
        }
      }),
      transformResponse: response => response.data,
      providesTags: ['Order']
    }),

    //***** Create Shipping
    createShipping: builder.mutation({
      query: body => ({
        url: `/user/shipping-details`,
        method: 'POST',
        body,
        headers: {
          authorization: `Bearer ${Cookies.get('jwt')}`
        }
      }),
      invalidatesTags: ['ShippingDetails', 'User']
    }),

    //***** Get all products to review
    getProductsToReview: builder.query({
      query: () => ({
        url: '/product/pending-review',
        method: 'GET',
        headers: {
          authorization: `Bearer ${Cookies.get('jwt')}`
        }
      }),
      transformResponse: response => response.data,
      providesTags: ['Reviews']
    }),

    //***** Get all reviewed products
    getAllReviewedProducts: builder.query({
      query: () => ({
        url: '/product/reviewed',
        method: 'GET',
        headers: {
          authorization: `Bearer ${Cookies.get('jwt')}`
        }
      }),
      transformResponse: response => response.data,
      providesTags: ['Reviews']
    }),

    //***** Add review
    addReview: builder.mutation({
      query: payload => ({
        url: `/product/${payload.id}/review`,
        method: 'POST',
        body: payload.body,
        headers: {
          authorization: `Bearer ${Cookies.get('jwt')}`
        }
      }),
      invalidatesTags: ['Reviews']
    })
  })
})

export const {
  useUserSignupMutation,
  useUpdateUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useLoginUserMutation,
  useGetAllProductsQuery,
  useGetProductQuery,
  useGetRelatedProductsQuery,
  useGetAllCategoriesQuery,
  useAddItemToCartMutation,
  useGetCartQuery,
  useRemoveItemFromCartMutation,
  useGetFavouritesQuery,
  useAddItemToFavouritesMutation,
  useRemoveItemFromFavouritesMutation,
  useGetOrdersQuery,
  useCreateShippingMutation,
  useGetProductsToReviewQuery,
  useAddReviewMutation,
  useGetAllReviewedProductsQuery
} = nodeAPI
