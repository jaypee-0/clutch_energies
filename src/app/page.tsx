//

export default function Home() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="radial-hero border-b border-white/5">
        <div className="container-page pt-8 pb-16">
          <nav className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-green-500"></div>
              <span className="text-sm font-semibold tracking-wide">Clutch</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="h-8 px-3 rounded-full text-xs bg-white/10 hover:bg-white/15 border border-white/10">
                Download App
              </button>
            </div>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 items-center mt-6">
            <div className="space-y-5">
              <h1 className="text-[40px] leading-tight md:text-5xl lg:text-[44px] font-semibold">
                Fuel, gas, diesel & more.
                <br /> Delivered fast, wherever you are.
              </h1>
              <p className="text-white/70 max-w-[50ch] text-sm">
                On-demand delivery of cooking gas, fuel and emergency vehicle services—no queues, no delays; just fast, reliable access 24/7.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button className="h-10 px-4 rounded-full text-sm bg-white text-black hover:bg-white/90">Download on iOS</button>
                <button className="h-10 px-4 rounded-full text-sm bg-white/10 border border-white/15 hover:bg-white/15">Download on Android</button>
                <div className="flex items-center gap-3 pl-4">
                  <div className="size-14 rounded-md bg-white"></div>
                  <div className="text-xs text-white/60">
                    Scan QR to Download
                  </div>
                </div>
              </div>
              <div className="flex gap-8 mt-6 text-xs text-white/60">
                <div className="flex items-center gap-2"><div className="size-5 rounded bg-white/15"/> Petrol</div>
                <div className="flex items-center gap-2"><div className="size-5 rounded bg-white/15"/> Gas</div>
                <div className="flex items-center gap-2"><div className="size-5 rounded bg-white/15"/> Diesel</div>
                <div className="flex items-center gap-2"><div className="size-5 rounded bg-white/15"/> Inspection</div>
                <div className="flex items-center gap-2"><div className="size-5 rounded bg-white/15"/> Towing</div>
                <div className="flex items-center gap-2"><div className="size-5 rounded bg-white/15"/> Emergency</div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden card"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Petrol Feature */}
      <section className="container-page py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-3">
            <div className="text-yellow-400 text-sm">Petrol</div>
            <h2 className="text-2xl font-semibold">Fuel delivered to your doorstep in less than 30 mins.</h2>
            <p className="text-sm text-white/70 max-w-[55ch]">
              Get high-quality petrol delivered straight to your vehicle—whether you&apos;re at home, the office, anywhere else. Easy payment, no long queues and no last-minute detours.
            </p>
            <button className="text-xs text-white/80 underline underline-offset-4">Learn more →</button>
          </div>
          <div className="card h-64 lg:h-72"></div>
        </div>
      </section>

      {/* App Section */}
      <section className="container-page py-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="card h-72 lg:h-80"></div>
          <div className="space-y-4">
            <div className="text-yellow-400 text-sm">All in one app</div>
            <h2 className="text-2xl font-semibold">Ready when you need it</h2>
            <p className="text-sm text-white/70 max-w-[55ch]">
              From emergency roadside help to easy refueling, Clutch is built for convenience, speed and peace of mind. Whether for your car or your kitchen, we’ll keep you powered up.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="h-10 px-4 rounded-full text-sm bg-white text-black hover:bg-white/90">Download on iOS</button>
              <button className="h-10 px-4 rounded-full text-sm bg-white/10 border border-white/15 hover:bg-white/15">Download on Android</button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="container-page py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-3">
            <div className="text-white/60 text-sm">For business</div>
            <h2 className="text-2xl font-semibold">Reduce downtime and fuel delays with Clutch for business</h2>
            <p className="text-sm text-white/70 max-w-[55ch]">
              Ready to simplify your fuelling process? Contact us today to create a custom fleet service plan that fits your operations.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="h-10 px-4 rounded-full text-sm bg-white/10 border border-white/15 hover:bg-white/15">Fleet services</button>
              <button className="h-10 px-4 rounded-full text-sm bg-white text-black hover:bg-white/90">Become a partner</button>
            </div>
          </div>
          <div className="card h-56 lg:h-64"></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-10">
        <div className="text-center space-y-2">
          <div className="text-yellow-400 text-sm">Testimonials</div>
          <h3 className="text-2xl font-semibold">Don’t take our word for it — hear theirs</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="glass rounded-xl p-4 text-sm text-white/80">
              This company gas delivery is so convenient. No more carrying heavy cylinders or waiting in long queues. So impressed.
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container-page py-16">
        <div className="cta-gradient rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="grid md:grid-cols-2 items-center gap-6">
            <div className="space-y-3">
              <h4 className="text-xl md:text-2xl font-semibold">Join thousands of users who use Clutch everyday</h4>
              <div className="flex flex-wrap gap-3">
                <button className="h-10 px-4 rounded-full text-sm bg-white text-black hover:bg-white/90">Download on iOS</button>
                <button className="h-10 px-4 rounded-full text-sm bg-black/20 border border-black/20 text-white hover:bg-black/25">Download on Android</button>
              </div>
            </div>
            <div className="flex md:justify-end">
              <div className="size-20 rounded-md bg-white"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-12" />
    </main>
  );
}
