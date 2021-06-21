import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  padding-bottom: 50px;

  .slick-slide {
    opacity: 0.5;
    transition: 0.5s;
  }
  .slick-current {
    opacity: 1;
  }
  .slick-next {
    position: absolute;
    left: 50%;
    bottom: 0;
    bottom: -50px;
    transform: translateX(60%);
  }
  .slick-prev {
    position: absolute;
    left: 50%;
    bottom: -50px;
    transform: translateX(-60%);
  }
`

export const Slide = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.s3};
  `}
`
