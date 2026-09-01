import { buildEvent } from "./buildEvent";

/**
 * Shiprocket shape:
 * { awb_number, tracking_data: [{ current_status, status_date: "19-07-2026 11:30:00" }] }
 *
 * Timestamps are "DD-MM-YYYY HH:mm:ss" — not directly parseable by
 * `new Date(...)`, so this provider needs its own date parser. There's also
 * no message/description field at all, so every event falls back to the
 * generated description in buildEvent.
 */
function parseShiprocketDate(dateStr) {
  const [datePart, timePart] = dateStr.split(" ");
  const [day, month, year] = datePart.split("-").map(Number);
  const [hours, minutes, seconds] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hours, minutes, seconds);
}

export function normalizeShiprocket(order) {
  return order.tracking_data.map((e) =>
    buildEvent(e.current_status, parseShiprocketDate(e.status_date), null)
  );
}