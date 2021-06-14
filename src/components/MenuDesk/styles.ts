import styled, { css } from 'styled-components'
import { boxShadowLG } from 'styles/theme/mixins/_shadows'

export const Wrapper = styled.div``

export const Menu = styled.div`
  ${({ theme }) => css`
    width: 100%;

    position: fixed;

    transition: 0.5s;

    .containerMaster {
      display: grid;
      grid-template-rows: auto;
      grid-gap: ${theme.spacings.s6};

      position: relative;
    }

    &.scrollOff {
      padding: ${theme.spacings.s8} 0;

      .containerMaster {
        grid-template-columns: 150px 1fr;
      }
    }

    &.scrollOn {
      padding: ${theme.spacings.s2} 0;

      ${boxShadowLG(theme.colors.blackAlpha1)};
      background-color: ${theme.colors.white};

      .containerMaster {
        grid-template-columns: 200px 1fr;
      }

      ${LogoContent} {
        position: static;
      }
    }
  `}
`

export const Logo = styled.div``

export const LogoContent = styled.div`
  position: absolute;
  top: -20px;
  left: 0;
`

export const Nav = styled.nav``

export const MenuSupp = styled.div`
  ${({ theme }) => css`
    width: 280px;

    position: fixed;
    top: 30%;
    right: ${theme.spacings.s6};

    &.isClose {
      animation: navSuppOut 0.5s ease-in-out both;

      ${MenuSuppHeader} {
        animation: navSuppHeaderOut 1s ease-in-out both;
        right: 0;

        span {
          color: ${theme.colors.primary.s500};
        }
      }

      ${MenuSuppButton} {
        animation: navSuppButtonOut 0.5s ease-in-out both;

        svg {
          transform: rotate(180deg);
        }
      }

      ${MenuSuppNavContent} {
        animation: navSuppItemsOut 0.5s ease-in-out both;
      }
    }

    &.isOpen {
      animation: navSuppIn 0.5s ease-in-out both;
      right: 20px;

      ${MenuSuppHeader} {
        animation: navSuppHeaderIn 0.5s ease-in-out both;
      }

      ${MenuSuppButton} {
        animation: navSuppButtonIn 0.5s ease-in-out both;
      }

      ${MenuSuppNavContent} {
        animation: navSuppItemsIn 0.5s ease-in-out both;
      }
    }

    /* keyframes */
    @keyframes navSuppOut {
      0% {
        width: 270px;
        box-shadow: none;
      }
      99% {
        width: 160px;
        box-shadow: none;
      }
      100% {
        width: 160px;
        ${boxShadowLG(theme.colors.blackAlpha1)};
      }
    }

    @keyframes navSuppIn {
      0% {
        width: 160px;
        box-shadow: none;
      }
      99% {
        width: 270px;
        box-shadow: none;
      }
      100% {
        width: 270px;
        ${boxShadowLG(theme.colors.blackAlpha1)};
      }
    }

    @keyframes navSuppHeaderOut {
      0% {
        padding: ${theme.spacings.s6} ${theme.spacings.s6} ${theme.spacings.s4}
          ${theme.spacings.s6};

        border-radius: ${theme.borders.radius.md} ${theme.borders.radius.md} 0 0;
      }
      100% {
        padding: ${theme.spacings.s3} ${theme.spacings.s6};

        border-radius: ${theme.borders.radius.md} ${theme.borders.radius.md};
      }
    }

    @keyframes navSuppHeaderIn {
      0% {
        padding: ${theme.spacings.s3} ${theme.spacings.s6};
      }
      100% {
        padding: ${theme.spacings.s6} ${theme.spacings.s6} ${theme.spacings.s4}
          ${theme.spacings.s6};
      }
    }

    @keyframes navSuppButtonOut {
      0% {
        background-color: ${theme.colors.secondary.s500};
      }
      100% {
        background-color: ${theme.colors.primary.s500};
      }
    }

    @keyframes navSuppButtonIn {
      0% {
        background-color: ${theme.colors.primary.s500};
      }
      100% {
        background-color: ${theme.colors.secondary.s500};
      }
    }

    @keyframes navSuppItemsIn {
      0% {
        transform: translateY(-150%);
        position: absolute;
      }
      5% {
        transform: translateY(-150%);
        position: relative;
      }
      100% {
        transform: translateY(0);
        position: relative;
      }
    }

    @keyframes navSuppItemsOut {
      0% {
        transform: translateY(0);
        position: relative;
      }
      95% {
        transform: translateY(-150%);
        position: relative;
      }
      100% {
        transform: translateY(-150%);
        position: absolute;
      }
    }
  `}
`

export const MenuSuppHeader = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.s10} ${theme.spacings.s10} ${theme.spacings.s4};

    position: relative;

    border-radius: ${theme.borders.radius.md} ${theme.borders.radius.md} 0 0;

    background-color: ${theme.colors.white};
  `}
`

export const MenuSuppButton = styled.div`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    right: 0;

    border-radius: 0 ${theme.borders.radius.md} 0 ${theme.borders.radius.md};

    background-color: ${theme.colors.secondary.s500};

    cursor: pointer;
    transition: 0.5s;

    &:hover {
      background-color: ${theme.colors.tertiary.s500};
    }

    svg {
      width: 40%;
      height: 40%;

      fill: ${theme.colors.white};
    }
  `}
`

export const MenuSuppTitle = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.featured};

    span {
      color: ${theme.colors.secondary.s500};
    }
  `}
`

export const MenuSuppNav = styled.nav`
  overflow: hidden;
  position: relative;
`

export const MenuSuppNavContent = styled.nav`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.s10} ${theme.spacings.s10} ${theme.spacings.s10};

    border-radius: 0 0 ${theme.borders.radius.md} ${theme.borders.radius.md};

    background-color: ${theme.colors.white};
  `}
`
