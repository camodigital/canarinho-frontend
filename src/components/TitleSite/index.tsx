import * as S from './styles'

import IconBgBallon from 'components/Icons/IconBgBallon'

export type TitleSiteProps = {
  firstWord: string
  lastWord: string
}

const TitleSite = ({ firstWord, lastWord }: TitleSiteProps) => (
  <S.Wrapper>
    <S.School>
      <S.SchoolText>{firstWord}</S.SchoolText>
      <S.SchoolBg>
        <IconBgBallon />
      </S.SchoolBg>
    </S.School>
    <S.Canarinho>{lastWord}</S.Canarinho>
  </S.Wrapper>
)

export default TitleSite
