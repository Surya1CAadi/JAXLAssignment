import { buildEvent } from "./buildEvent";

/**
 * Shopify shape:
 * { order_id, events: [{ status, timestamp: "2026-07-22T14:32:00Z", message }] }
 *
 * Timestamps are already ISO 8601, so no custom parsing is needed —
 * `new Date(...)` handles it directly.
 */
export function normalizeShopify(order) {
  return order.events.map((e) =>
    buildEvent(e.status, new Date(e.timestamp), e.message)
  );
}