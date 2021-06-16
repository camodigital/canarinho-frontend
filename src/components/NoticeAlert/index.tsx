import ActiveLink from 'components/ActiveLink'
import TextLimited from 'components/TextLimited'

import * as S from './styles'

export type NoticeAlertProps = {
  icon: string
  title: string
  slug: string
}

const NoticeAlert = ({ icon, title, slug }: NoticeAlertProps) => (
  <S.Wrapper aria-label="Aviso Geral">
    <ActiveLink href={`/avisos/${slug}`}>
      <a>
        <S.Icon>
          <img src={icon} />
        </S.Icon>

        <S.Text>
          <TextLimited text={title} limit={24} />
        </S.Text>
      </a>
    </ActiveLink>
  </S.Wrapper>
)

export default NoticeAlert
