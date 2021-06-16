import styled, { css } from 'styled-components'
import media from 'styles/theme/mixins/_respondTo'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media.desktop} {
      height: auto;

      display: grid;
      grid-template-columns: 1fr auto auto auto;
      grid-template-rows: auto;
      grid-gap: ${theme.spacings.s6};
    }
  `}
`

export const Links = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.s6};

    ${media.desktop} {
      margin-bottom: 0;

      display: flex;
    }
  `}
`
export const Link = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.s3};

    &:last-child {
      margin-right: 0;
    }
  `}
`

export const Social = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.s6};

    display: flex;
    justify-content: center;
    align-items: center;

    ${media.desktop} {
      margin-bottom: 0;
    }
  `}
`

export const Lang = styled.div``

export const Buttons = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    grid-gap: ${theme.spacings.s3};
  `}
`

export const Button = styled.div``
