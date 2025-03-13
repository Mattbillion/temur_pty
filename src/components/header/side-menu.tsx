import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon size={48} className="text-secondary" />
      </SheetTrigger>
      <SheetContent side="left">
        <div></div>
      </SheetContent>
    </Sheet>
  );
}
