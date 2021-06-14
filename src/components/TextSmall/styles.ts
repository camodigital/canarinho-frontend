import styled, { css } from 'styled-components'
import { fontS1 } from 'styles/theme/mixins/_fontSize'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${fontS1};
    font-weight: ${theme.fonts.weight.bold};
    letter-spacing: ${theme.fonts.letterSpacings.wide};
  `}
`
