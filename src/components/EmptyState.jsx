import { PackageSearch } from "lucide-react";

/**
 * Shown when the selected provider's normalized event list is empty.
 * Kept deliberately calm — an empty timeline isn't an error, just "nothing yet".
 */
export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-4">
        <PackageSearch className="w-5 h-5 text-stone-400" strokeWidth={1.75} />
      </div>
      <p className="text-sm font-medium text-stone-700">No tracking events yet</p>
      <p className="text-sm text-stone-400 mt-1 max-w-[26ch]">
        Once this shipment has activity, it'll show up here in order.
      </p>
    </div>
  );
}