import { graphql } from "gatsby"

export const query = graphql`
  fragment TestimonialsFragment on TestimonialsYaml {
    avatarAlt
    avatarUrl
    company
    linkUrl
    name
    quote
  }
`
