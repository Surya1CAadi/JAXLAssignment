import { ChevronDown } from "lucide-react";
import StatusBadge from "./StatusBadge";
import Timeline from "./Timeline";
import { formatDateTime } from "../utils/formatDateTime";

/**
 * One row in the order list. Always shows its summary (current status +
 * order ref + last-update time). "View details" expands the same row to
 * reveal that order's full Timeline inline — the list itself never
 * disappears, so every other order stays visible and scannable.
 */
export default function OrderListItem({ orderRef, events, latestEvent, isExpanded, onToggle }) {
  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        className="w-full flex items-center justify-between gap-3 px-1 py-3 text-left rounded-lg hover:bg-stone-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
      >
        <div className="flex items-center gap-3 min-w-0">
          <StatusBadge status={latestEvent.status} rawStatus={latestEvent.rawStatus} />
          <div className="min-w-0">
            <p className="text-sm font-medium text-stone-800 truncate font-mono">{orderRef}</p>
            <p className="text-xs text-stone-400 mt-0.5">
              Updated {formatDateTime(latestEvent.timestamp)}
            </p>
          </div>
        </div>

        <span className="flex items-center gap-1 text-xs font-medium text-stone-400 shrink-0">
          {isExpanded ? "Hide details" : "View details"}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
            strokeWidth={2}
          />
        </span>
      </button>

      {isExpanded && (
        <div className="pl-1 pr-1 pb-4 pt-1">
          <div className="rounded-lg bg-stone-50 border border-stone-100 px-4 py-4">
            <Timeline events={events} />
          </div>
        </div>
      )}
    </div>
  );
}