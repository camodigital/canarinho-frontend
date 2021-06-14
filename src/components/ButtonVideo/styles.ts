import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 400px;
    max-height: 400px;
    aspect-ratio: 1 / 1;

    position: relative;
    overflow: hidden;

    border-radius: ${theme.borders.radius.full};

    cursor: pointer;
  `}
`

export const Image = styled.div`
  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    mix-blend-mode: hard-light;
    background-color: ${theme.colors.secondary.s500};
  `}
`

export const Button = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;

    svg {
      width: 60%;
      height: 60%;

      #bg {
        fill: ${theme.colors.primary.s500};
      }

      #icon {
        fill: ${theme.colors.secondary.s500};
      }
    }
  `}
`
