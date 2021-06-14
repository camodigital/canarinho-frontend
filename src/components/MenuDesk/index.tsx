import { useState, useEffect } from 'react'

import ContainerMaster from 'components/ContainerMaster'
import LogoCanarinho from 'components/LogoCanarinho'
import MenuNav from 'components/MenuNav'
import MenuSuppNav from 'components/MenuSuppNav'
import { MenuProps } from 'types/menu'

import * as S from './styles'
import IconArrowSide from 'components/Icons/IconArrowSide'
import ToneLastWord from 'components/ToneLastWord'

const MenuDesk = ({
  logoName,
  menuLinks,
  menuSuppTitle,
  menuSuppLinks,
  menuButtons
}: MenuProps) => {
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
              <LogoCanarinho
                compact={!scrolling ? true : false}
                name={logoName!}
              />
            </S.LogoContent>
          </S.Logo>

          <S.Nav>
            <MenuNav menuLinks={menuLinks!} menuButtons={menuButtons!} />
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
            <MenuSuppNav menuSuppLinks={menuSuppLinks!} />
          </S.MenuSuppNavContent>
        </S.MenuSuppNav>
      </S.MenuSupp>

      <div style={{ height: '200vh' }}></div>
    </S.Wrapper>
  )
}

export default MenuDesk
