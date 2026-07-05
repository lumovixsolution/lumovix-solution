import { Send } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-20 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-lumovix-navy via-lumovix-indigo to-lumovix-navy rounded-3xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
            <div className="flex items-center justify-center">
              <img
                src="/assets/cta-illustration.png"
                alt="Success target illustration"
                className="w-full max-w-sm h-auto animate-float-slow drop-shadow-2xl"
              />
            </div>

            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Your <span className="gradient-text">Success</span> Starts Here
              </h2>
              <p className="text-white/70 text-base sm:text-lg mb-8 max-w-md mx-auto lg:mx-0">
                Transform your ideas into powerful digital solutions with Lumovix Solution.
                Let&apos;s create something extraordinary together.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full border-2 border-white/40 text-white font-semibold hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                Let&apos;s Work Together
                <Send size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
