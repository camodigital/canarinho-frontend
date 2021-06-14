import styled from 'styled-components'

export const Wrapper = styled.div``

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;

    cursor: pointer;
  }

  transition: 0.5s ease-in-out;

  &:hover {
    filter: brightness(0.7);
  }
`
