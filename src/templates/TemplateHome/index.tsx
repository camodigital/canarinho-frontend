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
import TitleSection from 'components/TitleSection'
import TourVirtual, { TourVirtualProps } from 'components/TourVirtual'
import SliderTestimonial, {
  SliderTestimonialProps
} from 'components/SliderTestimonial'
import TabRight from 'components/TabRight'
import PhotosInsta from 'components/PhotosInsta'

import * as S from './styles'
import TemplateFooter from 'templates/TemplateFooter'

export type HomeProps = TourVirtualProps &
  SliderTestimonialProps &
  CardsModalitiesProps &
  ContentVideoTextProps & {
    siteNameFirst: string
    siteNameLast: string
    noticeAlertIcon: string
    noticeAlertTitle: string
    noticeAlertSlug: string
    OperationItems: { title: string; text: string; slug: string }[]
  }

const TemplateHome = (props: HomeProps) => {
  const { t } = useTranslation('home')

  return (
    <S.Wrapper>
      <S.HeaderPage>
        <TemplateHeader pageTitle={t('pageTitle')} pageDesc={t('pageDesc')} />
      </S.HeaderPage>

      <S.ContentPage>
        <S.SectionHero>
          <Hero
            firstWord={props.siteNameFirst}
            lastWord={props.siteNameLast}
            icon={props.noticeAlertIcon}
            title={props.noticeAlertTitle}
            slug={props.noticeAlertSlug}
          />
        </S.SectionHero>

        <S.BlockBallTop>
          <S.SectionModalities>
            <ContainerMaster size="small">
              <CardsModalities cardsModalities={props.cardsModalities} />
            </ContainerMaster>
          </S.SectionModalities>

          <S.SectionAbout>
            <ContainerMaster size="small">
              <ContentVideoText
                InstitutionalTitle={props.InstitutionalTitle}
                InstitutionalSubtitle={props.InstitutionalSubtitle}
                InstitutionalText={props.InstitutionalText}
                InstitutionalLink={props.InstitutionalLink}
              />
            </ContainerMaster>
          </S.SectionAbout>

          <S.SectionTour>
            <ContainerMaster size="small">
              <S.Header>
                <TitleSection
                  tone="tertiary"
                  withSubtitle={true}
                  dark={false}
                  title={t('tour.title')}
                  subtitle={t('tour.subtitle')!}
                />
              </S.Header>

              <S.Content>
                <TourVirtual
                  southWingTour={props.southWingTour}
                  northWingTour={props.northWingTour}
                />
              </S.Content>
            </ContainerMaster>
          </S.SectionTour>
        </S.BlockBallTop>

        <S.Section>
          <S.Header>
            <TitleSection
              tone="secondary"
              withSubtitle={true}
              dark={true}
              title={t('testimonial.title')}
              subtitle={t('testimonial.subtitle')!}
            />
          </S.Header>

          <S.Content>
            <SliderTestimonial testimonials={props.testimonials} />
          </S.Content>
        </S.Section>

        <S.BlockBallBottom>
          <S.Section>
            <ContainerMaster size="small">
              <S.Header>
                <TitleSection
                  tone="tertiary"
                  withSubtitle={true}
                  dark={false}
                  title={t('operation.title')}
                  subtitle={t('operation.subtitle')!}
                />
              </S.Header>

              <S.Content>
                <TabRight items={props.OperationItems} />
              </S.Content>
            </ContainerMaster>
          </S.Section>

          <S.Section>
            <ContainerMaster size="small">
              <PhotosInsta />
            </ContainerMaster>
          </S.Section>
        </S.BlockBallBottom>
      </S.ContentPage>

      <S.FooterPage>
        <TemplateFooter />
      </S.FooterPage>
    </S.Wrapper>
  )
}

export default TemplateHome
