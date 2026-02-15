import React from "react"
import TestimonialCard from "./testimonial-card"

const TestimonialsSection = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) return null

  return (
    <section id="testimonials" className="section-padding bg-surface">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-headline font-bold text-front">
          What Clients Say
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted">
          Trusted by leading brands and marketing teams.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={`${testimonial.name}_${i}`} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
