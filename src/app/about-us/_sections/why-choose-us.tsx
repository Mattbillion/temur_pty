import { HardHat } from "lucide-react";
import { CircleCheckIcon } from "lucide-react";
import { UserCheck } from "lucide-react";
import { BadgeCheck } from "lucide-react";

export const WhyChooseUsSection = () => {
  return (
    <div className="container grid gap-4 md:grid-cols-2">
      {items.map((item, idx) => (
        <div
          className="text-secondary bg-background border border-[#18243A] p-8 transition-colors duration-300 hover:border-[#FFB63F] hover:text-[#FFB63F]"
          key={idx}
        >
          <div className="flex items-center gap-2">
            <div className="size-[32px]">{item.icon}</div>
            <h4 className="text-2xl">{item.title}</h4>
          </div>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

const items = [
  {
    title: "+9 Years of Experience",
    description:
      "With decades of experience in structural reinforcement, we deliver proven solutions with precision and reliability.",
    icon: <HardHat />,
  },
  {
    title: "Versatile Solutions",
    description:
      "Whether it's Residential, Commercial, or Recreational projects, we tailor our services to fit your unique needs, no matter the scale.",
    icon: <CircleCheckIcon />,
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Your satisfaction is our priority. We work closely with our Partners and Clients, providing personalized service and expert guidance.",
    icon: <UserCheck />,
  },
  {
    title: "Commitment to Quality",
    description:
      "We take pride in our craftsmanship, ensuring every project meets the highest standards of durability and excellence.",
    icon: <BadgeCheck />,
  },
];
