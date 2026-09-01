import { Package } from "lucide-react";

/**
 * Page-level identity — separate from the card's own "Shipment Tracking
 * Timeline" heading, which is the functional title of the tool itself.
 * This is the brand lockup: JAXL (the company from the brief) + a short
 * descriptor, in the pattern real product headers use (mark + name + tagline).
 */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 bg-[#FAFAF7]/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#C1501F] flex items-center justify-center shrink-0">
          <Package className="w-4 h-4 text-white" strokeWidth={2.25} />
        </div>
        <div className="flex items-baseline gap-2 min-w-0">
          <span className="text-[15px] font-semibold text-stone-900 tracking-tight">
            JAXL
          </span>
          <span className="text-stone-300">/</span>
          <span className="text-sm text-stone-500 truncate">Shipment Tracking</span>
        </div>
      </div>
    </header>
  );
}