import { useRouter } from 'next/router'

import ActiveLink from 'components/ActiveLink'

import * as S from './styles'

const TemplateHeader = () => {
  const router = useRouter()
  const { locale } = router

  return (
    <S.Wrapper>
      <S.Links>
        <S.Link>
          <ActiveLink href="/">
            <a>Home</a>
          </ActiveLink>
        </S.Link>

        <S.Link>
          <ActiveLink href="/modalidades">
            <a>Modalidades</a>
          </ActiveLink>
        </S.Link>

        <S.Link>
          <ActiveLink href="/avisos">
            <a>Avisos Gerais</a>
          </ActiveLink>
        </S.Link>

        <S.Link>
          <ActiveLink href="/calendario">
            <a>Calendário</a>
          </ActiveLink>
        </S.Link>

        <S.Link>
          <ActiveLink href="/cardapio">
            <a>Cardápio</a>
          </ActiveLink>
        </S.Link>

        <S.Link>
          <ActiveLink href="/funcionamento">
            <a>Como funciona</a>
          </ActiveLink>
        </S.Link>

        <S.Link>
          <ActiveLink href="/institucional">
            <a>Institucional</a>
          </ActiveLink>
        </S.Link>

        <S.Link>
          <ActiveLink href="/modalidades">
            <a>Modalidades</a>
          </ActiveLink>
        </S.Link>

        <S.Link>
          <S.Lang>{locale}</S.Lang>
        </S.Link>

        <S.Link>
          <ActiveLink href="/" locale="pt-BR">
            <a>PT</a>
          </ActiveLink>
        </S.Link>

        <S.Link>
          <ActiveLink href="/" locale="en">
            <a>EN</a>
          </ActiveLink>
        </S.Link>
      </S.Links>
    </S.Wrapper>
  )
}

export default TemplateHeader
