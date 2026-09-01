/**
 * Placeholder rows shown while a provider's shipment list is "loading" —
 * matches OrderListItem's shape so nothing shifts once real rows render.
 */
export default function OrderListSkeleton() {
  return (
    <div className="animate-pulse divide-y divide-stone-100" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-3 py-3">
          <div className="h-6 w-24 bg-stone-200 rounded-full shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-3.5 w-32 bg-stone-200 rounded" />
            <div className="h-3 w-40 bg-stone-100 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}