import styled, { css } from 'styled-components'
import media from 'styles/theme/mixins/_respondTo'

export const Wrapper = styled.div``

export const Items = styled.div`
  ${({ theme }) => css`
    display: grid;
    ${media.tablet} {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(4, auto);
      grid-gap: ${theme.spacings.s6};
    }
  `}
`

export const Item = styled.div`
  max-height: 350px;
  ${media.tablet} {
    &:nth-child(1) {
      grid-column: 9 / span 4;
      grid-row: 1;
    }
    &:nth-child(2) {
      grid-column: 1 / span 4;
      grid-row: 1;
    }
    &:nth-child(3) {
      grid-column: 5 / span 4;
      grid-row: 1;
    }
    &:nth-child(4) {
      grid-column: 1 / span 4;
      grid-row: 2 / span 2;
    }
    &:nth-child(5) {
      grid-column: 1 / span 4;
      grid-row: 2 / span 2;
    }
    &:nth-child(6) {
      grid-column: 5 / span 6;
      grid-row: 2 / span 2;
    }
    &:nth-child(7) {
      grid-column: 11 / span 2;
      grid-row: 2;
    }
    &:nth-child(8) {
      grid-column: 11 / span 2;
      grid-row: 3;
    }
    &:nth-child(9) {
      grid-column: 1 / span 4;
      grid-row: 4;
    }
    &:nth-child(10) {
      grid-column: 5 / span 4;
      grid-row: 4;
    }
    &:nth-child(11) {
      grid-column: 9 / span 4;
      grid-row: 4;
    }
  }
`

export const Title = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.s6} 0;
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.s6};
    text-align: center;
  `}
`

export const Button = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.s6};

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const Image = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    margin-bottom: ${theme.spacings.s6};
    overflow: hidden;
    position: relative;
    border-radius: ${theme.borders.radius.md};
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
    a {
      width: 100%;
      height: 100%;
      display: block;
      img {
        transform: scale(1);
        transition: 0.5s;
      }
      &:hover {
        transform: scale(1.05);
      }
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.5;
        mix-blend-mode: hard-light;
        background-color: ${theme.colors.secondary.s500};
      }
    }
  `}
`
