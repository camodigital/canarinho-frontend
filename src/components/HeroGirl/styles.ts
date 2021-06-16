import styled, { css } from 'styled-components'
import media from 'styles/theme/mixins/_respondTo'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: auto;

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

  transform: translateX(-48%);

  img {
    height: 90vh;
  }

  ${media.desktop} {
    transform: translateX(-50%);

    img {
      height: 80vh;
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

    transform: translateX(25%) translateY(-20%) rotateY(180deg) rotateX(-10deg);

    svg {
      width: 400px;

      fill: ${theme.colors.primary.s700};

      transform-origin: bottom right;

      animation: heroGirlElement 3s ease-in-out infinite alternate;
    }

    @media (min-width: 1170px) and (max-height: 650px) {
      transform: translateX(30%) translateY(-15%) rotateY(180deg)
        rotateX(-10deg);

      svg {
        width: 320px;
      }
    }

    ${media.ultrawide} {
      transform: translateX(10%) translateY(-20%) rotateY(180deg)
        rotateX(-10deg);
      svg {
        width: 500px;
      }
    }

    /* keyframes */
    @keyframes heroGirlElement {
      0% {
        transform: rotateZ(0deg);
      }
      100% {
        transform: rotateZ(5deg);
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

      #dust1 {
        animation: spaceElementsFade 1s cubic-bezier(0.39, 0.575, 0.565, 1)
          infinite alternate forwards;
      }

      #dust2 {
        animation: spaceElementsFade 1s cubic-bezier(0.39, 0.575, 0.565, 1)
          infinite alternate forwards;
        animation-delay: 0.5s;
      }

      #stars1 {
        animation: spaceElementsFade 1s cubic-bezier(0.39, 0.575, 0.565, 1)
          infinite alternate forwards;
        animation-delay: 1s;
      }

      #stars2 {
        animation: spaceElementsFade 1s cubic-bezier(0.39, 0.575, 0.565, 1)
          infinite alternate forwards;
        animation-delay: 1.5s;
      }

      #earth {
        animation: spaceElementsTranslateY 1s ease-in-out infinite alternate
          forwards;
        animation-delay: 1s;
      }

      #saturn {
        animation: spaceElementsTranslateY 1s ease-in-out infinite alternate
          forwards;
        animation-delay: 1.5s;
      }

      #mars {
        animation: spaceElementsTranslateY 1s ease-in-out infinite alternate
          forwards;
        animation-delay: 2s;
      }

      #satellite {
        animation: spaceElementsTranslateY 1s ease-in-out infinite alternate
          forwards;
        animation-delay: 2.5s;
      }

      #smokes1 {
        animation: spaceElementsTranslateY 1s ease-in-out infinite alternate
          forwards;
        animation-delay: 1.2s;
      }

      #smokes2 {
        animation: spaceElementsTranslateY 1s ease-in-out infinite alternate
          forwards;
        animation-delay: 0.7s;
      }

      #meteorB {
        animation: spaceElementsMeteors 5s ease-in-out infinite both;
        animation-delay: 0.7s;
      }

      #meteorS {
        animation: spaceElementsMeteors 5s ease-in-out infinite both;
        animation-delay: 1.3s;
      }

      /* animate keyframes */

      @keyframes spaceElementsFade {
        0% {
          opacity: 0.2;
          transform: translateY(-2px);
        }
        100% {
          opacity: 1;
          transform: translateY(0px);
        }
      }

      @keyframes spaceElementsTranslateY {
        0% {
          opacity: 0.8;
          transform: translateY(5px);
        }
        100% {
          opacity: 1;
          transform: translateY(0px);
        }
      }

      @keyframes spaceElementsMeteors {
        0% {
          opacity: 0.8;
          transform: translateY(-200%) translateX(200%);
        }
        100% {
          opacity: 1;
          transform: translateY(40%) translateX(-40%);
        }
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
