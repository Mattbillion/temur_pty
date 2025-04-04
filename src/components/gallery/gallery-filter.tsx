"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function GalleryFilter({
  handleFilterChange,
  initialValue = "",
  forceScroll = true,
}: {
  handleFilterChange: (value: string) => void;
  initialValue?: string;
  forceScroll?: boolean;
}) {
  const [filterValue, setFilterValue] = useState(initialValue);

  useEffect(() => {
    const element = document.querySelector(`#tag-${initialValue}`);
    if (element && forceScroll) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, []);

  const handleFilter = (value: string) => {
    setFilterValue(value);
    handleFilterChange(value);
  };

  return (
    <div className="scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 mb-3 flex w-full snap-x snap-mandatory items-center gap-1.5 overflow-x-auto pb-3">
      {filterTags.map((tag, idx) => (
        <Button
          key={idx}
          className={cn(
            filterValue === tag.value
              ? "bg-primary border-transparent"
              : "bg-background",
            "snap-start rounded-full border border-slate-700 px-4 py-2",
          )}
          id={`tag-${tag.value}`}
          onClick={() => handleFilter(tag.value)}
        >
          {tag.label}
        </Button>
      ))}
    </div>
  );
}
export function GalleryFilterSkeleton() {
  return (
    <div className="mb-6 flex w-full snap-x snap-mandatory items-center gap-1.5 overflow-x-scroll">
      {filterTags.map((tag, idx) => (
        <Button
          key={idx}
          className="bg-background snap-start rounded-full border border-slate-700 px-4 py-2"
          disabled
        >
          {tag.label}
        </Button>
      ))}
    </div>
  );
}

export enum TagEnum {
  ALL = "",
  WALLS_COLUMNS = "wall-n-columns",
  SHEAR_TIES = "shear-ties",
  RAMP_INSTALLATION = "ramp-installation",
  POST_TENSION_SLABS = "post-tension-slabs",
  GROUND_WORK = "ground-work",
  DRILL_EPOXY = "drill-n-epoxy",
  CONVENTIONAL_SLAB = "conventional-slab",
  CAPPING_BEAM = "Capping-beam",
}

export const filterTags = [
  { value: TagEnum.ALL, label: "All" },
  { value: TagEnum.WALLS_COLUMNS, label: "Walls & Columns" },
  { value: TagEnum.SHEAR_TIES, label: "Shear ties" },
  { value: TagEnum.RAMP_INSTALLATION, label: "Ramp Installation" },
  { value: TagEnum.POST_TENSION_SLABS, label: "Post-tensions slab" },
  { value: TagEnum.GROUND_WORK, label: "Ground work and mesh" },
  { value: TagEnum.DRILL_EPOXY, label: "Drill and epoxy" },
  { value: TagEnum.CONVENTIONAL_SLAB, label: "Conventional Slab" },
  { value: TagEnum.CAPPING_BEAM, label: "Capping Beam" },
];
