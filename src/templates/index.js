import { graphql } from "gatsby"
import React from "react"
import Navbar from "../components/navbar/navbar"
import Hero from "../components/hero/hero"
import Services from "../components/services/services"
import AboutSection from "../components/about-section/about-section"
import TestimonialsSection from "../components/testimonials-section/testimonials-section"
import Certifications from "../components/certifications/certifications"
import ContactSection from "../components/contact-section/contact-section"
import Footer from "../components/footer/footer"
import "../styles/style.css"

const IndexPage = ({ data }) => {
  const { profile, services, social, testimonials, educationCertifications, site } = data
  const hasTestimonials = testimonials.nodes.length > 0

  return (
    <>
      <Navbar
        name={profile.name}
        profession={profile.profession}
        ctaText={profile.cta_text}
        ctaUrl={profile.cta_url}
        hasTestimonials={hasTestimonials}
      />

      <Hero
        headline={profile.headline}
        subheadline={profile.subheadline}
        ctaText={profile.cta_text}
        ctaUrl={profile.cta_url}
      />

      <Services services={services.nodes} />

      <AboutSection
        about={profile.about}
        skills={profile.skills}
      />

      <TestimonialsSection testimonials={testimonials.nodes} />

      <Certifications certifications={educationCertifications.nodes} />

      <ContactSection formspreeEndpoint={site.siteMetadata.formspreeEndpoint} />

      <Footer
        name={profile.name}
        tagline={profile.tagline}
        social={social.nodes}
        hasTestimonials={hasTestimonials}
      />
    </>
  )
}

export default IndexPage

export const Head = ({ data }) => {
  const { site } = data
  const { title, description, keywords, siteUrl, author, locale } = site.siteMetadata

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: author,
    description,
    url: siteUrl,
  }

  return (
    <>
      <html lang={locale} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        keywords
        siteUrl
        author
        locale
        formspreeEndpoint
      }
    }
    profile: profileYaml {
      ...ProfileFragment
    }
    services: allServicesYaml {
      nodes {
        ...ServiceFragment
      }
    }
    testimonials: allTestimonialsYaml {
      nodes {
        ...TestimonialsFragment
      }
    }
    social: allSocialYaml(filter: { url: { ne: null } }) {
      nodes {
        ...SocialFragment
      }
    }
    educationCertifications: allEducationCertificationsYaml {
      nodes {
        ...EducationCertificationsFragment
      }
    }
  }
`
