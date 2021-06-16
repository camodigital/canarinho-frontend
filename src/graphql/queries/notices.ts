import { gql } from '@apollo/client'

export const GET_NOTICES = gql`
  query GetAvisos($locale: String, $limit: Int) {
    colecaoAvisos(locale: $locale, limit: $limit) {
      slug
    }
  }
`

export const GET_NOTICE_BY_SLUG = gql`
  query GetAvisoBySlug($locale: String, $slug: String) {
    colecaoAvisos(locale: $locale, where: { slug: $slug }) {
      Title
    }
  }
`
