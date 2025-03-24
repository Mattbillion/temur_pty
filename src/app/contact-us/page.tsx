import { HeroSection } from "@/app/contact-us/_sections/hero-section";
import GetInTouchSection from "@/components/sections/get-in-touch";
import * as motion from "motion/react-client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full">
      <HeroSection />
      <motion.div
        className="text-secondary container grid gap-4 md:grid-cols-2"
        initial={{
          opacity: 0,
          y: -32,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1.2, type: "spring", delay: 0.2 },
        }}
      >
        <div className="cursor-pointer border border-[#18243A] p-8">
          <h4 className="text-lg font-bold"> Telephone</h4>
          <p>+61 0410581900</p>
        </div>
        <div className="cursor-pointer border border-[#18243A] p-8">
          <h4 className="text-lg font-bold"> Telephone</h4>
          <p>+61 0499205975</p>
        </div>
        <div className="cursor-pointer border border-[#18243A] p-8">
          <h4 className="text-lg font-bold">Company mail</h4>
          <Link href="mailto://info@temursteelfixing.com.au">
            info@temursteelfixing.com.au
          </Link>
        </div>
        <div className="cursor-pointer border border-[#18243A] p-8">
          <h4 className="text-lg font-bold">Gmail</h4>
          <Link href="mailto://temursteelfixing@gmail.com">
            temursteelfixing@gmail.com
          </Link>
        </div>
      </motion.div>
      <GetInTouchSection />
    </div>
  );
}
