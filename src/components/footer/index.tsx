import { footer_links } from "./constants";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const quickLinks = footer_links.quickLinks;
  const services = footer_links.services;
  const about_company = footer_links.about_us;
  const contact = footer_links.contact;
  const socials = footer_links.socials;
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute right-0 my-auto">
        <div className="relative h-[352px] w-[352px]">
          <Image
            src="/texture/texture.png"
            alt="texture"
            className="object-contain"
            fill
          />
        </div>
      </div>

      <div className="border-t border-slate-800 bg-[#0C121D] py-10">
        <div className="container grid w-full grid-cols-4 gap-6">
          <div className="flex w-full flex-col gap-2 px-4 py-5">
            <h3 className="text-xl font-bold text-[#FFB63F]">
              {quickLinks.title}
            </h3>
            <div className="text-secondary flex flex-col gap-1">
              {quickLinks.links.map((qlink, idx) => (
                <Link
                  href={qlink.link}
                  key={idx}
                  className="cursor-pointer transition-colors duration-200 hover:text-[#FFB63F] hover:underline"
                >
                  {qlink.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 px-4 py-5">
            <h3 className="text-xl font-bold text-[#FFB63F]">
              {services.title}
            </h3>
            <div className="text-secondary flex flex-col gap-1">
              {services.links.map((qlink, idx1) => (
                <Link
                  href={qlink.link}
                  key={idx1}
                  className="cursor-pointer transition-colors duration-200 hover:text-[#FFB63F] hover:underline"
                >
                  {qlink.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 px-4 py-5">
            <h3 className="text-xl font-bold text-[#FFB63F]">
              {about_company.title}
            </h3>
            <p className="text-secondary text-sm">{about_company.text}</p>
          </div>
          <div className="flex flex-col gap-2 px-4 py-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-[#FFB63F]">
                {contact.title}
              </h3>
              <div className="flex flex-col gap-2">
                {contact.links.map((c, idx3) => {
                  if (c.type === "phone") {
                    return (
                      <Link
                        href={c.link}
                        className="text-secondary flex items-center gap-1"
                        key={idx3}
                      >
                        <Image
                          src="/icons/phone.svg"
                          alt="phone"
                          height={20}
                          width={20}
                        />
                        <p className="text-secondary text-base">{c.link}</p>
                      </Link>
                    );
                  }
                  if (c.type === "email") {
                    return (
                      <Link
                        href={c.link}
                        className="text-secondary flex items-center gap-1"
                      >
                        <Image
                          src="/icons/email.svg"
                          alt="phone"
                          height={20}
                          width={20}
                        />
                        <p className="text-secondary text-base">{c.link}</p>
                      </Link>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-[#FFB63F]">
                {socials.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="border-t border-slate-800 bg-[#090D16]">
      <div className="container flex w-full items-center justify-between py-4">
        <p className="text-secondary text-sm">
          © 2025 Temur pty, all right reserved.
        </p>
        <div className="flex items-center gap-2">
          <span className="text-secondary text-sm">Serviced by</span>
          <div className="relative aspect-auto h-[32px] w-[132px]">
            <Image
              src="interpriz-logo.svg"
              alt="interpriz-logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
