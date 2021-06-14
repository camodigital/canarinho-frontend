import styled, { css } from 'styled-components'
import { fontS2 } from 'styles/theme/mixins/_fontSize'
import media from 'styles/theme/mixins/_respondTo'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    a {
      width: 110px;
      height: 110px;
      padding: ${theme.spacings.s4};

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      border-radius: ${theme.borders.radius.full};

      text-decoration: none;

      background-color: ${theme.colors.white};

      ${media.tablet} {
        width: 140px;
        height: 140px;
      }
    }
  `}
`

export const Icon = styled.div`
  margin-bottom: 0.2rem;
  img {
    width: 100%;
  }

  ${media.tablet} {
    margin-bottom: 0.5rem;
  }
`

export const Text = styled.div`
  ${({ theme }) => css`
    ${fontS2};
    text-align: center;
    line-height: ${theme.fonts.lineHeights.tiny};
    font-weight: ${theme.fonts.weight.bold};
  `}
`
