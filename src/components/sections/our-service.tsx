"use client";
import Link from "next/link";
import { motion } from "framer-motion";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function OurServicesBento() {
  return (
    <div className="container w-full">
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((service, idx) => (
          <ServiceItem service={service} key={idx} />
        ))}
      </div>
    </div>
  );
}

function ServiceItem({ service }: ServiceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      }}
      viewport={{ amount: 0.2 }}
      className={cn(
        service.customClasses,
        "relative h-[278px] w-full overflow-hidden select-none sm:h-[344px] md:h-[352px] lg:h-[388px]",
      )}
    >
      <Link href="/">
        <div className="text-secondary group/item absolute inset-0 z-20 flex h-full flex-col gap-3 p-4 md:gap-4 md:p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold max-md:text-lg">
              {service.title}
            </h1>
            <div className="rounded-lg border p-1.5 transition duration-200 group-hover/item:opacity-80">
              <ArrowRight size={20} className="text-secondary" />
            </div>
          </div>
          <p className="font-medium max-md:text-sm">{service.description}</p>
        </div>
        <div
          className={cn(
            "absolute inset-0 z-10 bg-[url(/texture/body-pattern.png)] opacity-90 bg-blend-multiply",
          )}
          style={{
            backgroundColor: service.bgColor || "#F63426",
          }}
        />
        {service.bgImage && (
          <Image src={service.bgImage} alt="dada" fill objectFit="cover" />
        )}
      </Link>
    </motion.div>
  );
}

const services: ServiceType[] = [
  {
    title: "Temur Ramp Installation",
    description:
      "We deliver and install any type of ramp whether curved or straight, with beams or any other design. With extensive experience, we ensure that every ramp is finished to the highest standard.",
    customClasses:
      "col-span-1 md:col-span-2 lg:col-span-1 md:aspect-[16/8] lg:aspect-[1/1] ",
    bgColor: "#F63426",
    bgImage: "/images/services/ramp.png",
  },
  {
    title: "Walls & Columns",
    description:
      "We specialize in delivering precise, efficient, and high-quality solutions for core walls, lift shafts, stairwells, and retaining walls. With extensive experience and meticulous attention to detail, we ensure every project meets the highest standards of performance and durability.",
    customClasses:
      "col-span-1 md:col-span-1 lg:col-span-1 md:aspect-[1/1] lg:aspect-[1/1]",
    bgColor: "#052D5D",
    bgImage: "/images/services/wall-and-columns.png",
  },

  {
    title: "Post-tension slab",
    description:
      "Post-tensioned slabs require highly skilled and experienced steel fixers due to their complex detailing, including various sections, beams, trimmers, and shear ties. Precision and efficiency are crucial, as every component must be installed seamlessly. With our extensive experience, we ensure a clean, fast, and high-quality execution.",
    customClasses: "col-span-1 md:col-span-1 lg:col-span-2 lg:aspect-[1/1]",
    bgColor: "#052D5D",
    bgImage: "/images/services/pt-slab.png",
  },
  {
    title: "Conventional slab",
    description:
      "Our expertise in conventional slabs allows us to complete projects efficiently and within a short timeframe. With a well-coordinated team and seamless collaboration with crane crews, we ensure a highly organized workflow. This enables us to deliver faster and more efficiently than other methods.",
    customClasses: "col-span-1 md:col-span-2 lg:col-span-1 md:aspect-[16/8]",
    bgColor: "#052D5D",
    bgImage: "/images/services/conventional-slab.png",
  },
  {
    title: "Beam works",
    customClasses: "col-span-1 md:col-span-2 lg:col-span-2 md:aspect-[16/8]",
    description:
      "Beam works are a critical component of every project, involving detailed elements such as close-tie stirrups and leg ties. Typically, beams are designed for thicker slab sections, which demand significant time and manpower. Every detail requires meticulous attention, and our experienced steel fixers possess the expertise to manage the entire process with precision from start to finish. As a result, we can deliver it fast and easily.",
    bgImage: "/images/services/beam-work.png",
  },
  {
    title: "See all services",
    description:
      "Explore our full range of reinforcement solutions, including rebar installation, steel fixing, concrete reinforcement, and structural strengthening. Whether it's residential, commercial, or industrial projects, we ensure precision, durability, and compliance with industry standards. Click below to view all our services.",
    bgColor: "#052D5D",
    customClasses: "col-span-1 md:col-span-1 lg:col-span-1",
  },
];

type ServiceItemProps = {
  service: ServiceType;
};

type ServiceType = {
  title: string;
  description: string;
  customClasses?: string;
  bgColor?: string;
  bgImage?: string;
};
