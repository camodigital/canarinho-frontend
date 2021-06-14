import { gql } from '@apollo/client'

import { initializeApollo } from 'utils/apollo'

import TemplateHome from 'templates/TemplateHome'
import { GetStaticPropsContext } from 'next'

const GET_HOME = gql`
  query GET_HOME($locale: String) {
    paginaHome(locale: $locale) {
      Title {
        Title
        Subtitle
      }
    }
  }
`

type HomeProps = {
  title: string
}

export default function Home({ title }: HomeProps) {
  return (
    <>
      <TemplateHome />

      {title}
    </>
  )
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: GET_HOME,
    variables: {
      locale: locale
    }
  })

  return {
    props: {
      revalidate: 300,
      data: data,
      initialApolloState: apolloClient.cache.extract(),
      title: data.paginaHome.Title.Title
    }
  }
}
