import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    overflow: hidden;

    background-color: ${theme.colors.primary.s500};
  `}
`

export const HeaderPage = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.layers.menu};
  `}
`

export const FooterPage = styled.div``

export const ContentPage = styled.div``

export const BlockBallTop = styled.div``

export const BlockBallBottom = styled.div``

export const Section = styled.section`
  position: relative;
`

export const Header = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.s6} 0;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.s6} 0;
  `}
`

export const SectionHero = styled(Section)``

export const SectionModalities = styled(Section)``

export const SectionAbout = styled(Section)``

export const SectionTour = styled(Section)``
