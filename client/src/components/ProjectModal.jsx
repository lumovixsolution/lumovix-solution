import { useState } from 'react'
import { X, Play, ExternalLink, MessageCircle } from 'lucide-react'
import VideoModal from './VideoModal'

export default function ProjectModal({ project, onClose, onRequestProject }) {
  const [showVideo, setShowVideo] = useState(false)

  if (!project) return null

  const hasVideo = Boolean(project.demoVideo)
  const hasLiveDemo = Boolean(project.demoUrl)

  const handlePrimaryAction = () => {
    if (hasVideo) {
      setShowVideo(true)
    } else if (hasLiveDemo) {
      if (project.demoUrl.startsWith('http')) {
        window.open(project.demoUrl, '_blank', 'noopener,noreferrer')
      } else {
        window.open(project.demoUrl, '_blank')
      }
    } else {
      onRequestProject(project)
      onClose()
    }
  }

  const primaryLabel = hasVideo
    ? 'View Demo'
    : hasLiveDemo
      ? 'View Live Demo'
      : 'Request Quote'

  const PrimaryIcon = hasVideo ? Play : ExternalLink

  return (
    <>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          type="button"
          className="absolute inset-0 bg-lumovix-navy/60 backdrop-blur-sm"
          onClick={onClose}
          aria-label="Close modal"
        />

        <div className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lumovix-navy/80 via-lumovix-navy/20 to-transparent" />
            {hasVideo && (
              <button
                type="button"
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play demo video"
              >
                <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="text-lumovix-purple ml-1" size={28} fill="currentColor" />
                </span>
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-xs font-semibold text-white/80 tracking-wide">
                {project.category}
              </span>
              <h2 id="project-modal-title" className="font-display font-bold text-xl text-white mt-0.5">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="p-6 space-y-5">
            <p className="text-lumovix-muted text-sm leading-relaxed">{project.description}</p>

            <div>
              <h3 className="text-xs font-bold text-lumovix-navy tracking-widest mb-2">FEATURES</h3>
              <ul className="grid grid-cols-2 gap-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs text-lumovix-muted flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lumovix-purple flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-lumovix-navy tracking-widest mb-2">TECH STACK</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-lumovix-light text-lumovix-purple text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={handlePrimaryAction}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full gradient-purple text-white text-sm font-semibold shadow-lg shadow-lumovix-purple/25 hover:scale-[1.02] transition-all"
              >
                <PrimaryIcon size={16} />
                {primaryLabel}
              </button>
              <button
                type="button"
                onClick={() => {
                  onRequestProject(project)
                  onClose()
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border-2 border-lumovix-purple text-lumovix-purple text-sm font-semibold hover:bg-lumovix-light transition-all"
              >
                <MessageCircle size={16} />
                Get Similar Project
              </button>
            </div>
          </div>
        </div>
      </div>

      {showVideo && (
        <VideoModal project={project} onClose={() => setShowVideo(false)} />
      )}
    </>
  )
}
