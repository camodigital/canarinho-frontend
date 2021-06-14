import ActiveLink from 'components/ActiveLink'
import * as S from './styles'

export type MenuLinkProps = {
  name: string
  link: string
  featured: boolean
}

const MenuLink = ({ name, link, featured }: MenuLinkProps) => (
  <S.Wrapper className="menuLink">
    <S.Content className={featured ? 'featured' : 'normal'}>
      <ActiveLink href={link}>
        <a>{name}</a>
      </ActiveLink>
    </S.Content>
  </S.Wrapper>
)

export default MenuLink
