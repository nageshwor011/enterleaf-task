import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetAllImagesQuery } from "../services/images";
import Loader from "../components/Loader";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { imageData, isLoading } = useGetAllImagesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      imageData: data?.find((imageData) => imageData.id === Number(id)),
    }),
  });
  const { url, title } = imageData ?? {};
  if (isLoading) {
    return <Loader />;
  }

  const navigateToHomePage = () => {
    navigate("/");
  };
  return (
    <div className="mx-auto max-w-2xl">
      <div
        className="bg-white p-2 rounded-md shadow-sm cursor-pointer"
        onClick={navigateToHomePage}
      >
        <i className="fa-solid fa-arrow-left me-2"></i>Back to list
      </div>
      <div className="bg-white mt-2 border border-gray-200 rounded-lg shadow w-full p-3">
        <div className="mx-auto">
          <h2 className="text-2xl mx-auto">{title}</h2>
          <div className="mt-4 mx-auto">
            <img
              className="rounded-lg mx-auto"
              src={url}
              alt={title}
              width={300}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
