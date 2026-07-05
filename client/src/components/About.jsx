import { Lightbulb, Users, Award, Zap } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We embrace cutting-edge technologies to deliver forward-thinking solutions.',
  },
  {
    icon: Users,
    title: 'Client Focused',
    description: 'Your goals drive our process. We listen, collaborate, and deliver results.',
  },
  {
    icon: Award,
    title: 'Quality Driven',
    description: 'Every project meets the highest standards of design, code, and performance.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Agile workflows ensure your project launches on time without compromising quality.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-lumovix-purple/10 text-lumovix-purple text-xs font-bold tracking-widest mb-4">
              ABOUT US
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-lumovix-navy mb-6">
              Building Digital Futures with{' '}
              <span className="gradient-text">Passion</span>
            </h2>
            <p className="text-lumovix-muted leading-relaxed mb-4">
              Lumovix Solution is a software company based in Malabe, Sri Lanka, dedicated to
              transforming ideas into powerful digital products. We specialize in web
              development, mobile applications, and creative digital solutions.
            </p>
            <p className="text-lumovix-muted leading-relaxed">
              Our team combines technical expertise with creative vision to help
              businesses and individuals achieve their digital goals. From startups
              to established enterprises, we deliver solutions that make an impact.
            </p>

            <div className="flex items-center gap-3 mt-8">
              <div className="pixel-dot" />
              <div className="pixel-dot opacity-70" />
              <div className="pixel-dot opacity-40" />
              <span className="text-xs tracking-[0.3em] text-lumovix-silver font-medium ml-2">
                INNOVATE • BUILD • ELEVATE
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-5 rounded-2xl bg-lumovix-light/80 border border-lumovix-purple/5 hover:border-lumovix-purple/20 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl gradient-purple flex items-center justify-center mb-4 shadow-md shadow-lumovix-purple/20">
                  <value.icon className="text-white" size={22} />
                </div>
                <h3 className="font-display font-bold text-lumovix-navy text-sm mb-1.5">
                  {value.title}
                </h3>
                <p className="text-lumovix-muted text-xs leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
