import { useState, useMemo } from "react";
import OrderListItem from "./OrderListItem";
import EmptyState from "./EmptyState";
import { getNormalizedEvents } from "../normalizers";
import { getOrderRef } from "../utils/orderRef";

/**
 * Shows every order belonging to the currently selected provider, sorted by
 * most recently updated first. The list never collapses down to a single
 * order — instead, each row can independently expand in place to reveal its
 * full timeline via OrderListItem.
 */
export default function OrderList({ providerKey, orders }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const rows = useMemo(() => {
    return orders
      .map((order, index) => {
        const events = getNormalizedEvents(providerKey, order);
        const latestEvent = events[events.length - 1]; // events are sorted oldest -> newest
        return { index, order, events, latestEvent };
      })
      .filter((row) => row.latestEvent) // guards against an order with zero events
      .sort((a, b) => b.latestEvent.timestamp - a.latestEvent.timestamp);
  }, [providerKey, orders]);

  if (rows.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="divide-y divide-stone-100">
      {rows.map(({ index, order, events, latestEvent }) => (
        <OrderListItem
          key={index}
          orderRef={getOrderRef(providerKey, order)}
          events={events}
          latestEvent={latestEvent}
          isExpanded={expandedIndex === index}
          onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}