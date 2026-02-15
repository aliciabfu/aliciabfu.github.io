import { graphql } from "gatsby"

export const query = graphql`
  fragment SocialFragment on SocialYaml {
    name
    url
  }
`
