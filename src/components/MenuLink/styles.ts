import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Content = styled.div`
  ${({ theme }) => css`
    a {
      text-decoration: none;
    }

    &.featured {
      font-family: ${theme.fonts.family.featured};
      letter-spacing: ${theme.fonts.letterSpacings.wider};
    }

    &.normal {
      letter-spacing: ${theme.fonts.letterSpacings.wider};

      a {
        color: ${theme.colors.gray.s500};

        &:hover {
          color: ${theme.colors.secondary.s500};
        }
      }
    }
  `}
`
