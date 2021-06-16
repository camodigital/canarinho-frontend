import useTranslation from 'next-translate/useTranslation'

import Hero from 'components/Hero'
import TemplateHeader from 'templates/TemplateHeader'

import * as S from './styles'
import CardsModalities, {
  CardsModalitiesProps
} from 'components/CardsModalities'
import ContainerMaster from 'components/ContainerMaster'

export type HomeProps = CardsModalitiesProps & {
  siteNameFirst: string
  siteNameLast: string
  noticeAlertIcon: string
  noticeAlertTitle: string
  noticeAlertSlug: string
}

const TemplateHome = (props: HomeProps) => {
  const { t } = useTranslation('home')

  return (
    <S.Wrapper>
      <S.Header>
        <TemplateHeader pageTitle={t('pageTitle')} pageDesc={t('pageDesc')} />
      </S.Header>

      <S.Content>
        <S.Section>
          <Hero
            firstWord={props.siteNameFirst}
            lastWord={props.siteNameLast}
            icon={props.noticeAlertIcon}
            title={props.noticeAlertTitle}
            slug={props.noticeAlertSlug}
          />
        </S.Section>

        <S.Block>
          <S.Section>
            <ContainerMaster>
              <CardsModalities cardsModalities={props.cardsModalities} />
            </ContainerMaster>
          </S.Section>

          <S.Section>institutional</S.Section>

          <S.Section>tour</S.Section>
        </S.Block>

        <S.Section>testimonial</S.Section>

        <S.Block>
          <S.Section>operation</S.Section>

          <S.Section>photos</S.Section>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default TemplateHome
