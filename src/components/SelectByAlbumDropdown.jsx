import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onChangeFilterByAlbumHandler } from "../features/imagesSlice";

const SelectByAlbumDropdown = () => {
  const { albumIds, albumFilterId } = useSelector((state) => state.images);
  const dispatch = useDispatch();

  return (
    <form className="flex gap-2 items-center w-100 flex-1">
      <select
        id="albumId"
        className="w-100 bg-gray-100 border text-gray-500 pe-3 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-2 px-2 outline-none"
        value={albumFilterId}
        onChange={(e) => dispatch(onChangeFilterByAlbumHandler(e.target.value))}
      >
        <option value="">Filter By Album Id</option>
        {albumIds.map((id) => {
          return (
            <option value={id} key={id}>
              {id}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default SelectByAlbumDropdown;
