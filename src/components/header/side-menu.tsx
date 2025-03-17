"use client";

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
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function SideMenu() {
  const pathname = usePathname();

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
                className={cn(
                  "text-secondary px-6 py-2 text-2xl font-medium transition-all duration-200 hover:text-3xl hover:text-[#FFB63F]",
                  {
                    "text-[#FFB63F]":
                      pathname !== "/" && pathname === link.href,
                  },
                )}
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
