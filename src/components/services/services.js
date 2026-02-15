import React from "react"
import ServiceCard from "./service-card"

const Services = ({ services }) => (
  <section id="services" className="section-padding bg-surface">
    <div className="mx-auto max-w-6xl">
      <h2 className="mb-4 text-center text-headline font-extrabold">
        <span className="gradient-text">What I Do</span>
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-muted">
        Comprehensive digital marketing services tailored to drive growth and
        maximize your return on investment.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.name} {...service} />
        ))}
      </div>
    </div>
  </section>
)

export default Services
