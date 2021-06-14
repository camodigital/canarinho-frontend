import MediaMatch from 'components/MediaMatch'
import MenuDesk from 'components/MenuDesk'
import MenuMob from 'components/MenuMob'
import { MenuProps } from 'types/menu'

import * as S from './styles'

const MenuMaster = (props: MenuProps) => (
  <S.Wrapper>
    <MediaMatch method="lessThan" medias="desk">
      <MenuMob {...props} />
    </MediaMatch>

    <MediaMatch method="greaterThan" medias="desk">
      <MenuDesk {...props} />
    </MediaMatch>
  </S.Wrapper>
)

export default MenuMaster
