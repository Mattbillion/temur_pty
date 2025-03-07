import { HeroSection } from "@/components/hero-section/main";
import { OurServicesBento } from "@/components/sections/our-service";
import GallerySwiper from "@/components/sections/gallery-swiper";
import GetInTouchSection from "@/components/sections/get-in-touch";

export default function Home() {
  return (
    <div className="w-full space-y-[72px]">
      <HeroSection />
      <OurServicesBento />
      <GallerySwiper />
      <GetInTouchSection />
    </div>
  );
}
