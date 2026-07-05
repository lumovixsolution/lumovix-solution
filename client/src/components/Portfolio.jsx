import { Play, ExternalLink } from 'lucide-react'
import { projects } from '../data/siteData'

export default function Portfolio({ onPlayVideo }) {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-lumovix-purple/10 text-lumovix-purple text-xs font-bold tracking-widest mb-4">
            OUR WORK
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-lumovix-navy mb-3">
            Portfolio
          </h2>
          <div className="w-12 h-1 bg-lumovix-purple rounded-full mx-auto" />
          <p className="text-lumovix-muted mt-4 max-w-xl mx-auto">
            Explore our recent projects — from creative e-invitations to full-stack applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => {
            const hasVideo = Boolean(project.demoVideo)
            const hasLiveDemo = Boolean(project.demoUrl)

            const handleLiveDemo = () => {
              if (project.demoUrl.startsWith('http')) {
                window.open(project.demoUrl, '_blank', 'noopener,noreferrer')
              } else {
                window.open(project.demoUrl, '_blank')
              }
            }

            return (
              <article
                key={project.id}
                className="group rounded-2xl overflow-hidden card-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-lumovix-light">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.category === 'Creative E-Invitation' && (
                    <span className="absolute top-3 left-3 text-lg drop-shadow-md z-10" aria-hidden="true">
                      🎊
                    </span>
                  )}
                  {hasVideo && (
                    <button
                      type="button"
                      onClick={() => onPlayVideo(project)}
                      className="absolute inset-0 flex items-center justify-center bg-lumovix-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      aria-label={`Play ${project.title} demo`}
                    >
                      <span className="w-12 h-12 rounded-full bg-white/95 flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                        <Play className="text-lumovix-purple ml-0.5" size={22} fill="currentColor" />
                      </span>
                    </button>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-lumovix-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                <div className="p-6 bg-white flex flex-col flex-1">
                  <span className="text-xs font-semibold text-lumovix-purple tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="font-display font-bold text-lg text-lumovix-navy mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lumovix-muted text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  {hasVideo && (
                    <button
                      type="button"
                      onClick={() => onPlayVideo(project)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-lumovix-purple hover:gap-3 transition-all w-fit"
                    >
                      <Play size={16} />
                      View Demo
                    </button>
                  )}
                  {!hasVideo && hasLiveDemo && (
                    <button
                      type="button"
                      onClick={handleLiveDemo}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-lumovix-purple hover:gap-3 transition-all w-fit"
                    >
                      View Live Demo
                      <ExternalLink size={16} />
                    </button>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
