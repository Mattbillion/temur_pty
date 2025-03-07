import { ContactForm } from "./contact-form";

export default function GetInTouchSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="relative hidden overflow-hidden rounded-[52px] md:block md:w-[41%]">
            <div className="absolute inset-0 z-10 flex flex-col justify-end bg-black/50 p-8">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Get in touch
              </h2>
              <p className="text-white/90">
                Feel free to reach out to us for any inquiries or project
                discussions. Our team is ready to assist you with expert
                guidance and tailored solutions. Let's build something great
                together!
              </p>
            </div>
            <img
              src="/images/get-in-touch-bg.webp"
              alt="Get in touch background"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right side - Form */}
          <div className="flex-1 md:w-[59%]">
            <div className="text-secondary mb-8 md:hidden">
              <h2 className="mb-4 text-3xl font-bold">Get in touch</h2>
              <p className="text-muted-foreground">
                Feel free to reach out to us for any inquiries or project
                discussions. Our team is ready to assist you with expert
                guidance and tailored solutions. Let's build something great
                together!
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
