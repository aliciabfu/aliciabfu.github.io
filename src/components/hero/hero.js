import React from "react"

const Hero = ({ headline, subheadline, ctaText, ctaUrl }) => (
  <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden section-padding pt-32">
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-no-repeat bg-[center_left] sm:bg-center"
      style={{ backgroundImage: "url(/hero-bg.jpg)" }}
    />

    {/* White overlay for text readability */}
    <div className="absolute inset-0 bg-white/80" />

    {/* Gradient tint overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-transparent to-indigo-50/60" />

    {/* Decorative gradient orbs */}
    <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-3xl" />
    <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-violet-400/15 to-blue-500/15 blur-3xl" />

    <div className="relative mx-auto max-w-3xl text-center">
      <h1 className="animate-fade-in text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        <span className="gradient-text">{headline}</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl animate-slide-up text-lg text-muted opacity-0 [animation-delay:0.2s] sm:text-xl">
        {subheadline}
      </p>
      <div className="mt-10 animate-slide-up opacity-0 [animation-delay:0.4s]">
        <a href={ctaUrl} className="btn-primary text-base">
          {ctaText}
        </a>
      </div>
    </div>
  </section>
)

export default Hero
