import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilterByAlbum,
  resetSearchHandler,
  updateFilteredData,
  updatePage,
  updateSearchHandler,
} from "../features/imagesSlice";

const SearchBar = () => {
  const imagesData = useSelector((state) => state.images);
  const { allFetchImages: originalData, searchingText } = imagesData;

  const dispatch = useDispatch();
  const handleSearch = (event) => {
    event.preventDefault();
    const titleFoundItem = originalData?.filter((imageData) => {
      const title = imageData.title.toLowerCase();
      if (title.match(searchingText.toLowerCase())) {
        return imageData;
      }
      return false;
    });
    dispatch(updateFilteredData(titleFoundItem));
    dispatch(resetFilterByAlbum());
    dispatch(updatePage(1));
  };

  return (
    <form className="w-100" onSubmit={handleSearch}>
      <div className="flex flex-wrap md:flex-nowrap justify-start gap-3">
        <input
          type="text"
          id="default-search"
          className="block ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 placeholder-gray-500 focus:ring-slate-600 focus:border-slate-600 active:border-slate-200 outline-none "
          placeholder="Search image"
          value={searchingText}
          onChange={(event) =>
            dispatch(updateSearchHandler(event.target.value))
          }
          required
        />
        <div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            <i className="fa-solid fa-magnifying-glass me-1"></i> Search
          </button>
        </div>
        <div>
          <button
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            onClick={() => {
              dispatch(updateFilteredData(originalData));
              dispatch(resetSearchHandler());
            }}
            type="button"
          >
            <i className="fa-solid fa-delete-left me-1"></i> Clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
