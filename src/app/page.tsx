import { HeroSection } from "@/components/hero-section/main";
import { OurServicesBento } from "@/components/sections/our-service";
import GallerySwiper from "@/components/sections/gallery-swiper";

export default function Home() {
  return (
    <div className="w-full space-y-[72px]">
      <HeroSection />
      <OurServicesBento />
      <GallerySwiper />
    </div>
  );
}
