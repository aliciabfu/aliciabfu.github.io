import React, { useState, useEffect } from "react"

const Navbar = ({ name, profession, ctaText, ctaUrl, hasTestimonials }) => {
  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    hasTestimonials && { label: "Testimonials", href: "#testimonials" },
  ].filter(Boolean)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when bottom sheet is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-back/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="/"
            className="font-header tracking-tight text-front"
          >
            <span className="text-[2rem] font-bold leading-tight">{name}</span>
            {profession && (
              <>
                <span className="ml-2 hidden text-[1.18rem] font-normal text-muted sm:inline">
                  {profession}
                </span>
                <span className="block text-xs font-normal text-muted sm:hidden">
                  {profession}
                </span>
              </>
            )}
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-muted transition-colors hover:text-front"
              >
                {label}
              </a>
            ))}
            <a href={ctaUrl} className="btn-primary text-sm">
              {ctaText}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-1.5 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-front transition-transform duration-200 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-front transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-front transition-transform duration-200 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile bottom sheet */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-front/20 backdrop-blur-sm" />

          {/* Sheet */}
          <div
            className="absolute bottom-0 left-0 right-0 rounded-t-2xl bg-back px-6 pb-8 pt-4 shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle */}
            <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-line" />

            <div className="flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-lg px-4 py-3 text-base font-medium text-front transition-colors hover:bg-surface"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>

            <a
              href={ctaUrl}
              className="btn-primary mt-4 block text-center text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {ctaText}
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
