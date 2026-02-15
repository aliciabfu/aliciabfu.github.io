import { graphql } from "gatsby"

export const query = graphql`
  fragment ServiceFragment on ServicesYaml {
    name
    description
    icon
  }
`
