import ButtonLanguage from 'components/ButtonLanguage'
import ButtonText from 'components/ButtonText'
import MenuLink from 'components/MenuLink'
import SocialIcons from 'components/SocialIcons'
import { MenuProps } from 'types/menu'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

const MenuNav = ({ menuLinks, menuButtons }: MenuProps) => (
  <S.Wrapper>
    <S.Links>
      {!!menuLinks &&
        menuLinks.map((item, index) => (
          <S.Link key={'MenuNav1' + index}>
            <MenuLink name={item.name} link={item.link} featured={true} />
          </S.Link>
        ))}
    </S.Links>

    <S.Social>
      <SocialIcons />
    </S.Social>

    <MediaMatch method="greaterThan" medias="desk">
      <S.Lang>
        <ButtonLanguage />
      </S.Lang>
    </MediaMatch>

    <S.Buttons>
      {!!menuButtons &&
        menuButtons.map((item, index) => (
          <S.Button key={'MenuNav2' + index}>
            <ButtonText
              name={item.name!}
              link={item.link!}
              tone={item.tone!}
              size="normal"
              manner="external"
            />
          </S.Button>
        ))}
    </S.Buttons>
  </S.Wrapper>
)

export default MenuNav
