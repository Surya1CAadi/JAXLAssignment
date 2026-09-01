// Each provider names its order identifier differently — this is the one
// place that knows the mapping, so nothing else has to.
export function getOrderRef(providerKey, order) {
  if (providerKey === "shopify") return order.order_id;
  if (providerKey === "shiprocket") return order.awb_number;
  if (providerKey === "nimbuspost") return order.shipment_id;
  return "—";
}