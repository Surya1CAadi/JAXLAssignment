import StatusBadge from "./StatusBadge";
import { getStatusConfig } from "../normalizers/statusMap";
import { formatDateTime } from "../utils/formatDateTime";

/**
 * One row in the timeline. Owns its own dot + connector line so Timeline.jsx
 * only has to map over events without knowing about first/last styling logic
 * beyond telling this component whether it's the last row.
 */
export default function TimelineEvent({ event, isLast }) {
  const config = getStatusConfig(event.status);

  return (
    <li className="relative pl-9">
      {/* connector line down to the next event */}
      {!isLast && (
        <span
          className="absolute left-[7px] top-4 bottom-0 w-px bg-stone-200"
          aria-hidden="true"
        />
      )}

      {/* status dot */}
      <span
        className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full ring-4 ring-white ${config.dot}`}
        aria-hidden="true"
      />

      <div className={isLast ? "pb-0" : "pb-6"}>
        {/* primary info: status */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <StatusBadge status={event.status} rawStatus={event.rawStatus} />
          <time
            dateTime={event.timestamp.toISOString()}
            className="text-xs font-mono tracking-tight text-stone-400"
          >
            {formatDateTime(event.timestamp)}
          </time>
        </div>

        {/* secondary info: description */}
        <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
          {event.description}
        </p>
      </div>
    </li>
  );
}