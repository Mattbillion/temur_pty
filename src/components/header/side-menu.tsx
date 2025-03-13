import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "@/components/header/contants";
import Link from "next/link";

export function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex shrink-0 md:hidden">
        <MenuIcon className="text-secondary max-md:size-8" />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="bg-background h-full w-full max-w-[360px] border-none"
      >
        <SheetTitle />
        <div className="flex w-full flex-col">
          {links.map((link, idx) => (
            <SheetClose asChild key={idx}>
              <Link
                href={link.href}
                className="text-secondary px-6 py-2 text-2xl font-medium transition-all duration-200 hover:text-3xl hover:text-[#FFB63F]"
                type="submit"
              >
                {link.title}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
