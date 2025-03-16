import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";

export function Services() {
  return (
    <motion.div
      className="container mb-[144px] flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-12"
      viewport={{ amount: 0.5 }}
    >
      <h1 className="text-secondary hidden text-start text-2xl font-bold max-md:block">
        Our services
      </h1>
      {services.map((service, idx) => (
        <motion.div
          key={idx}
          className="flex w-full flex-col gap-4 md:gap-4"
          initial="offscreen"
          whileInView="onscreen"
          variants={cardVariant}
          viewport={{ once: true }}
        >
          <div className="relative aspect-[8/4] md:aspect-square">
            <Image
              src={service.src}
              alt={service.title}
              loading="lazy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60 mix-blend-multiply" />
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <h4 className="text-secondary text-lg font-bold uppercase md:text-xl">
              {service.title}
            </h4>
            <p className="text-secondary">{service.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

const cardVariant = {
  offscreen: {
    y: 72,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};
const services = [
  {
    title: "Groundworks",
    description:
      "Includes the setup of crane foundations, lift footings, column footings, raft slabs, and ground slab mesh installations.",
    src: "/images/services/ground-work.png",
  },
  {
    title: "POST-TENSION SLAB",
    description:
      "Post-tensioned slabs require highly skilled and experienced steel fixers due to their complex detailing, including various sections, beams, trimmers, and shear ties. Precision and efficiency are crucial, as every component must be installed seamlessly. With our extensive experience, we ensure a clean, fast, and high-quality execution.",
    src: "/images/services/pt-slab.png",
  },
  {
    title: "CONVENTIONAL SLAB",
    description:
      "Our expertise in conventional slabs allows us to complete projects efficiently and within a short timeframe. With a well-coordinated team and seamless collaboration with crane crews, we ensure a highly organized workflow. This enables us to deliver faster and more efficiently than other methods.",
    src: "/images/services/conventional-slab.png",
  },
  {
    title: "DRILL & EPOXY",
    description:
      "The Temur team offers comprehensive supply and installation services for all your Drill and Epoxy requirements.",
    src: "/images/services/drill-epoxy.png",
  },
  {
    title: "TEMUR Ramp Installation",
    description:
      "We deliver and install any type of ramp—whether curved or straight, with beams or any other design. With extensive experience, we ensure that every ramp is finished to the highest standard.",
    src: "/images/services/ramp.png",
  },
  {
    title: "CAPPING BEAM",
    description:
      "The Temur reinforcement install boasts a large team of skilled internal form workers, concreters, and steel fixers, all with extensive experience in the installation of various types of capping beams.",
    src: "/images/services/capping-beam.png",
  },
  {
    title: "WALLS AND COLUMNS",
    description:
      "We specialize in delivering precise, efficient, and high-quality solutions for core walls, lift shafts, stairwells, and retaining walls. With extensive experience and meticulous attention to detail, we ensure every project meets the highest standards of performance and durability.",
    src: "/images/services/wall-and-columns.png",
  },
  {
    title: "BEAM WORK",
    description:
      "Beam works are a critical component of every project, involving detailed elements such as close-tie strirrups and leg ties. Typically, beams are designed for thicker slab sections, which demand significant time and manpower. Every detail requires meticulous attention, and our experienced steel fixers possess the expertise to manage the entire process with precision from start to finish. As a result, we can deliver it fast and easily.",
    src: "/images/services/beam-work.png",
  },
];
