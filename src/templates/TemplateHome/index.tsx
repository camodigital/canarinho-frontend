import Hero from 'components/Hero'
import useTranslation from 'next-translate/useTranslation'

import TemplateHeader from 'templates/TemplateHeader'

import * as S from './styles'

const TemplateHome = () => {
  const { t } = useTranslation('home')

  return (
    <S.Wrapper>
      <S.Header>
        <TemplateHeader pageTitle={t('pageTitle')} pageDesc={t('pageDesc')} />
      </S.Header>

      <S.Content>
        <S.Section>
          <Hero />
        </S.Section>

        <S.Block>
          <S.Section>cards</S.Section>

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
