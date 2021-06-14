import styled, { css } from 'styled-components'
import media from 'styles/theme/mixins/_respondTo'

export const Wrapper = styled.div`
  ${media.tablet} {
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-template-rows: auto;
  }
`

export const Tabs = styled.div`
  order: 2;
`

export const Tab = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    padding: ${theme.spacings.s2};

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${theme.colors.gray.s25};

    transition: 0.5s;

    ${media.tablet} {
      padding: ${theme.spacings.s3} ${theme.spacings.s2};

      text-align: right;

      justify-content: flex-start;

      &.activeTab {
        color: ${theme.colors.tertiary.s500};

        ${TabIcon} {
          opacity: 1;
        }
      }
    }
  `}
`

export const TabIcon = styled.div`
  ${({ theme }) => css`
    ${media.tablet} {
      margin: 0 ${theme.spacings.s4};

      display: block;

      opacity: 0;

      transition: 0.5s;

      svg {
        width: 5px;

        transform: rotate(180deg);

        fill: ${theme.colors.tertiary.s500};
      }
    }
  `}
`

export const TabButton = styled.div`
  ${media.tablet} {
    display: none;
  }
`

export const Contents = styled.div`
  order: 1;

  position: relative;

  overflow: hidden;
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.s6};
    padding-bottom: ${theme.spacings.s14};

    position: absolute;
    top: 0;
    left: 0;

    transform: translateY(-120%);

    border-radius: ${theme.borders.radius.md};
    border: 1px solid ${theme.colors.gray.s15};

    &.activeTab {
      transform: translateY(0%);
      background-color: white;

      animation: contentTabIn 1s both;
    }

    ${media.desktop} {
      padding: ${theme.spacings.s12} ${theme.spacings.s12} ${theme.spacings.s20}
        ${theme.spacings.s12};
    }
  `}

  @keyframes contentTabIn {
    0% {
      opacity: 0;
      transform: translateY(-120%);
      position: absolute;
    }

    50% {
      opacity: 0.5;

      transform: translateY(0%);
      position: relative;
    }

    100% {
      opacity: 1;

      transform: translateY(0%);
      position: relative;
    }
  }
`

export const ContentButton = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: ${theme.spacings.s6};
    right: ${theme.spacings.s12};
  `}
`
