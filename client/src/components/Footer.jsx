import { Phone, Mail, Globe, MapPin } from 'lucide-react'

const contactItems = [
  {
    icon: Phone,
    primary: '0789952479',
    secondary: 'Call / WhatsApp',
    href: 'https://wa.me/94789952479',
  },
  {
    icon: Mail,
    primary: 'lumovixsolution@gmail.com',
    secondary: 'Email Us',
    href: 'mailto:lumovixsolution@gmail.com',
  },
  {
    icon: Globe,
    primary: 'Lumovix Solution',
    secondary: 'Building Digital Futures',
    href: '#home',
  },
  {
    icon: MapPin,
    primary: 'Malabe, Sri Lanka',
    secondary: 'Serving Globally',
    href: '#contact',
  },
]

export default function Footer() {
  return (
    <footer className="bg-lumovix-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-12">
          {contactItems.map((item) => (
            <a
              key={item.primary}
              href={item.href}
              className="flex items-start gap-4 group hover:opacity-90 transition-opacity"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-purple flex items-center justify-center shadow-lg shadow-lumovix-purple/20">
                <item.icon className="text-white" size={20} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm sm:text-base group-hover:text-lumovix-violet transition-colors">
                  {item.primary}
                </p>
                <p className="text-lumovix-silver text-xs sm:text-sm mt-0.5">
                  {item.secondary}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo.png"
              alt="Lumovix Solution"
              className="h-8 w-8 object-contain rounded"
            />
            <span className="text-lumovix-silver text-xs tracking-widest">
              INNOVATE • BUILD • ELEVATE
            </span>
          </div>
          <p className="text-lumovix-silver/60 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Lumovix Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
