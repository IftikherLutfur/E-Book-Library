import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-system-seven-flax.vercel.app/api/",
  }),
  tagTypes: ["books"],
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
    createBorrow: builder.mutation({
  query: (borrowData) => ({
    url: "borrow",
    method: "POST",
    body: borrowData,
  }),
}),

updateBook: builder.mutation({
   query:({bookId,  updateData})=> ({
   url:`/books/${bookId}`,
   method: "PATCH",
   body: updateData
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
export const { useGetBooksQuery, useCreateBookMutation, useDeleteTaskMutation, useGetBorrowQuery, useCreateBorrowMutation, useUpdateBookMutation } = bookApi;
