import { normalizeShopify } from "./shopify";
import { normalizeShiprocket } from "./shiprocket";
import { normalizeNimbuspost } from "./nimbuspost";
import { dedupeEvents } from "./dedupe";
import { sortEventsChronologically } from "./sortEvents";

const NORMALIZERS = {
  shopify: normalizeShopify,
  shiprocket: normalizeShiprocket,
  nimbuspost: normalizeNimbuspost,
};

/**
 * Public pipeline: raw order (in whatever shape that provider uses) ->
 * normalize -> dedupe -> sort -> a plain NormalizedEvent[] the UI can render
 * without knowing which provider it came from.
 */
export function getNormalizedEvents(providerKey, order) {
  const normalize = NORMALIZERS[providerKey];
  if (!normalize) {
    throw new Error(`No normalizer registered for provider "${providerKey}"`);
  }

  const normalized = normalize(order);
  const deduped = dedupeEvents(normalized);
  return sortEventsChronologically(deduped);
}