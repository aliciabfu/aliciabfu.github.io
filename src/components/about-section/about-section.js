import React from "react"

const AboutSection = ({ about, skills }) => (
  <section id="about" className="section-padding">
    <div className="mx-auto max-w-5xl">
      <h2 className="mb-4 text-center text-headline font-extrabold">
        <span className="gradient-text">About</span>
      </h2>
      <div className="prose prose-slate mx-auto max-w-4xl text-center text-muted">
        {about.split("\n\n").map((paragraph, i) => (
          <p key={i}>{paragraph.trim()}</p>
        ))}
      </div>

      {skills && skills.length > 0 && (
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-lead/10 px-4 py-1.5 text-sm font-medium text-lead"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

    </div>
  </section>
)

export default AboutSection
