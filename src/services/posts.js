// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3900/api/v1/' }),
  endpoints: (builder) => ({
    getHeadlines: builder.query({
      // If you need to pass in multiple parameters, pass them formatted as a single "options object".
      query: (limit) => `headlines?${limit}`,
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response, meta, arg) => response.data,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// Hooks are automatically generated based on the name of the endpoint in the service definition

export const { useGetHeadlinesQuery } = postApi;
