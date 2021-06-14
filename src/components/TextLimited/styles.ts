import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    p {
      margin-bottom: ${theme.spacings.s6};

      &:last-child: {
        margin: none;
      }
    }
  `}
`
