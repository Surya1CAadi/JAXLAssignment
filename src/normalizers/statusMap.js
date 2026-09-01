import {
  Package,
  PackageCheck,
  Truck,
  MapPinned,
  CheckCircle2,
  RotateCcw,
  HelpCircle,
} from "lucide-react";

/**
 * Every raw status string any provider sends funnels through STATUS_ALIASES
 * down to one of the keys in STATUS_CONFIG. Anything that doesn't match
 * falls through to "unknown" — this one lookup is what keeps an unexpected
 * status from crashing the UI or rendering a blank row.
 */
export const STATUS_ALIASES = {
  label_purchased: "booked",
  booked: "booked",
  picked_up: "picked_up",
  in_transit: "in_transit",
  out_for_delivery: "out_for_delivery",
  delivered: "delivered",
  rto_initiated: "rto_initiated",
};

export const STATUS_CONFIG = {
  booked: {
    label: "Booked",
    icon: Package,
    dot: "bg-slate-400",
    badge: "bg-slate-50 text-slate-600 border-slate-200",
  },
  picked_up: {
    label: "Picked Up",
    icon: PackageCheck,
    dot: "bg-sky-500",
    badge: "bg-sky-50 text-sky-700 border-sky-200",
  },
  in_transit: {
    label: "In Transit",
    icon: Truck,
    dot: "bg-blue-500",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
  },
  out_for_delivery: {
    label: "Out for Delivery",
    icon: MapPinned,
    dot: "bg-amber-500",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
  },
  delivered: {
    label: "Delivered",
    icon: CheckCircle2,
    dot: "bg-green-500",
    badge: "bg-green-50 text-green-700 border-green-200",
  },
  rto_initiated: {
    label: "Return Initiated",
    icon: RotateCcw,
    dot: "bg-red-500",
    badge: "bg-red-50 text-red-700 border-red-200",
  },
  unknown: {
    label: "Status Unavailable",
    icon: HelpCircle,
    dot: "bg-stone-300",
    badge: "bg-stone-50 text-stone-500 border-stone-200 border-dashed",
  },
};

// "RTO_INITIATED" -> "RTO Initiated", "returned_to_sender" -> "Returned To Sender"
export function humanizeStatus(rawStatus) {
  if (!rawStatus) return "Unknown";
  return rawStatus
    .toLowerCase()
    .split(/[_\s]+/)
    .map((word) => (word === "rto" ? "RTO" : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(" ");
}

// Raw provider string -> normalized status key (always a valid STATUS_CONFIG key).
export function normalizeStatus(rawStatus) {
  if (!rawStatus || typeof rawStatus !== "string") return "unknown";
  return STATUS_ALIASES[rawStatus.toLowerCase()] || "unknown";
}

// Normalized status key -> display label, accounting for the "unknown" case
// where we show the humanized raw string instead of a generic placeholder.
export function getStatusLabel(status, rawStatus) {
  if (status === "unknown") return humanizeStatus(rawStatus);
  return STATUS_CONFIG[status]?.label ?? humanizeStatus(rawStatus);
}

// Normalized status key -> visual config, always returns a valid entry.
export function getStatusConfig(status) {
  return STATUS_CONFIG[status] ?? STATUS_CONFIG.unknown;
}