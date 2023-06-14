import React from "react";
import { Link } from "react-router-dom";

const Guide = () => {
  const images = [];
  return (
    <div className="justify-center">
      <Link to={"/detail"} className="flex justify-end">
        <label className="bg-blue-500 hover:bg-white hover:text-baharRed text-white font-semibold rounded-lg px-4 py-2 cursor-pointer">
          자세히
        </label>
      </Link>
      <div className="justify-center">
        {images.map((image, index) => (
          /* eslint-disable-next-line */
          <img src={image} className="flex-none w-screen" key={index} />
        ))}
      </div>
    </div>
  );
};
export default Guide;
