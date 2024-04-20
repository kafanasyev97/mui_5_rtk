import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://tasks.tizh.ru/' }),
  endpoints: (build) => ({
    getUserList: build.query({
      query: () => 'v1/user/index',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Users', id })),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
    }),

    getUser: build.query({
      query: (id) => `v1/user/view?id=${id}`,
    }),

    getFoodsList: build.query({
      query: () => 'v1/user/get-food-list',
    }),

    createUser: build.mutation({
      query: (body) => ({
        url: 'v1/user/create',
        method: 'POST',
        body,
      }),
    }),

    updateUser: build.mutation({
      query: ({ id, formData }) => ({
        url: `v1/user/update?id=${id}`,
        method: 'PUT',
        body: formData,
      }),
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `v1/user/delete?id=${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),
  }),
})

export const {
  useGetUserListQuery,
  useGetUserQuery,
  useGetFoodsListQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi
