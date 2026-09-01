import { buildEvent } from "./buildEvent";

/**
 * NimbusPost shape:
 * { shipment_id, history: [{ event_status, event_time: 1721260800 }] }
 *
 * event_time is a Unix timestamp in *seconds*, so it needs multiplying by
 * 1000 before it's a valid JS Date. No description field here either —
 * same fallback path as Shiprocket.
 */
export function normalizeNimbuspost(order) {
  return order.history.map((e) =>
    buildEvent(e.event_status, new Date(e.event_time * 1000), null)
  );
}