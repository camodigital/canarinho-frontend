import styled, { css } from 'styled-components'
import media from 'styles/theme/mixins/_respondTo'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: auto;

    position: relative;

    background-color: ${theme.colors.primary.s500};
  `}
`

export const Persona = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  overflow: hidden;
`

export const Photo = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;

  transform: translateX(-50%);

  img {
    height: 80vh;
  }

  ${media.desktop} {
    img {
      height: 75vh;
    }
  }
`

export const Shadow = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;

  transform: translateX(-70%);

  img {
    height: 70vh;
  }

  ${media.desktop} {
    img {
      height: 80vh;
    }
  }
`

export const Element = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0%;
    left: 50%;

    transform: translateX(100%) translateY(-60%);

    svg {
      width: 200px;

      fill: ${theme.colors.primary.s700};

      #cabeca {
        animation: heroBoyHeadDog 1.5s ease-in-out infinite alternate;
        transform-origin: center center;
      }

      #lingua {
        animation: heroBoyTongueDog 0.5s ease-in-out infinite alternate;
        transform-origin: top center;
      }

      #rabo {
        animation: heroBoyTailDog 0.5s ease-in-out infinite alternate;
        transform-origin: top center;
      }
    }

    @media (min-width: 1170px) and (max-height: 650px) {
      svg {
        width: 100px;
      }
    }

    /* keyframes */
    @keyframes heroBoyHeadDog {
      0% {
        transform: scaleX(1);
      }
      100% {
        transform: scaleX(0.97);
      }
    }
    @keyframes heroBoyTongueDog {
      0% {
        transform: scaleY(1);
      }
      100% {
        transform: scaleY(0.99);
      }
    }
    @keyframes heroBoyTailDog {
      0% {
        transform: scaleY(1);
      }
      100% {
        transform: scaleY(0.98);
      }
    }
  `}
`

export const Bg = styled.div`
  width: 100vw;
`

export const BgContainer = styled.div`
  ${({ theme }) => css`
    svg {
      height: 70vh;

      position: absolute;
      top: 0;
      left: 50%;

      transform: translateX(-50%);

      fill: ${theme.colors.primary.s500};

      ${media.tablet} {
        height: 120vh;
      }

      ${media.desktop} {
        height: 120vh;
      }

      ${media.ultrawide} {
        height: 140vh;
      }

      #bg {
        fill: ${theme.colors.primary.s600};
      }

      #gotas1 {
        animation: heroBoyBlink 1s ease-in-out infinite alternate;
        transform-origin: top center;
      }

      #gotas2 {
        animation: heroBoyBlink 1.2s ease-in-out infinite alternate;
        transform-origin: top center;
      }

      #luzes1 {
        animation: heroBoyBlink 1.4s ease-in-out infinite alternate;
        transform-origin: top center;
      }

      #luzes2 {
        animation: heroBoyBlink 1.6s ease-in-out infinite alternate;
        transform-origin: top center;
      }

      #gruposkew1 {
        animation: heroBoySkew 1.5s ease-in-out infinite alternate;
        transform-origin: center center;
      }

      #gruposkew2 {
        animation: heroBoySkew 2s ease-in-out infinite alternate;
        transform-origin: center center;
      }

      #caminhao {
        animation: heroBoyTruck 10s ease-in-out infinite;
        transform-origin: center center;
      }

      #helicoptero {
        animation: heroBoyHeli 2s ease-in-out infinite alternate;
        transform-origin: center center;
      }
    }

    /* keyframes */

    @keyframes heroBoyBlink {
      0% {
        transform: scaleY(1);
        opacity: 1;
      }
      100% {
        transform: scaleY(0.98);
        opacity: 0.5;
      }
    }

    @keyframes heroBoySkew {
      0% {
        transform: skewX(-1deg);
      }
      100% {
        transform: skewX(1deg);
      }
    }

    @keyframes heroBoyTruck {
      0% {
        transform: translateX(-200px);
      }
      100% {
        transform: translateX(300%);
      }
    }

    @keyframes heroBoyHeli {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(50px);
      }
    }
  `}
`

export const Noise = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  mix-blend-mode: overlay;
  opacity: 0.1;

  background-image: url('images/bgNoise.webp');

  ${media.desktop} {
    opacity: 0.1;
  }
`
