import styled, { css } from 'styled-components'
import { boxShadowLG } from 'styles/theme/mixins/_shadows'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.s3} ${theme.spacings.s3};

    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-template-rows: auto;
    grid-gap: ${theme.spacings.s3};

    position: fixed;
    top: 0;
    left: 0;

    ${boxShadowLG(theme.colors.blackAlpha1)};
    background-color: ${theme.colors.white};
  `}
`

export const Logo = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Lang = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.layers.buttonmenu};
  `}
`

export const Nav = styled.div``

export const NavButton = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.layers.buttonmenu};

    svg {
      width: 30px;
      height: 30px;

      fill: ${theme.colors.secondary.s500};
    }

    cursor: pointer;
  `}
`

export const NavContentOverlay = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;

    transition: 0.5s;

    &.isOpen {
      background-color: ${theme.colors.blackAlpha1};
    }

    &.isClose {
      background-color: transparent;

      pointer-events: none;
    }
  `}
`

export const NavContent = styled.div`
  ${({ theme }) => css`
    width: 350px;
    height: 100%;

    position: fixed;
    top: 0;
    right: 0;
    z-index: ${theme.layers.menu};

    background-color: ${theme.colors.white};

    &.isOpen {
      animation: navMobNavContentIn 0.5s ease-in-out both;
    }

    &.isClose {
      animation: navMobNavContentOut 0.5s ease-in-out both;
      pointer-events: none;
    }

    @keyframes navMobNavContentIn {
      0% {
        transform: translateX(100%);
      }

      100% {
        transform: translateX(0);
      }
    }

    @keyframes navMobNavContentOut {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(100%);
      }
    }

    .slick-dots {
      width: 100%;

      display: grid !important;
      grid-template-columns: auto auto;

      position: absolute;
      top: 65px;
      left: 0;
      z-index: 1;

      border-bottom: 1px solid ${theme.colors.gray.s50};

      > li {
        width: 100%;
        height: 100%;

        padding: ${theme.spacings.s4};

        display: flex;
        justify-content: center;
        align-items: center;

        color: ${theme.colors.gray.s400};
        font-family: ${theme.fonts.family.featured};

        cursor: pointer;

        transition: 0.5s;

        &.slick-active {
          color: ${theme.colors.secondary.s500};

          background-color: ${theme.colors.gray.s15};
        }
      }
    }
  `}
`

export const Slide = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;

    padding: ${theme.spacings.s6};

    padding-top: ${theme.spacings.s20};
  `}
`
