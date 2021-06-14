import styled, { css } from 'styled-components'
import { fontS5 } from 'styles/theme/mixins/_fontSize'
import { toneColor } from 'styles/theme/mixins/_tone'

export const Wrapper = styled.div``

export const Text = styled.div`
  ${({ theme }) => css`
    ${fontS5};
    ${toneColor};
    font-family: ${theme.fonts.family.logo};
  `}
`
