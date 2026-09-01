import { normalizeStatus, getStatusLabel } from "./statusMap";

/**
 * Every provider's raw event, however it's shaped, ends up going through
 * this one function — it's what guarantees the final NormalizedEvent shape
 * is identical no matter which provider it came from.
 *
 * Missing/empty descriptions never reach the UI as "undefined" or blank —
 * they fall back to a plain sentence built from the status label.
 */
export function buildEvent(rawStatus, timestamp, rawMessage) {
  const status = normalizeStatus(rawStatus);
  const label = getStatusLabel(status, rawStatus);

  const description =
    typeof rawMessage === "string" && rawMessage.trim().length > 0
      ? rawMessage.trim()
      : `Shipment ${label.toLowerCase()}`;

  return { status, rawStatus, timestamp, description };
}