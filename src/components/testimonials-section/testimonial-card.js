import React from "react"

const TestimonialCard = ({ name, company, quote, avatarUrl, avatarAlt, linkUrl }) => (
  <blockquote className="flex flex-col rounded-xl border border-line bg-back p-6">
    <span className="mb-2 text-4xl leading-none text-lead" aria-hidden="true">
      &ldquo;
    </span>
    <p className="flex-1 text-sm leading-relaxed text-muted">{quote}</p>
    <footer className="mt-6 flex items-center gap-3">
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt={avatarAlt || name}
          className="h-10 w-10 rounded-full object-cover"
          loading="lazy"
        />
      )}
      <div>
        {linkUrl ? (
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-front hover:text-lead transition-colors"
          >
            {name}
          </a>
        ) : (
          <span className="text-sm font-semibold text-front">{name}</span>
        )}
        {company && (
          <span className="block text-xs text-muted">{company}</span>
        )}
      </div>
    </footer>
  </blockquote>
)

export default TestimonialCard
