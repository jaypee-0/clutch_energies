import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Petrol Delivery | Clutch Energies",
  description:
    "Fast petrol delivery to your vehicle or generator. Track in-app, stay powered, and skip the queues.",
};

export default function PetrolPage() {
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
            <div className="text-primary text-sm font-medium">Petrol delivery</div>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              Petrol to your car or generator fast
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-2xl">
              Skip the station. We deliver high-quality petrol to your location in under 30 minutes
              in supported cities. Track in-app and stay on schedule.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Feature title="Fast arrival" description="Under 30 mins in supported zones, with live tracking." />
            <Feature title="Safe handling" description="Trained crew and sealed equipment for clean transfers." />
            <Feature title="Anytime service" description="24/7 coverage in Lagos, Abuja, and Port Harcourt." />
          </div>

          <div className="glass rounded-2xl border border-white/10 p-5 sm:p-6 space-y-3">
            <h2 className="text-lg font-semibold">How it works</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm md:text-base text-white/70 leading-relaxed">
              <li>Open the Clutch app and choose Petrol delivery.</li>
              <li>Set your exact location and any access notes.</li>
              <li>Track our team in real time; we’ll fuel on arrival.</li>
            </ol>
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

