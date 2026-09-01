import SiteHeader from "./components/SiteHeader";
import ShipmentTracker from "./components/ShipmentTracker";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      {/* thin accent stripe — a nod to a shipping label's edge marking */}
      <div className="h-1 bg-[#C1501F]" />

      <SiteHeader />

      <main className="py-10 px-4 sm:py-14">
        <ShipmentTracker />
      </main>
    </div>
  );
}