import { services } from '../data/siteData'
import ServiceCard from './ServiceCard'

export default function Services({ onViewService }) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-lumovix-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-lumovix-purple/10 text-lumovix-purple text-xs font-bold tracking-widest mb-4">
            WHAT WE DO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-lumovix-navy mb-3">
            Our Services
          </h2>
          <div className="w-12 h-1 bg-lumovix-purple rounded-full mx-auto" />
          <p className="text-lumovix-muted mt-4 max-w-lg mx-auto text-sm">
            Click any service to explore full details and what we offer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              onViewDetails={() => onViewService(service)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
