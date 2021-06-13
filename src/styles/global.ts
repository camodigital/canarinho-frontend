import { createGlobalStyle, css } from 'styled-components'
import resetStyles from 'styles/theme/mixins/_resetStyles'
import fontFace from 'styles/theme/mixins/_fontFace'
import { fontS3 } from './theme/mixins/_fontSize'

const GlobalStyles = createGlobalStyle`
  ${resetStyles}

  ${fontFace}
  ${({ theme }) => css`
    html,
    body,
    #__next,
    #root {
      height: 100%;

      position: relative;
    }

    body {
      font-family: ${theme.fonts.family.base};
      color: ${theme.colors.gray.s500};
      ${fontS3};
      line-height: ${theme.fonts.lineHeights.base};
    }

    a {
      color: ${theme.colors.secondary.s500};

      transition: 0.5s ease-in-out;

      &:hover {
        color: ${theme.colors.primary.s600};
      }
    }

    img {
      display: block;
    }

    /* keyframes */

    //opacity
    @keyframes OpacityIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes OpacityOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    //scale
    @keyframes ScaleYIn {
      0% {
        transform: scaleY(0);
      }
      100% {
        transform: scaleY(1);
      }
    }

    @keyframes ScaleYOut {
      0% {
        transform: scaleY(1);
      }
      100% {
        transform: scaleY(0);
      }
    }
  `}
`

export default GlobalStyles
