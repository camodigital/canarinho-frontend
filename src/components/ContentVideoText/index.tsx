import useTranslation from 'next-translate/useTranslation'

import ButtonText from 'components/ButtonText'
import TextLimited from 'components/TextLimited'
import TitleSection from 'components/TitleSection'
import ButtonVideo from 'components/ButtonVideo'

import * as S from './styles'

export type ContentVideoTextProps = {
  InstitutionalTitle: string
  InstitutionalSubtitle: string
  InstitutionalText: string
  InstitutionalLink: string
}

const ContentVideoText = ({
  InstitutionalTitle,
  InstitutionalSubtitle,
  InstitutionalText,
  InstitutionalLink
}: ContentVideoTextProps) => {
  const { t } = useTranslation('common')

  return (
    <S.Wrapper>
      <S.Content>
        <S.ContentHeader>
          <TitleSection
            tone="primary"
            title={InstitutionalTitle}
            dark={false}
            withSubtitle={true}
            subtitle={InstitutionalSubtitle}
          />
        </S.ContentHeader>

        <S.ContentText>
          <TextLimited text={InstitutionalText} limit={600} />
        </S.ContentText>

        <S.ContentButton>
          <ButtonText
            manner="internal"
            link={InstitutionalLink}
            tone="primary"
            name={t('buttons.about')}
          />
        </S.ContentButton>
      </S.Content>

      <S.Video>
        <S.VideoButton>
          <ButtonVideo />
        </S.VideoButton>
      </S.Video>
    </S.Wrapper>
  )
}

export default ContentVideoText
