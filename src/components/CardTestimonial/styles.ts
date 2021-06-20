import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: 300px;
    padding: ${theme.spacings.s8};

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto 1fr auto;

    position: relative;

    border-radius: ${theme.borders.radius.md};

    background-color: ${theme.colors.white};
  `}
`

export const Quot = styled.div`
  svg {
    width: 50px;
  }
`

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
  }
`

export const Name = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.fonts.weight.bold};
  `}
`
