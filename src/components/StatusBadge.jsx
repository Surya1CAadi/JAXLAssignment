import { getStatusConfig, getStatusLabel } from "../normalizers/statusMap";

/**
 * Renders one status as a colored pill with an icon + label.
 * Always resolves to a valid visual (via getStatusConfig's "unknown"
 * fallback) — there's no status value this can crash on.
 */
export default function StatusBadge({ status, rawStatus }) {
  const config = getStatusConfig(status);
  const label = getStatusLabel(status, rawStatus);
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold ${config.badge}`}
    >
      <Icon className="w-3.5 h-3.5" strokeWidth={2} />
      {label}
    </span>
  );
}