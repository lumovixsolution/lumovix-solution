import { MessageSquare, Palette, Code2, Rocket } from 'lucide-react'
import { processSteps } from '../data/siteData'

const stepIcons = [MessageSquare, Palette, Code2, Rocket]

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-lumovix-purple/10 text-lumovix-purple text-xs font-bold tracking-widest mb-4">
            OUR PROCESS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-lumovix-navy mb-3">
            How We Work
          </h2>
          <div className="w-12 h-1 bg-lumovix-purple rounded-full mx-auto" />
          <p className="text-lumovix-muted mt-4 max-w-xl mx-auto">
            A simple, transparent process from idea to launch.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {processSteps.map((step, index) => {
            const Icon = stepIcons[index]
            return (
              <div key={step.step} className="relative group">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-lumovix-purple/30 to-lumovix-purple/10" />
                )}
                <div className="bg-lumovix-light/60 rounded-2xl p-6 h-full border border-lumovix-purple/5 hover:border-lumovix-purple/20 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center shadow-lg shadow-lumovix-purple/20">
                      <Icon className="text-white" size={22} />
                    </div>
                    <span className="text-2xl font-display font-extrabold text-lumovix-purple/30">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-lumovix-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lumovix-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
