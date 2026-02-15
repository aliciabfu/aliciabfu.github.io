import { Link } from "gatsby"
import React from "react"
import "../styles/style.css"

const NotFoundPage = () => (
  <div className="flex min-h-screen items-center justify-center text-front">
    <div className="py-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
        Page not found
      </h2>
      <p className="mt-4 text-muted">The requested page doesn&rsquo;t exist.</p>
      <Link to="/" className="mt-8 inline-block text-lead underline hover:opacity-75">
        &laquo; Go back to the site
      </Link>
    </div>
  </div>
)

export default NotFoundPage

export const Head = () => <title>404: Not found</title>
