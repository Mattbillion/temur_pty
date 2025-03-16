import { HeroSection } from "@/components/hero-section";
// import { OurServicesBento } from "@/components/sections/our-service";
import GallerySwiper from "@/components/sections/gallery-swiper";
// import GetInTouchSection from "@/components/sections/get-in-touch";
import * as motion from "motion/react-client";
import { OurServicesBento } from "@/components/sections/our-service";
import GetInTouchSection from "@/components/sections/get-in-touch";

export default function Home() {
  return (
    <motion.div
      className="w-full"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.2 }}
    >
      <HeroSection wrapperClass="" imgSrc="/texture/text-texture-home.png" />
      <OurServicesBento />
      <GallerySwiper />
      <GetInTouchSection />
    </motion.div>
  );
}
