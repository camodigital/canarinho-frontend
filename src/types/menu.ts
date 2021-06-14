import { ButtonTextProps } from 'components/ButtonText'
import { MenuLinkProps } from 'components/MenuLink'

export type MenuProps = {
  logoName?: string
  menuTitle?: string
  menuLinks?: MenuLinkProps[]
  menuSuppTitle?: string
  menuSuppLinks?: MenuLinkProps[]
  menuButtons?: ButtonTextProps[]
}
