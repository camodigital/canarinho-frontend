import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    line-height: ${theme.fonts.lineHeights.none};

    &:hover {
      ${Icons} {
        height: 30px;
      }
    }
  `}
`

export const Container = styled.div`
  cursor: pointer;
  animation: CanarinhoSocial 0.7s ease-in-out infinite alternate both;

  @keyframes CanarinhoSocial {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`

export const Bird = styled.div`
  width: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BirdSocial = styled.div`
  ${({ theme }) => css`
    position: relative;
    top: -15px;
    svg {
      width: 50px;
      fill: ${theme.colors.secondary.s500};
    }
  `}
`

export const BirdIcon = styled.div`
  width: 80px;

  position: relative;
  z-index: 1;
  svg {
    .st0 {
      fill: #63350f;
    }
    .st1 {
      fill-rule: evenodd;
      clip-rule: evenodd;
      fill: #f7e010;
    }
    .st2 {
      fill: #f7b80a;
    }
    .st2,
    .st3,
    .st4,
    .st6 {
      fill-rule: evenodd;
      clip-rule: evenodd;
    }
    .st3 {
      opacity: 0.5;
      fill: #fff;
    }
    .st4,
    .st6 {
      fill: #fc0;
    }
    .st6 {
      fill: #63350f;
    }

    #olhosa {
      display: none;
    }

    #olhosf {
    }

    #asae {
      transform-origin: center;
      animation: CanarinhoAsae 0.7s ease-in-out infinite alternate;
    }

    #asad {
      transform-origin: center;
      animation: CanarinhoAsad 0.7s ease-in-out infinite alternate both 0.7s;
    }

    #rabo {
      animation: CanarinhoRabo 0.7s ease-in-out infinite alternate both;
    }

    /* keyframes */
    @keyframes CanarinhoAsae {
      0% {
        transform: rotate(25deg) translateY(0) translateX(0);
      }
      100% {
        transform: rotate(-25deg) translateY(-50px) translateX(40px);
      }
    }

    @keyframes CanarinhoAsad {
      0% {
        transform: rotate(25deg) translateY(0) translateX(0);
      }
      100% {
        transform: rotate(-23deg) translateY(-55px) translateX(0px);
      }
    }

    @keyframes CanarinhoRabo {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-15px);
      }
    }
  }

  &:hover {
    svg {
      #olhosa {
        display: block;
      }

      #olhosf {
        display: none;
      }
    }
  }
`

export const Icons = styled.div`
  width: 120px;
  height: 0;

  position: relative;
  top: -10px;

  overflow: hidden;

  transition: all 0.5s;
`

export const Items = styled.ul`
  display: flex;
`

export const Item = styled.li`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: ${theme.spacings.s2};

    svg {
      width: 30px;

      fill: ${theme.colors.secondary.s500};

      transition: 0.5s;
    }

    &:hover {
      svg {
        fill: ${theme.colors.secondary.s700};
      }
    }
  `}
`
