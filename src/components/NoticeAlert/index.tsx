import ActiveLink from 'components/ActiveLink'
import TextLimited from 'components/TextLimited'
import * as S from './styles'

const NoticeAlert = () => (
  <S.Wrapper aria-label="Aviso Geral">
    <ActiveLink href="/">
      <a>
        <S.Icon>
          <img src="images/iconNoticeAlert.svg" />
        </S.Icon>

        <S.Text>
          <TextLimited text="cuidados com covid-19" limit={24} />
        </S.Text>
      </a>
    </ActiveLink>
  </S.Wrapper>
)

export default NoticeAlert
