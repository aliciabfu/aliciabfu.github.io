import React from "react"
import SocialIcon from "./social-icon"

const SocialLinks = ({ social }) => {
  return (
    <div className="flex gap-3">
      {social.map(({ name, url }) => (
        <a
          key={name}
          aria-label={name}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-back/10 text-back/70 transition-colors hover:bg-back/20 hover:text-back"
          href={url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <SocialIcon name={name} className="h-4 w-4" />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
