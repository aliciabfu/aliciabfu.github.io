import { graphql } from "gatsby"

export const query = graphql`
  fragment ProfileFragment on ProfileYaml {
    name
    profession
    tagline
    headline
    subheadline
    company
    founder
    founder_title
    cta_text
    cta_url
    image {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 85)
      }
      publicURL
    }
    location
    about
    skills
  }
`
