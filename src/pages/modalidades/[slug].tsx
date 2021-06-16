import { GetModalidadeBySlugVariables } from 'graphql/generated/GetModalidadeBySlug'
import {
  GetModalidades,
  GetModalidadesVariables
} from 'graphql/generated/GetModalidades'
import {
  GET_MODALITIES,
  GET_MODALITIE_BY_SLUG
} from 'graphql/queries/modalities'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import { initializeApollo } from 'utils/apollo'

const apolloClient = initializeApollo()

export type PostProps = {
  title: string
}

export default function Post({ title }: PostProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export async function getStaticPaths({ locale }: GetStaticPropsContext) {
  type ModalidadesTypes = GetModalidades &
    GetModalidadeBySlugVariables &
    GetModalidadesVariables

  const { data } = await apolloClient.query<ModalidadesTypes>({
    query: GET_MODALITIES,
    variables: {
      locale: locale,
      limit: 10
    }
  })

  const paths = await data.colecaoModalidades.map(({ slug }) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { data } = await apolloClient.query({
    query: GET_MODALITIE_BY_SLUG,
    variables: {
      locale: locale,
      slug: `${params?.slug}`
    }
  })

  if (!data) return { notFound: true }

  const notice = data.colecaoModalidades[0]

  return {
    props: {
      title: notice.Title
    }
  }
}
