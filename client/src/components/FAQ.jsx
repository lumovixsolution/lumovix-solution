import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/siteData'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-lumovix-purple/10 text-lumovix-purple text-xs font-bold tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-lumovix-navy mb-3">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-1 bg-lumovix-purple rounded-full mx-auto" />
          <p className="text-lumovix-muted mt-4">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-100 overflow-hidden card-shadow"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left bg-white hover:bg-lumovix-light/30 transition-colors"
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-lumovix-navy">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-lumovix-purple transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 sm:px-6 pb-5 text-sm text-lumovix-muted leading-relaxed border-t border-gray-50 pt-4">
                    {faq.answer}
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
