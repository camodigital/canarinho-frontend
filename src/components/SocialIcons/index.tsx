import * as S from './styles'

import IconFacebook from 'components/Icons/IconFacebook'
import IconIntagram from 'components/Icons/IconInstagram'
import IconYoutube from 'components/Icons/IconYoutube'
import { toneProps } from 'types/tone'

export type SocialIconsProps = toneProps

const SocialIcons = ({ tone = 'secondary' }: SocialIconsProps) => (
  <S.Wrapper>
    <S.Items>
      <S.Item aria-label="Facebook Escola canarinho" tone={tone}>
        <a href="https://www.facebook.com/escolacanarinhobrasilia?ref=ts&fref=ts">
          <IconFacebook />
        </a>
      </S.Item>

      <S.Item aria-label="Instagram Escola canarinho" tone={tone}>
        <a href="https://www.instagram.com/escolacanarinhodf/">
          <IconIntagram />
        </a>
      </S.Item>

      <S.Item aria-label="Youtube Escola canarinho" tone={tone}>
        <a href="https://www.youtube.com/channel/UCv009ekfdGNgWWyeLsntxNQ">
          <IconYoutube />
        </a>
      </S.Item>
    </S.Items>
  </S.Wrapper>
)

export default SocialIcons
