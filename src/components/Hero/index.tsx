import { useState, useEffect } from 'react'

import HeroBaby from 'components/HeroBaby'
import HeroBoy from 'components/HeroBoy'
import HeroGirl from 'components/HeroGirl'
import ContainerMaster from 'components/ContainerMaster'
import TitleSite, { TitleSiteProps } from 'components/TitleSite'
import NoticeAlert, { NoticeAlertProps } from 'components/NoticeAlert'
import MediaMatch from 'components/MediaMatch'
import SocialBird from 'components/SocialBird'
import ParallaxContentX from 'components/ParallaxContentX'

import * as S from './styles'

export type HeroProps = TitleSiteProps & NoticeAlertProps

const Hero = ({ firstWord, lastWord, icon, title, slug }: HeroProps) => {
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
            <ParallaxContentX speedLayer={1}>
              <TitleSite firstWord={firstWord} lastWord={lastWord} />
            </ParallaxContentX>
          </S.Title>

          <S.Notice>
            <NoticeAlert icon={icon} title={title} slug={slug} />
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
