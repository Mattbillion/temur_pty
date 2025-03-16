"use client";

import React, { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

export function LoadMore({
  loadMore,
  hasMore,
  loader = <Loader2 className="h-6 w-6 animate-spin" />,
}: {
  loadMore: () => Promise<void>;
  hasMore: boolean;
  loader?: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setLoading(true);
          await loadMore();
          setLoading(false);
        }
      },
      { threshold: 1.0 },
    );

    if (observerTarget.current) observer.observe(observerTarget.current);

    return () => observer.disconnect();
  }, [hasMore, loadMore, loading]);

  if (!hasMore) return null;
  return (
    <>
      {hasMore && loading ? loader : null}
      <div
        ref={observerTarget}
        className="h-[400px] w-full animate-pulse bg-slate-900"
      />
    </>
  );
}
