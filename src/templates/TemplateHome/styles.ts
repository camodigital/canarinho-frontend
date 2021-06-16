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

export const Block = styled.div``

export const Section = styled.section``
