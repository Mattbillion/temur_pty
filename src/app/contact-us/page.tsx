import { HeroSection } from "@/app/contact-us/_sections/hero-section";
import GetInTouchSection from "@/components/sections/get-in-touch";
import * as motion from "motion/react-client";

export default function Page() {
  return (
    <div className="w-full">
      <HeroSection />
      <motion.div
        className="text-secondary container grid grid-cols-4 gap-4"
        initial={{
          opacity: 0,
          y: -32,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, type: "linear" },
        }}
      >
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
      </motion.div>
      <GetInTouchSection />
    </div>
  );
}
