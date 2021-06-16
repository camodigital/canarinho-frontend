import styled, { css } from 'styled-components'
import { logoMasterProps } from '.'

type WrapperProps = Pick<logoMasterProps, 'compact' | 'tone'>

const wrapperModifiers = {
  compactOn: () => css`
    ${Logo} {
      display: none;
    }

    ${TypeContent} {
      font-size: 1.6rem;
    }

    ${TypeBg} {
      display: none;
    }
  `,

  compactOff: () => css`
    max-width: 160px;

    ${LogoContent} {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
    }

    ${Type} {
      top: -2rem;
    }

    ${TypeContent} {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      top: -5px;
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ compact }) => css`
    ${compact && wrapperModifiers.compactOn()}
    ${!compact && wrapperModifiers.compactOff()}
  `}
`

export const Logo = styled.div`
  ${({ theme }) => css`
    position: relative;

    svg {
      .yellow {
        fill: ${theme.colors.primary.s500};
        stroke: ${theme.colors.secondary.s600};
      }
      .blue {
        fill: ${theme.colors.secondary.s900};
        stroke: ${theme.colors.secondary.s600};
      }
    }
  `}
`

export const LogoContent = styled.div``

export const LogoBg = styled.div`
  ${({ theme }) => css`
    svg {
      fill: ${theme.colors.white};
    }
  `}
`

export const Type = styled.div`
  position: relative;
`

export const TypeContent = styled.div<WrapperProps>`
  ${({ theme, tone }) => css`
    font-family: ${theme.fonts.family.logo};
    color: ${theme.colors[tone][`s500`]};
  `}
`

export const TypeBg = styled.div`
  ${({ theme }) => css`
    svg {
      fill: ${theme.colors.white};
    }
  `}
`
