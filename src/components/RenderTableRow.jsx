import { Link } from "react-router-dom";

const RenderTableRow = ({ imageData }) => {
  const { id, title, thumbnailUrl } = imageData;
  return (
    <tr className=" border-gray-50 bg-gray-100 dark:border-gray-700">
      <td className="p-2">
        <Link to={`image-detail/${id}`}>{id}</Link>
      </td>
      <td className="p-2 text-md hover:text-blue-600">
        <Link to={`image-detail/${id}`}>{title}</Link>
      </td>
      <td className="p-2">
        <Link to={`image-detail/${id}`}>
          <img
            src={thumbnailUrl}
            width="50"
            className="rounded-full"
            alt="img"
          />
        </Link>
      </td>
    </tr>
  );
};
export default RenderTableRow;
