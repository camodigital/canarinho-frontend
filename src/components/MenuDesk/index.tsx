import { useState, useEffect } from 'react'

import ContainerMaster from 'components/ContainerMaster'
import LogoMaster from 'components/LogoMaster'
import MenuNav from 'components/MenuNav'
import MenuSuppNav from 'components/MenuSuppNav'
import { MenuMasterProps } from 'types/menu'
import IconArrowSide from 'components/Icons/IconArrowSide'
import ToneLastWord from 'components/ToneLastWord'

import * as S from './styles'

const MenuDesk = ({
  logoName,
  logoTone,
  menuTitle,
  menuLinks,
  menuSuppTitle,
  menuSuppLinks,
  menuButtons
}: MenuMasterProps) => {
  const [scrolling, setScrolling] = useState(true)
  const [menuSuppOpen, setMenuSuppOpen] = useState(true)

  useEffect(() => {
    const checkScroll = () => {
      const yOffset = window.pageYOffset

      if (yOffset < 10) {
        setScrolling(true)
        setMenuSuppOpen(true)
      } else {
        setScrolling(false)
        setMenuSuppOpen(false)
      }
    }

    window.addEventListener('scroll', checkScroll)
    return function unMount() {
      window.removeEventListener('scroll', checkScroll)
    }
  }, [])

  const handlerClickSupp = () => {
    setMenuSuppOpen(() => !menuSuppOpen)
  }

  return (
    <S.Wrapper>
      <S.Menu className={!scrolling ? 'scrollOn' : 'scrollOff'}>
        <ContainerMaster>
          <S.Logo>
            <S.LogoContent>
              <LogoMaster
                compact={!scrolling ? true : false}
                name={logoName}
                tone={logoTone}
              />
            </S.LogoContent>
          </S.Logo>

          <S.Nav>
            <MenuNav
              menuTitle={menuTitle}
              menuLinks={menuLinks!}
              menuButtons={menuButtons}
            />
          </S.Nav>
        </ContainerMaster>
      </S.Menu>

      <S.MenuSupp className={menuSuppOpen ? 'isOpen' : 'isClose'}>
        <S.MenuSuppHeader>
          <S.MenuSuppButton onClick={handlerClickSupp}>
            <IconArrowSide />
          </S.MenuSuppButton>

          <S.MenuSuppTitle>
            <ToneLastWord>{menuSuppTitle}</ToneLastWord>
          </S.MenuSuppTitle>
        </S.MenuSuppHeader>

        <S.MenuSuppNav>
          <S.MenuSuppNavContent>
            <MenuSuppNav
              menuSuppTitle={menuSuppTitle}
              menuSuppLinks={menuSuppLinks}
            />
          </S.MenuSuppNavContent>
        </S.MenuSuppNav>
      </S.MenuSupp>
    </S.Wrapper>
  )
}

export default MenuDesk
