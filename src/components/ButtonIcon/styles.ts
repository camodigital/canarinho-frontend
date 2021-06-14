import styled, { css } from 'styled-components'
import { boxShadowMD } from 'styles/theme/mixins/_shadows'
import { toneFill, toneFillHover } from 'styles/theme/mixins/_tone'
import { ButtonIconProps } from '.'

export const Wrapper = styled.div<ButtonIconProps>`
  ${({ theme, size }) => css`
    button,
    a {
      width: ${size === 'big' ? '50px' : size === 'medium' ? '40px' : '30px'};
      height: ${size === 'big' ? '50px' : size === 'medium' ? '40px' : '30px'};

      display: block;

      border-radius: ${theme.borders.radius.full};

      cursor: pointer;

      ${boxShadowMD(theme.colors.blackAlpha1)};

      transition: 0.5s;

      svg {
        #lines {
          fill: ${theme.colors.white};
        }
        #icon {
          fill: ${theme.colors.white};
        }
        #bg {
          ${toneFill};

          transition: 0.5s;
        }
      }

      &:hover {
        ${boxShadowMD(theme.colors.blackAlpha1)};

        svg {
          #bg {
            ${toneFillHover};
          }
        }
      }
    }
  `}
`
