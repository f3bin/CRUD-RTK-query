import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
     reducerPath: 'userApi',
     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3033/' }),
     tagTypes: ['User'],
     endpoints: (builder) => ({
          getAllUsers: builder.query({
               query: () => "users",
               providesTags: ['User']
          }),
          deleteUser: builder.mutation({
               query: ({ id }) => ({
                    url: `users/${id}`,
                    method: 'DELETE',
                    body: id,
               }),

          }),
          hideUser: builder.mutation({
               query: (body) => ({
                    url: `users/${body.id}`,
                    method: 'PUT',
                    body: body
               })
          }),
          addUser: builder.mutation({
               query: (newData) => ({
                    url: '/users',
                    method: 'POST',
                    body: newData
               })
          }),
          editUser: builder.mutation({
               query: (body) => ({
                    url: `users/${body.id}`,
                    method: 'PUT',
                    body: body
               })
          })
     })
})

export const { useGetAllUsersQuery, useDeleteUserMutation,useHideUserMutation, useEditUserMutation, useAddUserMutation } = userApi;