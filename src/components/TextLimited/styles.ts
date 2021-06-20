import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    p {
      margin-bottom: ${theme.spacings.s6};

      &:last-child: {
        margin: none;
      }
    }

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
      transform: translateX(-60%);
    }
    .slick-prev {
      position: absolute;
      left: 50%;
      bottom: -50px;
      transform: translateX(60%);
    }
  `}
`
