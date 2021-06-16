import { ButtonTextProps } from 'components/ButtonText'
import { MenuLinkProps } from 'components/MenuLink'

export type MenuMasterProps = MenuLogoProps & MenuProps & MenuSuppProps

export type MenuLogoProps = {
  logoName: string
  logoTone: 'primary' | 'secondary' | 'tertiary'
}

export type MenuProps = {
  menuTitle: string
  menuLinks: MenuLinkProps[]
  menuButtons: ButtonTextProps[]
}

export type MenuSuppProps = {
  menuSuppTitle: string
  menuSuppLinks: MenuLinkProps[]
}
