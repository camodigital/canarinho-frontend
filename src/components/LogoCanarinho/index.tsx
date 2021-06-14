import * as S from './styles'

import { toneProps } from 'types/tone'

import IconLogoCanarinho from 'components/Icons/IconLogoCanarinho'
import TextLogo from 'components/TextLogo'
import IconBgLogo from 'components/Icons/IconBgLogo'
import IconBgLogotype from 'components/Icons/IconBgLogotype'
import ActiveLink from 'components/ActiveLink'

export type LogoCanarinhoProps = toneProps & {
  compact?: boolean
  name?: string
}

const LogoCanarinho = ({
  compact = true,
  tone = 'secondary',
  name = 'Escola Canarinho'
}: LogoCanarinhoProps) => (
  <S.Wrapper compact={compact}>
    <ActiveLink href="/">
      <a>
        {compact ? (
          <S.Compact>
            <S.CompactLogo>
              <IconLogoCanarinho />
            </S.CompactLogo>

            <S.CompactText>
              <TextLogo tone={tone}>{name}</TextLogo>
            </S.CompactText>
          </S.Compact>
        ) : (
          <S.Normal>
            <S.Logo>
              <S.LogoBg>
                <IconBgLogo />
              </S.LogoBg>

              <S.LogoIcon>
                <IconLogoCanarinho />
              </S.LogoIcon>
            </S.Logo>

            <S.Type>
              <S.TypeBg>
                <IconBgLogotype />
              </S.TypeBg>

              <S.TypeText>
                <TextLogo tone={tone}>{name}</TextLogo>
              </S.TypeText>
            </S.Type>
          </S.Normal>
        )}
      </a>
    </ActiveLink>
  </S.Wrapper>
)

export default LogoCanarinho
