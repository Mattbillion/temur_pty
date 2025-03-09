import { Services } from "@/app/our-services/_sections/services";
import { HeroSection } from "@/app/our-services/_sections/hero-section";

export default function Page() {
  return (
    <div className="w-full">
      <HeroSection />
      <Services />
    </div>
  );
}
