import useTranslation from 'next-translate/useTranslation'
import dynamic from 'next/dynamic'

import ContainerMaster from 'components/ContainerMaster'
import TitleSection from 'components/TitleSection'

const MapNav = dynamic(() => import('components/MapNav'), { ssr: false })

import * as S from './styles'

export type TemplateFooterProps = {
  schoolUnits: {
    Title: string
    Text: string
    Latitude: string
    Longitude: string
  }[]
}

const TemplateFooter = () => {
  const { t } = useTranslation('common')

  return (
    <S.Wrapper>
      <S.Map>
        <S.Header>
          <TitleSection
            tone="tertiary"
            withSubtitle={true}
            dark={false}
            title={t('contactMap.title')}
            subtitle={t('contactMap.subtitle')!}
          />
        </S.Header>

        <S.Content>
          <MapNav />
        </S.Content>
      </S.Map>

      <S.Form>form</S.Form>

      <S.Info>
        <ContainerMaster>
          <S.InfoUnits>units</S.InfoUnits>

          <S.InfoLogo>Canarinho</S.InfoLogo>
        </ContainerMaster>
      </S.Info>

      <S.Copyright>copyright</S.Copyright>
    </S.Wrapper>
  )
}

export default TemplateFooter
