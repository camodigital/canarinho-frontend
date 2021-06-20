import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Buttons = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.s12};

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const Button = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.s6};

    &:last-child {
      margin: 0;
    }
  `}
`

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
