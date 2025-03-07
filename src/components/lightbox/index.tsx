import React from "react";
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function ImageLightBox({
  open,
  setOpen,
  images,
}: ImageLightBoxProps) {
  return (
    <Lightbox
      plugins={[Thumbnails]}
      thumbnails={{
        border: 1,
        borderColor: "black",
      }}
      open={open}
      close={() => setOpen(false)}
      slides={images.map((image, key) => ({
        id: key,
        src: image.src,
      }))}
    />
  );
}

interface ImageLightBoxProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  images: ImageType[];
}

interface ImageType {
  src: string;
  alt: string;
}
