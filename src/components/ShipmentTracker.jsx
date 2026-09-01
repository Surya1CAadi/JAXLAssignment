import { useState, useEffect } from "react";

import ProviderSwitcher from "./ProviderSwitcher";
import OrderList from "./OrderList";
import OrderListSkeleton from "./OrderListSkeleton";

import shopifyRaw from "../data/sample-shopify.json";
import shiprocketRaw from "../data/sample-shiprocket.json";
import nimbuspostRaw from "../data/sample-nimbuspost.json";

const PROVIDERS = [
  { key: "shopify", label: "Shopify" },
  { key: "shiprocket", label: "Shiprocket" },
  { key: "nimbuspost", label: "NimbusPost" },
];

const RAW_DATA = {
  shopify: shopifyRaw,
  shiprocket: shiprocketRaw,
  nimbuspost: nimbuspostRaw,
};

export default function ShipmentTracker() {
  const [selectedProvider, setSelectedProvider] = useState(PROVIDERS[0].key);
  const [isLoading, setIsLoading] = useState(true);

  const orders = RAW_DATA[selectedProvider].orders;

  // Simulated load — there's no real network call (no backend per requirements),
  // but the loading state is a real UI requirement, so we surface it briefly
  // whenever the provider changes.
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 350);
    return () => clearTimeout(timeout);
  }, [selectedProvider]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-stone-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="text-base font-semibold text-stone-900">
                Shipment Tracking Timeline
              </h1>
              <p className="text-sm text-stone-400 mt-0.5">{orders.length} shipments</p>
            </div>
            <ProviderSwitcher
              providers={PROVIDERS}
              selected={selectedProvider}
              onChange={setSelectedProvider}
            />
          </div>
        </div>

        {/* Body */}
        <div key={selectedProvider} className="px-5 sm:px-6 py-5 transition-opacity duration-200">
          {isLoading ? (
            <OrderListSkeleton />
          ) : (
            <OrderList providerKey={selectedProvider} orders={orders} />
          )}
        </div>
      </div>
    </div>
  );
}