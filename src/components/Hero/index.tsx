import { useState, useEffect } from 'react'

import HeroBaby from 'components/HeroBaby'
import HeroBoy from 'components/HeroBoy'
import HeroGirl from 'components/HeroGirl'

import * as S from './styles'
import ContainerMaster from 'components/ContainerMaster'
import TitleSite from 'components/TitleSite'
import NoticeAlert from 'components/NoticeAlert'
import MediaMatch from 'components/MediaMatch'
import SocialBird from 'components/SocialBird'

const Hero = () => {
  const [currentHero, setCurrentHero] = useState(1)

  useEffect(() => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    setCurrentHero(rndInt)
  }, [currentHero])

  return (
    <S.Wrapper>
      <S.BG>
        {currentHero === 1 ? (
          <HeroGirl />
        ) : currentHero === 2 ? (
          <HeroBoy />
        ) : currentHero === 3 ? (
          <HeroBaby />
        ) : (
          <HeroGirl />
        )}
      </S.BG>

      <S.Content>
        <ContainerMaster>
          <S.Title>
            <TitleSite />
          </S.Title>

          <S.Notice>
            <NoticeAlert />
          </S.Notice>

          <MediaMatch method="greaterThan" medias="desk">
            <S.Social>
              <SocialBird />
            </S.Social>
          </MediaMatch>
        </ContainerMaster>
      </S.Content>
    </S.Wrapper>
  )
}

export default Hero
