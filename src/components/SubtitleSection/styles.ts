import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.fonts.weight.bold};
  `}
`
