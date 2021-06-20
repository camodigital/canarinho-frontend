import styled, { css } from 'styled-components'
import media from 'styles/theme/mixins/_respondTo'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;

    position: relative;

    ${media.desktop} {
      grid-template-columns: 1fr auto;
      grid-template-rows: auto;
      grid-gap: ${theme.spacings.s6};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.s12} 0;

    order: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media.desktop} {
      order: 1;
    }
  `}
`

export const ContentHeader = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.s6} 0;
  `}
`

export const ContentText = styled.div`
  ${({ theme }) => css`
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    padding: ${theme.spacings.s6} 0;
  `}
`

export const ContentButton = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.s6} 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
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
      margin-bottom: 0;
    }
  `}
`
export const VideoButton = styled.div`
  max-width: 230px;
`
