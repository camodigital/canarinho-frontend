import useTranslation from 'next-translate/useTranslation'

import MenuMaster from 'components/MenuMaster'
import Head from 'next/head'

import * as S from './styles'

export type TemplateHeaderProps = {
  pageTitle: string
  pageDesc: string
}

const TemplateHeader = ({ pageTitle, pageDesc }: TemplateHeaderProps) => {
  const { t } = useTranslation('menu')

  return (
    <S.Wrapper>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
      </Head>

      <S.Menu>
        <MenuMaster
          logoName={t('logo')}
          logoTone="secondary"
          menuTitle={t('menuTitle')}
          menuLinks={t('menuLinks', {}, { returnObjects: true })}
          menuButtons={t('menuButtons', {}, { returnObjects: true })}
          menuSuppTitle={t('menuSuppTitle')}
          menuSuppLinks={t('menuSuppLinks', {}, { returnObjects: true })}
        />
      </S.Menu>
    </S.Wrapper>
  )
}

export default TemplateHeader
