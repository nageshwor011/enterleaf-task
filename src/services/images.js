import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imagesApi = createApi({
  reducerPath: "imagesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    getAllImages: builder.query({
      query: () => ({
        url: "photos",
        method: "GET",
      }),
    }),
    getImageDetailById: builder.query({
      query: (id) => {
        return { url: `photos/${id}`, method: "GET" };
      },
    }),
    getProductByCategories: builder.query({
      query: () => ({
        url: `products/categories`,
        method: "GET",
      }),
    }),
  }),
});
//this is auto genereated hooks
export const {
  useGetAllImagesQuery,
  useGetImageDetailByIdQuery,
  useGetProductByCategoriesQuery,
} = imagesApi;
