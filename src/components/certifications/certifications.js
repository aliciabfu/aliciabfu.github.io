import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const CertBadge = ({ cert }) => {
  const content = (
    <>
      {cert.image && cert.image.childImageSharp && (
        <div className="mb-3 w-24">
          <GatsbyImage
            image={cert.image.childImageSharp.gatsbyImageData}
            alt={cert.name}
          />
        </div>
      )}
      <span className="text-xs font-medium text-muted">{cert.name}</span>
    </>
  )

  if (cert.url) {
    return (
      <a
        href={cert.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-center transition-opacity hover:opacity-75"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="flex flex-col items-center text-center">{content}</div>
  )
}

const Certifications = ({ certifications }) => {
  if (!certifications || certifications.length === 0) return null

  return (
    <section id="certifications" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-headline font-extrabold">
          <span className="gradient-text">Certifications</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted">
          Industry-recognized certifications and credentials.
        </p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {certifications.map((cert, i) => (
            <CertBadge key={`${cert.name}_${i}`} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
