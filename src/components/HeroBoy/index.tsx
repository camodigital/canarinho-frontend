import IconBgBoy from 'components/Icons/IconBgBoy'
import IconDog from 'components/Icons/IconDog'
import MediaMatch from 'components/MediaMatch'
import ParallaxContentX from 'components/ParallaxContentX'

import * as S from './styles'

const HeroBoy = () => (
  <S.Wrapper>
    <S.Bg>
      <S.BgContainer>
        <IconBgBoy />
        <S.Noise />
      </S.BgContainer>
    </S.Bg>

    <MediaMatch method="lessThan" medias="desk">
      <S.Persona aria-label="Menino com uniforme da escola canarinho">
        <S.Shadow>
          <img src="images/meninoMobileSombra.webp" alt="Sombra do menino" />
        </S.Shadow>

        <S.Photo>
          <img
            src="images/menino.webp"
            alt="Menino com uniforme da escola canarinho"
          />
        </S.Photo>
      </S.Persona>
    </MediaMatch>

    <MediaMatch method="greaterThan" medias="desk">
      <S.Persona aria-label="Menino com uniforme da escola canarinho">
        <S.Shadow>
          <ParallaxContentX speedLayer={1}>
            <img src="images/meninoSombra.webp" alt="Sombra do menino" />
          </ParallaxContentX>
        </S.Shadow>

        <S.Element>
          <ParallaxContentX speedLayer={3}>
            <IconDog />
          </ParallaxContentX>
        </S.Element>

        <S.Photo>
          <ParallaxContentX speedLayer={5}>
            <img
              src="images/menino.webp"
              alt="Menino com uniforme da escola canarinho"
            />
          </ParallaxContentX>
        </S.Photo>
      </S.Persona>
    </MediaMatch>
  </S.Wrapper>
)

export default HeroBoy
