import React from "react"

const ContactSection = ({ formspreeEndpoint }) => (
  <section id="contact" className="section-padding bg-surface">
    <div className="mx-auto max-w-2xl">
      <h2 className="mb-4 text-center text-headline font-extrabold">
        <span className="gradient-text">Let&rsquo;s Work Together</span>
      </h2>
      <p className="mx-auto mb-10 max-w-lg text-center text-muted">
        Ready to grow your business? Send a message and I&rsquo;ll get back to
        you shortly.
      </p>

      <form action={formspreeEndpoint} method="post" className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-front">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full rounded-lg border border-line bg-back px-4 py-3 text-sm text-front outline-none transition-colors focus:border-lead focus:ring-1 focus:ring-lead"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-front">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-line bg-back px-4 py-3 text-sm text-front outline-none transition-colors focus:border-lead focus:ring-1 focus:ring-lead"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-front">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full resize-none rounded-lg border border-line bg-back px-4 py-3 text-sm text-front outline-none transition-colors focus:border-lead focus:ring-1 focus:ring-lead"
            placeholder="Tell me about your project..."
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn-primary px-10 text-sm">
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
)

export default ContactSection
