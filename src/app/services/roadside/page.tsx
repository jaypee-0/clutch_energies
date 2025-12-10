import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Roadside & Towing | Clutch Energies",
  description:
    "Emergency fuel, jumpstarts, tire changes, and towing. Fast response with live tracking.",
};

export default function RoadsidePage() {
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
            <div className="text-primary text-sm font-medium">Roadside & towing</div>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              Help on the road, when you need it
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-2xl">
              Emergency fuel, towing, jumpstarts, and tire help. Request in-app or call our hotline
              for the fastest response.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Feature title="Fast dispatch" description="Prioritized 24/7 response with live tracking." />
            <Feature title="Multiple services" description="Fuel top-up, towing, jumpstarts, and tire changes." />
            <Feature title="Safety focused" description="Verified partners and safety-first procedures." />
          </div>

          <div className="glass rounded-2xl border border-white/10 p-5 sm:p-6 space-y-3">
            <h2 className="text-lg font-semibold">How to request</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm md:text-base text-white/70 leading-relaxed">
              <li>Open the app and choose Roadside or Emergency.</li>
              <li>Share your live location and vehicle details.</li>
              <li>Keep your phone handy—our crew will call on arrival.</li>
            </ol>
          </div>

          <div className="glass rounded-2xl border border-white/10 p-5 sm:p-6 space-y-3">
            <h2 className="text-lg font-semibold">Need towing?</h2>
            <p className="text-sm md:text-base text-white/70 leading-relaxed">
              We tow within and between supported cities. Pricing depends on distance and vehicle type; we’ll
              confirm before dispatch.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/price-index"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-sm text-white hover:opacity-90 transition-colors"
              >
                View pricing
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-sm text-white/80 hover:text-white"
              >
                Call or message us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="glass rounded-2xl border border-white/10 p-5 space-y-2">
      <p className="text-base font-semibold">{title}</p>
      <p className="text-sm text-white/70 leading-relaxed">{description}</p>
    </div>
  );
}

