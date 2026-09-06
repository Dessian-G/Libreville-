"use client";

import { useMemo, useState } from "react";

export const ALL_FILTER = "Tous";

export function useActiveFilter<T extends { category: string }>(items: T[]) {
  const [activeFilter, setActiveFilter] = useState<string>(ALL_FILTER);

  const filtered = useMemo(
    () => (activeFilter === ALL_FILTER ? items : items.filter((item) => item.category === activeFilter)),
    [items, activeFilter]
  );

  return { activeFilter, setActiveFilter, filtered };
}
