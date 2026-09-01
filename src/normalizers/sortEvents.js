/**
 * Sorts normalized events oldest -> newest, regardless of the order they
 * appeared in the source data. Every provider's events pass through this
 * same function once they've been normalized to a common shape with a
 * real Date object on `timestamp`.
 */
export function sortEventsChronologically(events) {
  return [...events].sort((a, b) => a.timestamp - b.timestamp);
}