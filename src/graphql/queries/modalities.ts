import { gql } from '@apollo/client'

export const GET_MODALITIES = gql`
  query GetModalidades($locale: String, $limit: Int) {
    colecaoModalidades(locale: $locale, limit: $limit) {
      slug
    }
  }
`

export const GET_MODALITIE_BY_SLUG = gql`
  query GetModalidadeBySlug($locale: String, $slug: String) {
    colecaoModalidades(locale: $locale, where: { slug: $slug }) {
      Title
    }
  }
`
