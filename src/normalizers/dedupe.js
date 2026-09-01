/**
 * Removes duplicate events. Two events are duplicates when they share the
 * same normalized status AND the same normalized timestamp — this runs
 * after per-provider normalization, so it works identically regardless of
 * which provider's raw format the events came from.
 *
 * Keeps the first occurrence of each duplicate and preserves relative order
 * (sorting happens separately, in sortEvents.js).
 */
export function dedupeEvents(events) {
  const seen = new Map();

  for (const event of events) {
    const key = `${event.status}|${event.timestamp.getTime()}`;
    if (!seen.has(key)) {
      seen.set(key, event);
    }
  }

  return Array.from(seen.values());
}