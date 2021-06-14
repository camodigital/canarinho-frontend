import MenuLink from 'components/MenuLink'
import { MenuProps } from 'types/menu'

import * as S from './styles'

const MenuSuppNav = ({ menuSuppLinks }: MenuProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Links>
        {!!menuSuppLinks &&
          menuSuppLinks.map((item, index) => (
            <S.Link key={'MenuSuppNav' + index}>
              <MenuLink name={item.name} link={item.link} featured={false} />
            </S.Link>
          ))}
      </S.Links>
    </S.Content>
  </S.Wrapper>
)

export default MenuSuppNav
