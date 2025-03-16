import { Services } from "./_sections/services";
import { HeroSection } from "./_sections/hero-section";

export default function Page() {
  return (
    <div className="w-full">
      <HeroSection />
      <Services />
    </div>
  );
}
