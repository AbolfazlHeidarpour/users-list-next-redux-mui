import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import ListResponse from "../../../models/API/ListResponse";
import User from "../../../models/Users/User";
import DeleteUserResponse from "../../../models/API/DeleteUserResponse";

export const api = createApi({
  reducerPath: 'usersAPI',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3009/api/users'
  }),
  endpoints: (build) => ({
    listUsers: build.query<ListResponse<User>, Pick<ListResponse<User>, 'page' | 'per_page'>>({
      query: ({page, per_page}) => `/?page=${page}&per_page=${per_page}`,
      providesTags: (result, error, page) =>
        result
          ? [
            ...result.users.map(
              ({id}) => ({
                type: 'Users' as const,
                id
              })
            ),
            {
              type: 'Users',
              id: 'PARTIAL-LIST'
            }
          ]
          : [{type: 'Users', id: 'PARTIAL-LIST'}],
    }),
    deleteUser: build.mutation<DeleteUserResponse, string>({
      query: (id: string) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        {type: 'Users', id},
        {type: 'Users', id: 'PARTIAL-LIST'},
      ]
    })
  })
});