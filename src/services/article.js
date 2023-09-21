import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
    reducerPath: 'ArticleApi', 
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `test`
        })
    })
});