import styled, { css } from 'styled-components'
import media from 'styles/theme/mixins/_respondTo'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;

    ${media.desktop} {
      grid-template-columns: 1fr auto;
      grid-template-rows: auto;
      grid-gap: ${theme.spacings.s6};
    }
  `}
`

export const Content = styled.div`
  order: 2;

  ${media.desktop} {
    order: 1;
  }
`

export const ContentHeader = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.s6};
  `}
`

export const ContentText = styled.div`
  ${({ theme }) => css`
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${theme.spacings.s6};
  `}
`

export const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Video = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.s6};
    order: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    ${media.desktop} {
      order: 2;
    }
  `}
`
export const VideoButton = styled.div`
  max-width: 230px;
`
