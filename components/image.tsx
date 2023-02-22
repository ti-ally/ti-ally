import React from "react";
// import ImageComp, { type ImageProps } from 'next/image';
import ImageComp, { type ExportedImageProps } from "next-image-export-optimizer";

type Props = ExportedImageProps;
// type Props = ImageProps;

export default function Image({
  children,
  ...rest
}: Props) {

  return (
    <ImageComp {...rest}>
      {children}
    </ImageComp>
  );
}