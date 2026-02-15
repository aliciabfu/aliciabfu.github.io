import { graphql } from "gatsby"

export const query = graphql`
  fragment EducationCertificationsFragment on EducationCertificationsYaml {
    description
    institution
    image {
      childImageSharp {
        gatsbyImageData(width: 150, quality: 85)
      }
    }
    name
    period
    url
    urlName
  }
`
