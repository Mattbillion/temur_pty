import Image from "next/image";

export function OurVisions() {
  return (
    <div className="container">
      <div className="grid w-full grid-cols-2">
        <div className="flex h-[400px] w-full flex-col justify-center gap-4 bg-[url(/texture/quality-texture.png)] p-8 px-16 max-md:col-span-2 max-md:p-4">
          <h1 className="text-secondary text-2xl font-bold">Quality</h1>
          <p className="text-secondary">
            At Temur, quality is at the core of everything we do. We take pride
            in delivering exceptional workmanship, using the best materials and
            techniques to ensure durability and reliability. Every project, no
            matter the size, is executed with precision, care, and attention to
            detail, exceeding industry standards and client expectations.
          </p>
        </div>
        <div className="relative h-[400px] w-full max-md:col-span-1 max-md:hidden">
          <Image
            src="/images/bento/quality-image.png"
            alt="quality"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[400px] w-full max-md:col-span-1 max-md:hidden">
          <Image
            src="/images/bento/integrity.png"
            alt="quality"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex h-[400px] w-full flex-col justify-center gap-4 bg-[url(/texture/integrity-texture.png)] p-8 px-16 max-md:col-span-2 max-md:p-4">
          <h1 className="text-secondary text-2xl font-bold">Integrity</h1>
          <p className="text-secondary">
            Temur upholds unwavering integrity, following ethical work practices
            in all interactions with internal and external stakeholders.
          </p>
        </div>
        <div className="flex h-[400px] w-full flex-col justify-center gap-4 bg-[url(/texture/vision-texture.png)] p-8 px-16 max-md:col-span-2 max-md:p-4">
          <h1 className="text-secondary text-2xl font-bold">Our vision</h1>
          <p className="text-secondary">
            Temur upholds unwavering integrity, following ethical work practices
            in all interactions with internal and external stakeholders.
          </p>
        </div>
        <div className="relative h-[400px] w-full max-md:col-span-1 max-md:hidden">
          <Image
            src="/images/bento/vision.png"
            alt="quality"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
