import IconBgLogo from 'components/Icons/IconBgLogo'
import IconBgLogotype from 'components/Icons/IconBgLogotype'
import IconLogoCanarinho from 'components/Icons/IconLogoCanarinho'
import { toneProps } from 'types/tone'

import * as S from './styles'

export type logoMasterProps = toneProps & {
  name: string
  compact?: boolean
}

const LogoMaster = ({
  name,
  compact = false,
  tone = 'secondary'
}: logoMasterProps) => (
  <S.Wrapper compact={compact} tone={tone}>
    <S.Logo>
      <S.LogoContent>
        <IconLogoCanarinho />
      </S.LogoContent>

      <S.LogoBg>
        <IconBgLogo />
      </S.LogoBg>
    </S.Logo>

    <S.Type>
      <S.TypeContent compact={compact} tone={tone}>
        {name}
      </S.TypeContent>

      <S.TypeBg>
        <IconBgLogotype />
      </S.TypeBg>
    </S.Type>
  </S.Wrapper>
)

export default LogoMaster
