import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    overflow: hidden;

    background-color: ${theme.colors.primary.s500};
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.layers.menu};
  `}
`

export const Content = styled.div``

export const Block = styled.div`
  ${({ theme }) => css`
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;

    position: relative;

    &::before {
      content: '';
      width: 100%;
      height: 110%;
      aspect-ratio: 1/1;

      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);

      border-radius: 300%;

      background-color: ${theme.colors.white};
    }
  `}
`

export const SectionHero = styled.section``

export const Section = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.s12};

    position: relative;
  `}
`
export const SectionTitle = styled.section``
