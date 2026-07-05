import { useState, useEffect } from 'react'
import { Send, MessageSquare, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { services } from '../data/siteData'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export default function Contact({ prefill }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    if (prefill) {
      setForm((prev) => ({
        ...prev,
        service: prefill.service || prev.service,
        message: prefill.message || prev.message,
      }))
    }
  }, [prefill])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!ACCESS_KEY) {
      setStatus('error')
      setFeedback('Form is not configured yet. Please add your Web3Forms access key.')
      return
    }

    const serviceLabel = services.find((s) => s.id === form.service)?.title || 'General Inquiry'

    setStatus('loading')
    setFeedback('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name,
          email: form.email,
          service: serviceLabel,
          message: form.message,
          subject: `[${serviceLabel}] New message from ${form.name}`,
          from_name: 'Lumovix Solution Website',
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setFeedback('Message sent successfully! We will get back to you soon.')
        setForm({ name: '', email: '', service: '', message: '' })
      } else {
        setStatus('error')
        setFeedback(data.message || 'Failed to send message. Please try again.')
      }
    } catch {
      setStatus('error')
      setFeedback('Network error. Please check your connection and try again.')
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-lumovix-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-lumovix-purple/10 text-lumovix-purple text-xs font-bold tracking-widest mb-4">
              GET IN TOUCH
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-lumovix-navy mb-3">
              Contact Us
            </h2>
            <p className="text-lumovix-muted">
              Have a project in mind? We&apos;d love to hear from you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-6 sm:p-8 card-shadow space-y-5"
          >
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-lumovix-navy mb-1.5">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={status === 'loading'}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lumovix-purple focus:ring-2 focus:ring-lumovix-purple/20 outline-none transition-all text-sm disabled:opacity-60"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-lumovix-navy mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={status === 'loading'}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lumovix-purple focus:ring-2 focus:ring-lumovix-purple/20 outline-none transition-all text-sm disabled:opacity-60"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-lumovix-navy mb-1.5">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                disabled={status === 'loading'}
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lumovix-purple focus:ring-2 focus:ring-lumovix-purple/20 outline-none transition-all text-sm bg-white disabled:opacity-60"
              >
                <option value="">Select a service...</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-lumovix-navy mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                disabled={status === 'loading'}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-lumovix-purple focus:ring-2 focus:ring-lumovix-purple/20 outline-none transition-all text-sm resize-none disabled:opacity-60"
                placeholder="Tell us about your project..."
              />
            </div>

            {feedback && (
              <div
                className={`flex items-start gap-2 p-4 rounded-xl text-sm ${
                  status === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}
              >
                {status === 'success' ? (
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                )}
                <span>{feedback}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full gradient-purple text-white font-semibold shadow-lg shadow-lumovix-purple/25 hover:shadow-lumovix-purple/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-6 text-lumovix-muted text-sm text-center">
            <div className="flex items-center gap-2">
              <MessageSquare size={16} className="text-lumovix-purple" />
              <span>WhatsApp:</span>
            </div>
            <a
              href="https://wa.me/94789952479"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lumovix-purple font-semibold hover:underline"
            >
              0789952479
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
