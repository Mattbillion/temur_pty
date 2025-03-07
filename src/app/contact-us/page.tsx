import { HeroSection } from "@/app/contact-us/_sections/hero-section";
import GetInTouchSection from "@/components/sections/get-in-touch";

export default function Page() {
  return (
    <div className="w-full">
      <HeroSection />
      <div className="text-secondary container grid grid-cols-4 gap-4">
        <div className="border border-[#18243A] p-8">
          <h4 className="text-lg font-bold"> Telephone</h4>
          <p>+02 9718 0306</p>
        </div>
        <div className="border border-[#18243A] p-8">
          <h4 className="text-lg font-bold"> Telephone</h4>
          <p>+02 9718 0306</p>
        </div>
        <div className="border border-[#18243A] p-8">
          <h4 className="text-lg font-bold"> Telephone</h4>
          <p>+02 9718 0306</p>
        </div>
        <div className="border border-[#18243A] p-8">
          <h4 className="text-lg font-bold">Mail</h4>
          <p>temur@info.au.com</p>
        </div>
      </div>
      <GetInTouchSection />
    </div>
  );
}
