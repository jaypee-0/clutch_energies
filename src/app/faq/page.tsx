import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

type FaqItem = {
  question: string;
  answer: string;
  tag?: string;
};

const faqs: FaqItem[] = [
  {
    question: "Where does Clutch deliver?",
    answer:
      "We currently serve Lagos, Abuja, and Port Harcourt with fuel, gas, diesel, and roadside support. More cities are rolling out soon—tell us where you need us.",
    tag: "Availability",
  },
  {
    question: "How fast can I get fuel or gas?",
    answer:
      "Most deliveries arrive in under 30 minutes depending on traffic and distance. You can track status in the app and chat our team if you need an update.",
    tag: "Delivery",
  },
  {
    question: "Do you support emergencies?",
    answer:
      "Yes. Tap Emergency in the app or call our hotline for towing, jumpstarts, and on-the-spot refueling. We respond 24/7.",
    tag: "Roadside",
  },
  {
    question: "Can businesses and fleets use Clutch?",
    answer:
      "Absolutely. We create custom plans for fleets, estates, and businesses with scheduled deliveries, transparent billing, and dedicated support.",
    tag: "Business",
  },
  {
    question: "How do I pay?",
    answer:
      "Pay securely in the app using cards or supported wallets. Business clients can enable invoicing with agreed payment terms.",
    tag: "Payments",
  },
  {
    question: "Is my information secure?",
    answer:
      "We use modern encryption and follow industry best practices for data handling. See our privacy policy for details.",
    tag: "Security",
  },
  {
    question: "What if I need to reschedule or cancel?",
    answer:
      "Open your active order in the app and choose reschedule or cancel. For urgent changes, call us and we’ll help immediately.",
    tag: "Orders",
  },
  {
    question: "Do you deliver to generators and estates?",
    answer:
      "Yes. We support homes, estates, and business premises. Share access notes in the app so our drivers can reach you quickly.",
    tag: "Coverage",
  },
];

export const metadata: Metadata = {
  title: "FAQs | Clutch Energies",
  description:
    "Answers to common questions about Clutch delivery, emergencies, payments, and business services.",
};

export default function FaqPage() {
  return (
    <main className="bg-black text-white font-dm-sans min-h-screen">
      <NavBar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[rgba(61,164,81,0.14)] blur-3xl" />
          <div className="absolute right-[-140px] top-12 h-96 w-96 rounded-full bg-[rgba(18,110,52,0.18)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1100px] px-4 md:px-6 py-14 md:py-[4.5rem] space-y-10">
          <div className="space-y-3">
            <div className="text-primary text-sm font-medium">FAQs</div>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              Answers when you need them
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-2xl">
              Everything you need to know about deliveries, emergencies, billing, and how
              we keep you powered up. Still stuck? Chat in the app or contact us.
            </p>
          </div>

          <div className="grid gap-4 md:gap-5">
            {faqs.map((item) => (
              <article
                key={item.question}
                className="glass rounded-2xl border border-white/10 p-5 sm:p-6 space-y-2"
              >
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-semibold leading-snug">{item.question}</h2>
                  {item.tag ? (
                    <span className="px-2.5 py-1 rounded-full text-[11px] uppercase tracking-wide bg-white/5 border border-white/10 text-white/60">
                      {item.tag}
                    </span>
                  ) : null}
                </div>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>

          <div className="glass rounded-2xl border border-white/10 p-5 sm:p-6 space-y-3">
            <p className="text-base font-semibold text-white">Need more help?</p>
            <p className="text-sm text-white/70">
              Chat with us in the app or reach out via the contact page. We respond quickly.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-sm text-white hover:opacity-90 transition-colors"
              >
                Go to Contact
              </a>
              <a
                href="mailto:hello@clutchenergies.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-sm text-white/80 hover:text-white"
              >
                Email support
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

