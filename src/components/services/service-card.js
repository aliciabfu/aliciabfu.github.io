import React from "react"
import ServiceIcon from "./service-icon"

const accentMap = {
  search: {
    border: "border-l-blue-500",
    bg: "bg-blue-500/10",
    text: "text-blue-600",
  },
  trending: {
    border: "border-l-indigo-500",
    bg: "bg-indigo-500/10",
    text: "text-indigo-600",
  },
  share: {
    border: "border-l-violet-500",
    bg: "bg-violet-500/10",
    text: "text-violet-600",
  },
  chart: {
    border: "border-l-emerald-500",
    bg: "bg-emerald-500/10",
    text: "text-emerald-600",
  },
  zap: {
    border: "border-l-amber-500",
    bg: "bg-amber-500/10",
    text: "text-amber-600",
  },
  target: {
    border: "border-l-rose-500",
    bg: "bg-rose-500/10",
    text: "text-rose-600",
  },
}

const defaultAccent = {
  border: "border-l-lead",
  bg: "bg-lead/10",
  text: "text-lead",
}

const ServiceCard = ({ name, description, icon }) => {
  const accent = accentMap[icon] || defaultAccent

  return (
    <div
      className={`rounded-xl border border-line border-l-4 ${accent.border} bg-back p-6 transition-shadow duration-200 hover:shadow-lg`}
    >
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${accent.bg} ${accent.text}`}
      >
        <ServiceIcon icon={icon} className="h-5 w-5" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-front">{name}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  )
}

export default ServiceCard
