import { X, MessageCircle } from 'lucide-react'
import { projects } from '../data/siteData'

const iconColors = {
  purple: 'from-lumovix-purple to-lumovix-violet',
  indigo: 'from-lumovix-indigo to-lumovix-violet',
  deep: 'from-lumovix-deep to-lumovix-purple',
  violet: 'from-lumovix-violet to-lumovix-purple',
}

export default function ServiceModal({ service, onClose, onRequestService }) {
  if (!service) return null

  const Icon = service.icon
  const relatedProjects = projects.filter((p) => p.serviceId === service.id)

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-lumovix-navy/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close modal"
      />

      <div className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className={`relative px-6 pt-8 pb-6 bg-gradient-to-br ${iconColors[service.color]}`}>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
              <Icon className="text-white" size={32} strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-xs font-semibold text-white/70 tracking-widest">SERVICE</span>
              <h2 id="service-modal-title" className="font-display font-bold text-xl text-white">
                {service.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-5">
          <p className="text-lumovix-muted text-sm leading-relaxed">{service.longDescription}</p>

          <div>
            <h3 className="text-xs font-bold text-lumovix-navy tracking-widest mb-2">WHAT WE OFFER</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {service.features.map((feature) => (
                <li key={feature} className="text-xs text-lumovix-muted flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-lumovix-purple flex-shrink-0 mt-1.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-lumovix-navy tracking-widest mb-2">TECHNOLOGIES</h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-lumovix-light text-lumovix-purple text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {relatedProjects.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-lumovix-navy tracking-widest mb-2">RELATED PROJECTS</h3>
              <div className="flex flex-wrap gap-2">
                {relatedProjects.map((project) => (
                  <span
                    key={project.id}
                    className="px-3 py-1.5 rounded-lg bg-lumovix-light text-lumovix-navy text-xs font-medium border border-lumovix-purple/10"
                  >
                    {project.title}
                  </span>
                ))}
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={() => {
              onRequestService(service)
              onClose()
            }}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full gradient-purple text-white text-sm font-semibold shadow-lg shadow-lumovix-purple/25 hover:scale-[1.02] transition-all"
          >
            <MessageCircle size={16} />
            Get Started with {service.title}
          </button>
        </div>
      </div>
    </div>
  )
}
