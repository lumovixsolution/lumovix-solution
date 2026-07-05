import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data/siteData'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-lumovix-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-lumovix-purple/10 text-lumovix-purple text-xs font-bold tracking-widest mb-4">
            TESTIMONIALS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-lumovix-navy mb-3">
            Happy Clients
          </h2>
          <div className="w-12 h-1 bg-lumovix-purple rounded-full mx-auto" />
          <p className="text-lumovix-muted mt-4 max-w-xl mx-auto">
            What our clients say about working with Lumovix Solution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-8 card-shadow relative hover:-translate-y-1 transition-all duration-300"
            >
              <Quote
                className="absolute top-6 right-6 text-lumovix-purple/15"
                size={40}
                strokeWidth={1.5}
              />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-lumovix-muted text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{item.review}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full gradient-purple flex items-center justify-center text-white font-bold text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-lumovix-navy">
                    {item.name}
                  </p>
                  <p className="text-xs text-lumovix-purple font-medium">
                    {item.project}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
