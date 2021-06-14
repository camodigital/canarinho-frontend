import { useState, useEffect } from 'react'

import ButtonLanguage from 'components/ButtonLanguage'
import LogoCanarinho from 'components/LogoCanarinho'
import { MenuProps } from 'types/menu'
import SliderBase, { SliderSettings } from 'components/SliderBase'

import * as S from './styles'
import MenuNav from 'components/MenuNav'
import MenuSuppNav from 'components/MenuSuppNav'
import IconOpenMenu from 'components/Icons/IconOpenMenu'
import IconCloseMenu from 'components/Icons/IconCloseMenu'

const MenuMob = ({
  logoName,
  menuTitle,
  menuLinks,
  menuSuppTitle,
  menuSuppLinks,
  menuButtons
}: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handlderIsOpen = () => {
    setIsOpen(() => !isOpen)
  }

  useEffect(() => {
    if (isOpen) document.body.classList.add('overlayOn')
    else document.body.classList.remove('overlayOn')
  }, [isOpen])

  const titleMenus = [{ title: menuTitle }, { title: menuSuppTitle }]

  const settings: SliderSettings = {
    arrows: false,
    dots: true,
    // eslint-disable-next-line react/display-name
    customPaging: (i) => <div>{!!titleMenus && titleMenus[i].title}</div>
  }

  return (
    <S.Wrapper>
      <S.Logo>
        <LogoCanarinho compact={true} name={logoName!} />
      </S.Logo>

      <S.Lang>
        <ButtonLanguage />
      </S.Lang>

      <S.Nav>
        <S.NavButton onClick={handlderIsOpen}>
          {!isOpen ? <IconOpenMenu /> : <IconCloseMenu />}
        </S.NavButton>

        <S.NavContentOverlay
          onClick={handlderIsOpen}
          className={isOpen ? 'isOpen' : 'isClose'}
        />

        <S.NavContent className={isOpen ? 'isOpen' : 'isClose'}>
          <SliderBase settings={settings}>
            <S.Slide>
              <MenuNav menuLinks={menuLinks!} menuButtons={menuButtons!} />
            </S.Slide>

            <S.Slide>
              <MenuSuppNav menuSuppLinks={menuSuppLinks!} />
            </S.Slide>
          </SliderBase>
        </S.NavContent>
      </S.Nav>
    </S.Wrapper>
  )
}

export default MenuMob
