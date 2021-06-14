import styled from 'styled-components'
import media from 'styles/theme/mixins/_respondTo'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${media.desktop} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`

export const Links = styled.ul`
  padding-left: 1.5rem;
  list-style: disc;
`

export const Link = styled.li``
