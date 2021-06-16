import { useState, useEffect } from 'react'

import ButtonLanguage from 'components/ButtonLanguage'
import { MenuMasterProps } from 'types/menu'
import SliderBase, { SliderSettings } from 'components/SliderBase'
import MenuNav from 'components/MenuNav'
import MenuSuppNav from 'components/MenuSuppNav'
import IconOpenMenu from 'components/Icons/IconOpenMenu'
import IconCloseMenu from 'components/Icons/IconCloseMenu'
import LogoMaster from 'components/LogoMaster'

import * as S from './styles'

const MenuMob = ({
  logoName,
  logoTone,
  menuTitle,
  menuLinks,
  menuSuppTitle,
  menuSuppLinks,
  menuButtons
}: MenuMasterProps) => {
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
        <LogoMaster compact={true} name={logoName} tone={logoTone} />
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
              <MenuNav
                menuTitle={menuTitle}
                menuLinks={menuLinks}
                menuButtons={menuButtons}
              />
            </S.Slide>

            <S.Slide>
              <MenuSuppNav
                menuSuppTitle={menuSuppTitle}
                menuSuppLinks={menuSuppLinks}
              />
            </S.Slide>
          </SliderBase>
        </S.NavContent>
      </S.Nav>
    </S.Wrapper>
  )
}

export default MenuMob
