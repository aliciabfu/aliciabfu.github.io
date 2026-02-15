import React from "react"
import SocialLinks from "../social-links/social-links"

const Footer = ({ name, tagline, social, hasTestimonials }) => {
  const footerLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    hasTestimonials && { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ].filter(Boolean)

  return (
  <footer className="bg-front text-back/70">
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="mb-2 text-lg font-bold text-back">{name}</h3>
          {tagline && <p className="text-sm">{tagline}</p>}
        </div>

        {/* Nav links */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-back">
            Navigation
          </h4>
          <ul className="space-y-2">
            {footerLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm transition-colors hover:text-back"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-back">
            Connect
          </h4>
          {social && <SocialLinks social={social} />}
        </div>
      </div>

      <div className="mt-12 border-t border-back/10 pt-6 text-center text-xs">
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </div>
    </div>
  </footer>
  )
}

export default Footer
