import { GetUserArgs, GetUserResponse } from '@/types/users';
import apiSlice from '../api/apiSlice';
import getUrl from '@/types/getUrl';

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<GetUserResponse, GetUserArgs>({
      query: ({ limit }) =>
        getUrl({
          baseUrl: `/users`,
          filterOptions: { limit: limit },
        }),
    }),
  }),

  overrideExisting: false,
});

export const { useGetUsersQuery } = usersApi;
