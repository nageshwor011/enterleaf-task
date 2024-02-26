import React, { useEffect } from "react";
import { useGetAllImagesQuery } from "../services/images";
import { useSelector, useDispatch } from "react-redux";
import { storeAllImages } from "../features/imagesSlice";
import SelectByAlbumDropdown from "../components/SelectByAlbumDropdown";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import RenderTableRow from "../components/RenderTableRow";
import { tableHeader } from "../constants";
import Loader from "../components/Loader";

export default function Home() {
  const { data: listOfImages, isLoading } = useGetAllImagesQuery();
  const { filteredData, limit, page } = useSelector((state) => state.images);

  const dispatch = useDispatch();
  useEffect(() => {
    if (listOfImages) {
      dispatch(storeAllImages(listOfImages.slice(0, 120)));
    }
  }, [listOfImages]);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const DisplayTableRow =
    filteredData?.length > 0 ? (
      filteredData
        ?.slice((page === 1 ? 0 : page - 1) * limit, limit * page)
        .map((imageData) => {
          return <RenderTableRow imageData={imageData} key={imageData.id} />;
        })
    ) : (
      <tr className="border-gray-50 bg-gray-100 dark:border-gray-700">
        <td className="p-4" colSpan={4}>
          <h6>
            <center>No Data Found</center>
          </h6>
        </td>
      </tr>
    );
  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative overflow-x-auto">
        <div className="mb-4 p-3 flex flex-wrap md:flex-nowrap justify-between items-center shadow-sm bg-gray-300 rounded-lg">
          <span className="m-0 p-0 mb-3 md:mb-0 font-semibold text-lg text-gray-700">
            Images
          </span>
          <div className="flex flex-wrap md:flex-nowrap gap-3">
            <SelectByAlbumDropdown />
            <SearchBar />
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 shadow-md">
            <thead className="text-xs text-slate-700 uppercase bg-gray-300">
              <tr>
                {tableHeader?.map(({ name }) => (
                  <th scope="col" className="px-6 py-3" key={name}>
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>{DisplayTableRow}</tbody>
          </table>
        </div>
      </div>
      <Pagination />
    </div>
  );
}
