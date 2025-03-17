import React from "react";
import Lightbox from "yet-another-react-lightbox";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { CloudinaryImage } from "@/components/gallery/render-images";
import { CldImage } from "next-cloudinary";

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
      render={{
        thumbnail: (props) => (
          <CldImage
            src={(props.slide as unknown as Record<string, string>).src}
            alt=""
            width={props.rect.width}
            height={props.rect.height}
            quality="auto:low"
            className="h-full w-full"
            style={{ objectFit: props.imageFit || "contain" }}
          />
        ),
        slide: (props) => (
          <CldImage
            src={(props.slide as unknown as Record<string, string>).src}
            alt=""
            width={props.rect.width}
            height={props.rect.height}
            quality="auto:low"
            className="h-full w-full object-contain"
          />
        ),
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
