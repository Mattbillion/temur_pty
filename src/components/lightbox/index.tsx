import React from "react";
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { CloudinaryImage } from "@/components/gallery/render-images";

export default function ImageLightBox({
  open,
  setOpen,
  images,
  index,
}: ImageLightBoxProps) {
  return (
    <Lightbox
      plugins={[Thumbnails]}
      thumbnails={{
        border: 1,
        borderColor: "black",
      }}
      index={index}
      open={open}
      close={() => setOpen(false)}
      slides={images.map((image, key) => ({
        id: key,
        src: image.url,
        height: image.height,
        width: image.width,
      }))}
    />
  );
}

interface ImageLightBoxProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  images: CloudinaryImage[];
  index: number;
}
