import React from "react";
import img1 from "../assets/img.gif";
const GuidePage = () => {
  const images = [img1];
  return (
    <div className="flex overflow-x-auto">
      {images.map((image) => (
        /* eslint-disable-next-line */
        <img src={image} className="flex-none w-full h-screen" />
      ))}
    </div>
  );
};
export default GuidePage;
