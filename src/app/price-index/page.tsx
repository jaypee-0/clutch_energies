import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

type ProductRow = {
  name: string;
  unitPrice: string;
  typicalDelivery: string;
  availability: string;
  note?: string;
};

const products: ProductRow[] = [
  {
    name: "Petrol (PMS)",
    unitPrice: "₦750 / litre",
    typicalDelivery: "< 30 mins",
    availability: "24/7, all service areas",
    note: "Real-time price updates inside the app.",
  },
  {
    name: "Diesel (AGO)",
    unitPrice: "₦920 / litre",
    typicalDelivery: "< 45 mins",
    availability: "24/7, all service areas",
    note: "Bulk pricing available for businesses and estates.",
  },
  {
    name: "Cooking Gas (LPG)",
    unitPrice: "₦680 / kg",
    typicalDelivery: "< 40 mins",
    availability: "7am – 11pm",
    note: "Swap or refill options. Cylinders safety-checked on delivery.",
  },
  {
    name: "Roadside & Towing",
    unitPrice: "From ₦15,000",
    typicalDelivery: "ASAP",
    availability: "24/7, prioritized",
    note: "Covers jumpstarts, tire change, and towing. Final price depends on distance.",
  },
];

export const metadata: Metadata = {
  title: "Price Index | Clutch Energies",
  description:
    "Compare current prices for petrol, diesel, cooking gas, and roadside support from Clutch Energies.",
};

export default function PriceIndexPage() {
  return (
    <main className="bg-black text-white font-dm-sans min-h-screen">
      <NavBar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[rgba(61,164,81,0.12)] blur-3xl" />
          <div className="absolute right-[-160px] top-12 h-[420px] w-[420px] rounded-full bg-[rgba(18,110,52,0.2)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1100px] px-4 md:px-6 py-14 md:py-[4.5rem] space-y-10">
          <div className="space-y-3">
            <div className="text-primary text-sm font-medium">Price Index</div>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              Compare products and delivery SLAs
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-2xl">
              Current indicative pricing across Clutch products. Final pricing may adjust based on
              location, time, and order size. For locked-in business rates, talk to our partnerships team.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="grid grid-cols-4 text-xs sm:text-sm uppercase tracking-wide text-white/50 bg-white/5 border-b border-white/10">
              <div className="px-4 py-3">Product</div>
              <div className="px-4 py-3">Unit price</div>
              <div className="px-4 py-3">Delivery</div>
              <div className="px-4 py-3">Availability</div>
            </div>
            <div className="divide-y divide-white/10">
              {products.map((item) => (
                <div
                  key={item.name}
                  className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-0 px-4 py-4 text-sm sm:text-base"
                >
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-white/80">{item.unitPrice}</div>
                  <div className="text-white/80">{item.typicalDelivery}</div>
                  <div className="text-white/80">{item.availability}</div>
                  {item.note ? (
                    <div className="sm:col-span-4 text-xs text-white/55 mt-2">
                      {item.note}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="glass rounded-2xl border border-white/10 p-5 sm:p-6 space-y-3">
              <h2 className="text-lg font-semibold">Business & fleet pricing</h2>
              <p className="text-sm text-white/70 leading-relaxed">
                Get tailored rates, scheduled deliveries, and consolidated invoicing for fleets,
                estates, and businesses. We align pricing to volume, timing, and SLAs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                  Volume discounts
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                  Priority slots
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                  Transparent billing
                </span>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-sm text-white hover:opacity-90 transition-colors"
                >
                  Talk to sales
                </a>
                <a
                  href="mailto:partnerships@clutchenergies.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-sm text-white/80 hover:text-white"
                >
                  partnerships@clutchenergies.com
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl border border-white/10 p-5 sm:p-6 space-y-3">
              <h2 className="text-lg font-semibold">Things that can affect price</h2>
              <ul className="space-y-2 text-sm text-white/70 leading-relaxed list-disc list-inside">
                <li>Location distance and traffic conditions at time of delivery.</li>
                <li>Time of day and surge during peak emergency windows.</li>
                <li>Volume ordered (larger orders may qualify for better rates).</li>
                <li>Special handling like generator access, estate entry, or towing distance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

