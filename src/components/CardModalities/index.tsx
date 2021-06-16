import useTranslation from 'next-translate/useTranslation'

import TextSmall from 'components/TextSmall'
import TitleItem, { TitleItemProps } from 'components/TitleItem'
import { toneProps } from 'types/tone'
import TextLimited from 'components/TextLimited'
import ButtonIcon from 'components/ButtonIcon'
import MediaMatch from 'components/MediaMatch'
import ActiveLink from 'components/ActiveLink'

import * as S from './styles'

export type CardModalitiesProps = toneProps &
  TitleItemProps & {
    icon: string
    subtitle: string
    text: string
    link: string
  }

const CardModalities = ({
  tone,
  icon,
  title,
  subtitle,
  text,
  link
}: CardModalitiesProps) => {
  const { t } = useTranslation('common')

  return (
    <S.Wrapper>
      <S.Icon tone={tone}>
        <ActiveLink href={`/modalidades/${link}`}>
          <a>
            <img src={icon} alt={title} />
          </a>
        </ActiveLink>
      </S.Icon>

      <S.Title>
        <ActiveLink href={`/modalidades/${link}`}>
          <a>
            <TitleItem title={title} tone={tone} />
          </a>
        </ActiveLink>
      </S.Title>

      <MediaMatch method="greaterThan" medias="desk">
        <S.Subtitle>
          <TextSmall text={subtitle} />
        </S.Subtitle>
      </MediaMatch>

      <MediaMatch method="greaterThan" medias="desk">
        <S.Text>
          <TextLimited text={text} limit={174} />
        </S.Text>
      </MediaMatch>

      <MediaMatch method="greaterThan" medias="desk">
        <S.ButtonGroup>
          <S.ButtonText>{t('buttons.moreInfo')}</S.ButtonText>

          <S.ButtonIcon>
            <ButtonIcon
              tone={tone}
              manner="internal"
              link={`/modalidades/${link}`}
              size="medium"
              icon="arrowRight"
            />
          </S.ButtonIcon>
        </S.ButtonGroup>
      </MediaMatch>
    </S.Wrapper>
  )
}

export default CardModalities
