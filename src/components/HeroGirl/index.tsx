import IconBgSpace from 'components/Icons/IconBgSpace'
import IconRocketSpace from 'components/Icons/IconRocketSpace'
import MediaMatch from 'components/MediaMatch'
import ParallaxContentX from 'components/ParallaxContentX'

import * as S from './styles'

const HeroGirl = () => (
  <S.Wrapper>
    <S.Bg>
      <S.BgContainer>
        <IconBgSpace />
        <S.Noise />
      </S.BgContainer>
    </S.Bg>

    <MediaMatch method="lessThan" medias="desk">
      <S.Persona aria-label="Menina com uniforme da escola canarinho">
        <S.Shadow>
          <img src="images/meninaMobileSombra.webp" alt="Sombra do menina" />
        </S.Shadow>

        <S.Photo>
          <img
            src="images/menina.webp"
            alt="Menina com uniforme da escola canarinho"
          />
        </S.Photo>
      </S.Persona>
    </MediaMatch>

    <MediaMatch method="greaterThan" medias="desk">
      <S.Persona aria-label="Menina com uniforme da escola canarinho">
        <S.Shadow>
          <ParallaxContentX speedLayer={1}>
            <img src="images/meninaSombra.webp" alt="Sombra da menina" />
          </ParallaxContentX>
        </S.Shadow>

        <S.Element>
          <ParallaxContentX speedLayer={-3}>
            <IconRocketSpace />
          </ParallaxContentX>
        </S.Element>

        <S.Photo>
          <ParallaxContentX speedLayer={5}>
            <img
              src="images/menina.webp"
              alt="Menina com uniforme da escola canarinho"
            />
          </ParallaxContentX>
        </S.Photo>
      </S.Persona>
    </MediaMatch>
  </S.Wrapper>
)

export default HeroGirl
