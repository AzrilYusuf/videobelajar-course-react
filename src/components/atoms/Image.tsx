import React from "react";
import { ImageProps } from "../../interfaces/interfaces";


const Image: React.FC<ImageProps> = ({ className, src, alt, style, handleClick }) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      style={style}
      onClick={handleClick}
    />
  );
};

export default Image;
