import styled, { css } from 'styled-components'
import media from 'styles/theme/mixins/_respondTo'

export const Wrapper = styled.div`
  position: relative;

  .containerMaster {
    position: relative;
  }
`

export const BG = styled.div`
  width: 100%;
  height: 100%;
`

export const Content = styled.div``

export const Title = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: ${theme.spacings.s16};
    left: 50%;

    transform: translateX(-50%);

    ${media.desktop} {
      bottom: ${theme.spacings.s24};
    }
  `}
`

export const Notice = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 100px;
    right: ${theme.spacings.s4};

    ${media.desktop} {
      top: initial;
      right: initial;
      bottom: 40px;
      left: ${theme.spacings.s4};
      z-index: 1;
    }
  `}
`

export const Social = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: ${theme.spacings.s4};
    right: -50px;
    z-index: 1;

    transform: translateX(-50%);
  `}
`
