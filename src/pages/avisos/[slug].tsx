import { GetAvisoBySlugVariables } from 'graphql/generated/GetAvisoBySlug'
import { GetAvisos, GetAvisosVariables } from 'graphql/generated/GetAvisos'
import { GET_NOTICES, GET_NOTICE_BY_SLUG } from 'graphql/queries/notices'
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
  type AvisosTypes = GetAvisos & GetAvisoBySlugVariables & GetAvisosVariables

  const { data } = await apolloClient.query<AvisosTypes>({
    query: GET_NOTICES,
    variables: {
      locale: locale,
      limit: 10
    }
  })

  const paths = await data.colecaoAvisos.map(({ slug }) => ({
    params: { slug }
  }))

  console.log(paths)

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { data } = await apolloClient.query({
    query: GET_NOTICE_BY_SLUG,
    variables: {
      locale: locale,
      slug: `${params?.slug}`
    }
  })

  if (!data) return { notFound: true }

  const notice = data.colecaoAvisos[0]

  return {
    props: {
      title: notice.Title
    }
  }
}
