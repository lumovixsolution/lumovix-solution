import { Rocket, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] hero-blob -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute top-20 right-10 w-32 h-32 border border-lumovix-purple/10 rounded-full pointer-events-none" />
      <div className="absolute top-40 right-32 w-4 h-4 bg-lumovix-purple/20 rounded-full pointer-events-none" />
      <div className="absolute top-28 right-48 w-2 h-2 bg-lumovix-violet/30 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-purple text-white text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-lumovix-purple/25">
              <Rocket size={16} />
              <span>Innovate. Build. Elevate.</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-lumovix-navy leading-tight mb-6">
              We Turn Ideas Into Digital{' '}
              <span className="gradient-text">Solutions</span>
            </h1>

            <p className="text-lumovix-muted text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              At Lumovix Solution, we craft innovative web and mobile experiences
              that help businesses grow. From concept to launch, we bring your
              vision to life with cutting-edge technology.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full gradient-purple text-white font-semibold text-sm sm:text-base shadow-xl shadow-lumovix-purple/30 hover:shadow-lumovix-purple/50 hover:scale-[1.02] transition-all duration-300"
            >
              Let&apos;s Build Something Great
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                <ArrowRight size={18} />
              </span>
            </a>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl animate-float-slow">
              <div className="absolute -top-4 -left-4 w-full h-full bg-lumovix-light rounded-3xl" />
              <img
                src="/assets/hero-mockup.png"
                alt="Lumovix digital solutions — laptop and mobile app mockup"
                className="relative w-full h-auto rounded-2xl shadow-2xl shadow-lumovix-purple/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
