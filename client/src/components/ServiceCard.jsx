import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ icon: Icon, title, description, color = 'purple', onViewDetails }) {
  const iconColors = {
    purple: 'from-lumovix-purple to-lumovix-violet',
    indigo: 'from-lumovix-indigo to-lumovix-violet',
    deep: 'from-lumovix-deep to-lumovix-purple',
    violet: 'from-lumovix-violet to-lumovix-purple',
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onViewDetails}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onViewDetails()
        }
      }}
      className="group bg-white rounded-2xl p-6 sm:p-8 card-shadow transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
        <div
          className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${iconColors[color]} flex items-center justify-center shadow-lg shadow-lumovix-purple/20`}
        >
          <Icon className="text-white" size={32} strokeWidth={1.5} />
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="font-display font-bold text-lg sm:text-xl text-lumovix-navy mb-2 group-hover:text-lumovix-purple transition-colors">
            {title}
          </h3>
          <p className="text-lumovix-muted text-sm leading-relaxed flex-1">
            {description}
          </p>

          <div className="flex justify-end mt-4">
            <span className="w-10 h-10 rounded-xl bg-lumovix-light flex items-center justify-center text-lumovix-purple group-hover:bg-lumovix-purple group-hover:text-white transition-all duration-300">
              <ArrowRight size={18} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
