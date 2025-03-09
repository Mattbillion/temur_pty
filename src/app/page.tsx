import { HeroSection } from "@/components/hero-section/main";
import { OurServicesBento } from "@/components/sections/our-service";
import GallerySwiper from "@/components/sections/gallery-swiper";
import GetInTouchSection from "@/components/sections/get-in-touch";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <motion.div
      className="w-full space-y-[72px]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.2 }}
    >
      <HeroSection />
      <OurServicesBento />
      <GallerySwiper />
      <GetInTouchSection />
    </motion.div>
  );
}
