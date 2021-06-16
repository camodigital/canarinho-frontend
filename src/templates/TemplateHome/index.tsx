import useTranslation from 'next-translate/useTranslation'

import Hero from 'components/Hero'
import TemplateHeader from 'templates/TemplateHeader'
import CardsModalities, {
  CardsModalitiesProps
} from 'components/CardsModalities'
import ContainerMaster from 'components/ContainerMaster'
import ContentVideoText, {
  ContentVideoTextProps
} from 'components/ContentVideoText'

import * as S from './styles'
import TitleSection from 'components/TitleSection'

export type HomeProps = CardsModalitiesProps &
  ContentVideoTextProps & {
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
        <S.SectionHero>
          <Hero
            firstWord={props.siteNameFirst}
            lastWord={props.siteNameLast}
            icon={props.noticeAlertIcon}
            title={props.noticeAlertTitle}
            slug={props.noticeAlertSlug}
          />
        </S.SectionHero>

        <S.Block>
          <S.Section>
            <ContainerMaster>
              <CardsModalities cardsModalities={props.cardsModalities} />
            </ContainerMaster>
          </S.Section>

          <S.Section>
            <ContainerMaster size="small">
              <ContentVideoText
                InstitutionalTitle={props.InstitutionalTitle}
                InstitutionalSubtitle={props.InstitutionalSubtitle}
                InstitutionalText={props.InstitutionalText}
                InstitutionalLink={props.InstitutionalLink}
              />
            </ContainerMaster>
          </S.Section>

          <S.Section>
            <S.SectionTitle>
              <TitleSection tone="tertiary" /> <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </S.SectionTitle>
          </S.Section>
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
