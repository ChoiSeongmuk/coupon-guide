import React from "react";
import img from "../assets/guide.jpeg";
const Guide = () => {
  const images = [img];
  return (
    <div className="justify-center">
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
