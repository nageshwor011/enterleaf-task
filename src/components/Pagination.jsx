import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePage } from "../features/imagesSlice";

const Pagination = () => {
  const { filteredData, limit, page } = useSelector((state) => state.images);

  const totalPages = Math.ceil(filteredData?.length / limit || 1);
  const dispatch = useDispatch();

  if (filteredData?.length <= 0 || filteredData.length < limit) return null;

  return (
    <div className="bg-gray-300 p-3 flex flex-wrap md:flex-nowrap justify-between items-center mt-3 rounded-lg shadow-sm">
      <div className="text-sm text-gray-800 mb-2 md:mb-0">
        Showing page <span className="mx-1 font-semibold">{page}</span>of
        <span className="mx-1 font-semibold">{totalPages}</span>
      </div>
      <div className="inline-flex overflow-x-auto">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 border border-gray-200 rounded-s-lg hover:text-blue-700 focus:z-10"
            onClick={() => (page === 1 ? null : dispatch(updatePage(page - 1)))}
          >
            Prev
          </button>
          {totalPages > 1 &&
            [...new Array(totalPages)].map((_, index) => {
              const currentPage = index + 1;
              return (
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 border-t border-b border-gray-200 hover:text-blue-700 focus:z-10 ${
                    page === currentPage
                      ? "border-b-blue-900 text-blue-700"
                      : ""
                  } focus:border-b-blue-900 focus:text-blue-700 `}
                  key={index}
                  onClick={() => dispatch(updatePage(currentPage))}
                >
                  {currentPage}
                </button>
              );
            })}
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 border border-gray-200 rounded-e-lg "
            onClick={() =>
              totalPages > page ? dispatch(updatePage(page + 1)) : null
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
