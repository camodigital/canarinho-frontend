import { gql } from '@apollo/client'

export const GET_HOME = gql`
  query GetHome($locale: String) {
    paginaHome(locale: $locale) {
      Title {
        Title
        Subtitle
      }
      Aviso_Home {
        Icon {
          url
        }
        Title
        aviso {
          slug
        }
      }
    }

    colecaoModalidades(locale: $locale) {
      Color
      slug
      Icon {
        url
      }
      Title
      Subtitle
      Text
    }

    paginaInstitucional(locale: $locale) {
      Title {
        Title
        Subtitle
        Text
      }
      Video
      Tour {
        Asa_Sul
        Asa_Norte
      }
    }
  }
`
