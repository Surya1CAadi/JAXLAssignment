import EmptyState from "./EmptyState";
import TimelineEvent from "./TimelineEvent";

/**
 * The one component every provider's normalized events flow through.
 * It has no idea whether the events came from Shopify, Shiprocket, or
 * NimbusPost — it only ever sees the common NormalizedEvent[] shape.
 */
export default function Timeline({ events }) {
  if (events.length === 0) {
    return <EmptyState />;
  }

  return (
    <ol className="relative">
      {events.map((event, index) => (
        <TimelineEvent
          key={`${event.status}-${event.timestamp.getTime()}-${index}`}
          event={event}
          isLast={index === events.length - 1}
        />
      ))}
    </ol>
  );
}