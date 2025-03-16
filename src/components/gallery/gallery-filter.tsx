import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function GalleryFilter({
  handleFilterChange,
}: {
  handleFilterChange: (value: string) => void;
}) {
  const [filterValue, setFilterValue] = React.useState("");

  const handleFilter = (value: string) => {
    setFilterValue(value);
    handleFilterChange(value);
  };
  return (
    <div className="mb-6 flex w-full snap-x snap-mandatory items-center gap-1.5 overflow-x-scroll">
      {filterTags.map((tag, idx) => (
        <Button
          key={idx}
          className={cn(
            filterValue === tag.value
              ? "bg-primary border-transparent"
              : "bg-background",
            "snap-start rounded-full border border-slate-700 px-4 py-2",
          )}
          onClick={() => handleFilter(tag.value)}
        >
          {tag.label}
        </Button>
      ))}
    </div>
  );
}

export const filterTags = [
  { value: "", label: "All" },
  { value: "wall&columns", label: "Walls & Columns" },
  { value: "shear-ties", label: "Shear ties" },
  { value: "ramp-installation", label: "Ramp Installation" },
  { value: "post-tension-slabs", label: "Post-tensions slab" },
  { value: "ground-work", label: "Ground work and mesh" },
  { value: "drill&epoxy", label: "Drill and epoxy" },
  { value: "conventional-slab", label: "Conventional Slab" },
  { value: "Capping-beam", label: "Capping Beam" },
];
