import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"]
    }),
    getBorrow: builder.query({
      query: () => "/borrow"
    }),
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData
      }),
      invalidatesTags: ["books"]
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE"

      }),
    }),
  }),
});



// Hook auto-named based on your endpoint: getBooks
export const { useGetBooksQuery, useCreateBookMutation, useDeleteTaskMutation, useGetBorrowQuery } = bookApi;
