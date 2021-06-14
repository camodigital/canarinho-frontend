import * as S from './styles'

import IconCanarinhoSocial from 'components/Icons/IconCanarinhoSocial'
import IconSocial from 'components/Icons/IconSocial'
import IconFacebook from 'components/Icons/IconFacebook'
import IconIntagram from 'components/Icons/IconInstagram'
import IconYoutube from 'components/Icons/IconYoutube'

const SocialBird = () => (
  <S.Wrapper>
    <S.Container>
      <S.Bird>
        <S.BirdIcon>
          <IconCanarinhoSocial />
        </S.BirdIcon>

        <S.BirdSocial>
          <IconSocial />
        </S.BirdSocial>
      </S.Bird>
      <S.Icons>
        <S.Items>
          <S.Item aria-label="Facebook Escola canarinho">
            <a href="https://www.facebook.com/escolacanarinhobrasilia?ref=ts&fref=ts">
              <IconFacebook />
            </a>
          </S.Item>

          <S.Item aria-label="Instagram Escola canarinho">
            <a href="https://www.instagram.com/escolacanarinhodf/">
              <IconIntagram />
            </a>
          </S.Item>

          <S.Item aria-label="Youtube Escola canarinho">
            <a href="https://www.youtube.com/channel/UCv009ekfdGNgWWyeLsntxNQ">
              <IconYoutube />
            </a>
          </S.Item>
        </S.Items>
      </S.Icons>
    </S.Container>
  </S.Wrapper>
)

export default SocialBird
