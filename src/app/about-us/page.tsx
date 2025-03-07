import { HeroSection } from "@/app/about-us/_sections/hero-section";
import { OurVisions } from "@/app/about-us/_sections/our-visions";
import { WhyChooseUsSection } from "@/app/about-us/_sections/why-choose-us";
import GetInTouchSection from "@/components/sections/get-in-touch";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <OurVisions />
      <WhyChooseUsSection />
      <GetInTouchSection />
    </div>
  );
}
