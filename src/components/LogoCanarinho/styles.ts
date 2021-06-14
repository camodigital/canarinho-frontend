import styled, { css } from 'styled-components'
import { toneColor, toneColorHover } from 'styles/theme/mixins/_tone'
import { LogoCanarinhoProps } from '.'

export const Wrapper = styled.div<LogoCanarinhoProps>`
  ${({ theme, compact }) => css`
    display: ${compact ? 'block' : 'block'};

    a {
      display: block;

      text-decoration: none;
      ${toneColor};

      &:hover {
        ${toneColorHover};
      }
    }

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

export const Compact = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  animation: logoCanarinhoIn 0.5s ease-in-out both;

  @keyframes logoCanarinhoIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`

export const CompactLogo = styled.div`
  ${({ theme }) => css`
    width: 40px;
    margin-right: ${theme.spacings.s2};
  `}
`

export const CompactText = styled.div`
  margin-top: -10px;
`

export const Normal = styled.div`
  width: 200px;

  animation: logoCanarinhoNormalIn 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    both;

  @keyframes logoCanarinhoNormalIn {
    0% {
      transform: rotateX(-100deg);
      transform-origin: top;
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      transform-origin: top;
      opacity: 1;
    }
  }
`

export const Logo = styled.div`
  width: 130px;
  margin: 0 auto;

  position: relative;
`

export const LogoIcon = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
`

export const LogoBg = styled.div`
  ${({ theme }) => css`
    svg {
      fill: ${theme.colors.white};
    }
  `}
`

export const Type = styled.div`
  position: relative;
  top: -30px;
`

export const TypeText = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -5px;
  left: 0;
`

export const TypeBg = styled.div`
  ${({ theme }) => css`
    svg {
      fill: ${theme.colors.white};
    }
  `}
`
