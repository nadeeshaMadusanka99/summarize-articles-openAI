import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi', 
    baseQuery: fetchBaseQuery({
        baseUrl : 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key" , '20bf62713amsh806764b8a78176bp13666fjsn7f0eec165715')
            headers.set("X-RapidAPI-Host" , 'article-extractor-and-summarizer.p.rapidapi.com')
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `./summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
});

export const {useLazyGetSummaryQuery} = articleApi;

// End of my one

