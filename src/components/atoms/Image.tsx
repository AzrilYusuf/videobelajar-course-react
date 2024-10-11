import React from "react";

interface Props {
  className?: string;
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

const Image: React.FC<Props> = ({ className, src, alt, style }) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      style={style}
    />
  );
};

export default Image;
