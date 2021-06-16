import styled, { css } from 'styled-components'
import { fontS2, fontS8 } from 'styles/theme/mixins/_fontSize'
import media from 'styles/theme/mixins/_respondTo'

export const Wrapper = styled.h1`
  span {
    display: inline-block;
  }
`

export const School = styled.span`
  width: 86px;
  height: 50px;

  position: relative;
  top: -6px;
  left: 50%;

  transform: translate(-170%);

  /* animation: titleSiteSchool 1s ease-in-out alternate infinite; */

  ${media.tablet} {
    width: 100px;
    height: 50px;

    top: -30px;

    transform: translate(-230%);
  }

  ${media.desktop} {
    width: 110px;
    height: 50px;

    transform: translate(-270%);
  }

  @keyframes titleSiteSchool {
    0% {
      transform: translateY(-5px);
    }

    100% {
      transform: translateY(5px);
    }
  }
`

export const SchoolText = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    padding-bottom: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;

    font-family: ${theme.fonts.family.featured};
    ${fontS2};
    letter-spacing: ${theme.fonts.letterSpacings.wider};
    color: ${theme.colors.white};
  `}
`

export const SchoolBg = styled.span`
  width: 100%;
  height: 100%;

  svg {
    width: 100;
  }
`

export const Canarinho = styled.div`
  ${({ theme }) => css`
    ${fontS8}
    font-family: ${theme.fonts.family.featured};
    text-align: center;
    color: ${theme.colors.white};
  `}
`
