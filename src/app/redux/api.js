import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://tasks.tizh.ru/' }),
  endpoints: (build) => ({
    getUserList: build.query({
      query: () => 'v1/user/index',
    }),
    createUser: build.mutation({
      query: (body) => ({
        url: 'v1/user/create',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGetUserListQuery, useCreateUserMutation } = userApi
