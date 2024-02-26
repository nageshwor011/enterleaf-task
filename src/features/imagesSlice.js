import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allFetchImages: [],
  displayingImages: [],
  pageNo: 1,
  limit: 10,
  albumIds: [],
  filteredData: [],
  page: 1,
  albumFilterId: "",
  searchingText: "",
};

export const imagesSlice = createSlice({
  name: "imagesSlice",
  initialState,
  reducers: {
    storeAllImages: (state, action) => {
      const uniqueIds = [
        ...new Set(action.payload.map((imagesData) => imagesData.albumId)),
      ];
      state.allFetchImages = action.payload;
      state.albumIds = uniqueIds;
      state.filteredData = action.payload;
    },
    updateFilteredData: (state, { payload }) => {
      state.filteredData = payload;
      state.albumFilterId = "";
    },
    updatePage: (state, { payload }) => {
      state.page = payload;
    },
    onFilterByAlbumId: (state, { payload }) => {
      const filteredByIds = state.allFetchImages.filter(
        (imageData) => imageData.albumId === Number(payload)
      );
      state.displayingImages = filteredByIds;
    },
    onChangeFilterByAlbumHandler: (state, { payload }) => {
      state.albumFilterId = payload;
      state.searchingText = "";
      if (payload) {
        const filteredByIds = state.allFetchImages?.filter(
          (imageData) => imageData.albumId === Number(payload)
        );
        state.filteredData = filteredByIds;
      } else {
        state.filteredData = state.allFetchImages;
      }
    },
    resetFilterByAlbum: (state) => {
      state.albumFilterId = "";
    },
    updateSearchHandler: (state, { payload }) => {
      state.searchingText = payload;
    },
    resetSearchHandler: (state) => {
      state.searchingText = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  storeAllImages,
  onFilterByAlbumId,
  updateFilteredData,
  updatePage,
  onChangeFilterByAlbumHandler,
  resetFilterByAlbum,
  updateSearchHandler,
  resetSearchHandler,
} = imagesSlice.actions;

export default imagesSlice.reducer;
