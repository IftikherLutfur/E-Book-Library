import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import type IBook from "../../types";
interface BookApiResponse {
  success: boolean;
  message: string;
  data: IBook[];
}
export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl:`${import.meta.env.VITE_API_URL}/api`,
  
  }),
  tagTypes: ["Books", "Borrow"],
  endpoints: (builder) => ({

    getBooks: builder.query<BookApiResponse, void>({
      query: () => "/books",
      providesTags: ["Books"]
    }),

    getBorrow: builder.query({
      query: () => "/borrow",
      providesTags: ["Borrow"]
    }),

    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData
      }),
      invalidatesTags: ["Books"]
    }),

    createBorrow: builder.mutation({
  query: (borrowData) => ({
    url: "borrow",
    method: "POST",
    body: borrowData,
  }),
  invalidatesTags: ["Borrow"],
}),

updateBook: builder.mutation({
   query:({bookId,  updateData})=> ({
   url:`/books/${bookId}`,
   method: "PATCH",
   body: updateData
   }),
   invalidatesTags: ["Books"]
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
