import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Cooking Gas Delivery | Clutch Energies",
  description:
    "Safe, fast cooking gas delivery with swap or refill options. We check cylinders and keep your kitchen running.",
};

export default function GasPage() {
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
            <div className="text-primary text-sm font-medium">Cooking gas</div>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              Gas delivery with safety checks
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-2xl">
              Swap or refill cylinders with trained handlers. We inspect valves, seals, and leak risks
              so you can cook safely without leaving home.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Feature title="Swap or refill" description="Pick the option you prefer; we handle the logistics." />
            <Feature title="Safety first" description="Valve checks and leak screening before we leave." />
            <Feature title="Convenient hours" description="7am–11pm delivery windows in supported areas." />
          </div>

          <div className="glass rounded-2xl border border-white/10 p-5 sm:p-6 space-y-3">
            <h2 className="text-lg font-semibold">What to prepare</h2>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-white/70 leading-relaxed">
              <li>Place cylinders where our team can access them easily.</li>
              <li>Share estate or gate access notes in the app.</li>
              <li>Let us know if you need hose or regulator checks.</li>
            </ul>
          </div>

          <div className="glass rounded-2xl border border-white/10 p-5 sm:p-6 space-y-3">
            <h2 className="text-lg font-semibold">Get started</h2>
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
                Talk to support
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

