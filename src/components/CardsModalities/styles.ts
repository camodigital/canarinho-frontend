import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Cards = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: ${theme.spacings.s6};
  `}
`

export const Card = styled.div``
