import { X } from 'lucide-react'

function getEmbedUrl(url) {
  if (!url) return null
  if (url.includes('youtube.com/embed/')) return url
  const watchMatch = url.match(/[?&]v=([^&]+)/)
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`
  const shortMatch = url.match(/youtu\.be\/([^?]+)/)
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`
  return null
}

export default function VideoModal({ project, onClose }) {
  if (!project?.demoVideo) return null

  const embedUrl = getEmbedUrl(project.demoVideo)
  const isYoutube = Boolean(embedUrl)

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} demo video`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close video"
      />

      <div className="relative w-full max-w-3xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        <div className="rounded-2xl overflow-hidden bg-black shadow-2xl">
          <div className="px-4 py-3 bg-lumovix-navy">
            <p className="text-white font-display font-bold text-sm sm:text-base">
              {project.title} — Demo
            </p>
          </div>

          <div className="aspect-video bg-black">
            {isYoutube ? (
              <iframe
                src={`${embedUrl}?autoplay=1`}
                title={`${project.title} demo`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={project.demoVideo}
                controls
                autoPlay
                className="w-full h-full"
                playsInline
              >
                Your browser does not support video playback.
              </video>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
