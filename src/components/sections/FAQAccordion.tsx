"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/types";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("All");
  const categories = ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  const filtered = items.filter((item) => {
    const matchTab = tab === "All" || item.category === tab;
    const matchQuery = item.question.toLowerCase().includes(query.toLowerCase()) || item.answer.toLowerCase().includes(query.toLowerCase());
    return matchTab && matchQuery;
  });

  return (
    <div>
      <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search FAQs..." className="mb-4 w-full rounded-xl border border-brand/15 px-4 py-3 text-sm outline-none focus:border-brand/40" />
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button key={cat} type="button" onClick={() => setTab(cat)} className={cn("rounded-full px-3 py-1.5 text-xs font-semibold", tab === cat ? "bg-brand text-white" : "bg-grey text-slate")}>{cat}</button>
        ))}
      </div>
      <div className="space-y-3">
        {filtered.map((item) => {
          const open = openId === item.id;
          return (
            <div key={item.id} className="rounded-xl border border-brand/10 bg-white">
              <button type="button" className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left" aria-expanded={open} onClick={() => setOpenId(open ? null : item.id)}>
                <span className="min-w-0 break-words font-medium text-navy">{item.question}</span>
                <ChevronDown className={cn("shrink-0 transition", open && "rotate-180")} size={18} />
              </button>
              {open && <div className="border-t border-brand/10 px-5 py-4 text-sm text-slate">{item.answer}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
