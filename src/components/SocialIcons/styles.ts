import styled, { css } from 'styled-components'
import { toneFill, toneFillHover } from 'styles/theme/mixins/_tone'
import { SocialIconsProps } from '.'

export const Wrapper = styled.div`
  display: inline-block;
`

export const Items = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Item = styled.li<SocialIconsProps>`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.s2};

    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }

    svg {
      width: 30px;
      height: 30px;

      ${toneFill};

      transition: 0.5s;
    }

    &:hover {
      svg {
        ${toneFillHover};
      }
    }
  `}
`
