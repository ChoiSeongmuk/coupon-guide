import React from "react";
import a from "../assets/a.jpeg";
import b from "../assets/b.jpeg";
import c from "../assets/c.jpeg";

const GuidePage = () => {
  const images = [a, b, c];
  return (
    <div className="justify-center">
      {images.map((image) => (
        /* eslint-disable-next-line */
        <img src={image} className="flex-none w-screen" />
      ))}
    </div>
  );
};
export default GuidePage;
