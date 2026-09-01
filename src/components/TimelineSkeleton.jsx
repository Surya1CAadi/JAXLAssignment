/**
 * Placeholder rows shown while a timeline is "loading" (simulated here,
 * since there's no real backend — but the shape matches actual
 * TimelineEvent rows so the layout doesn't jump once real data lands).
 */
export default function TimelineSkeleton() {
  return (
    <div className="animate-pulse divide-y divide-stone-100" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-start gap-3 py-4">
          <div className="w-6 h-6 rounded-full bg-stone-200 shrink-0 mt-0.5" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-28 bg-stone-200 rounded" />
            <div className="h-3 w-48 bg-stone-100 rounded" />
          </div>
          <div className="h-3 w-24 bg-stone-100 rounded hidden sm:block" />
        </div>
      ))}
    </div>
  );
}