/**
 * Segmented tab control for switching between providers.
 * Purely presentational — holds no data logic, just emits the selection up.
 */
export default function ProviderSwitcher({ providers, selected, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Shipping provider"
      className="inline-flex items-center gap-1 p-1 rounded-lg bg-stone-100 border border-stone-200 w-full sm:w-auto"
    >
      {providers.map((provider) => {
        const isActive = provider.key === selected;
        return (
          <button
            key={provider.key}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(provider.key)}
            className={`
              flex-1 sm:flex-none px-3.5 py-1.5 rounded-md text-sm font-medium
              transition-colors duration-150
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-1
              ${
                isActive
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-500 hover:text-stone-700"
              }
            `}
          >
            {provider.label}
          </button>
        );
      })}
    </div>
  );
}