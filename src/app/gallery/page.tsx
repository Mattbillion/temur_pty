import { HeroSection } from "@/app/gallery/_sections/hero-section";
import { Gallery } from "@/app/gallery/_sections/gallery";

export default function Page() {
  return (
    <div className="w-full">
      <HeroSection />
      <Gallery />
    </div>
  );
}
