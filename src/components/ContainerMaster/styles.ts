import styled, { css } from 'styled-components'
import media from 'styles/theme/mixins/_respondTo'
import { ContainerMasterProps } from '.'

export const Wrapper = styled.div<ContainerMasterProps>`
  ${({ theme, size }) => css`
    width: 100%;
    height: 100%;
    max-width: ${size === 'xs'
      ? '900px'
      : size === 'small'
      ? '1170px'
      : size === 'full'
      ? 'none'
      : '1400px'};
    margin: 0 auto;
    padding: ${size === 'xs'
      ? `0 ${theme.spacings.s3}`
      : size === 'small'
      ? `0 ${theme.spacings.s3}`
      : size === 'full'
      ? '0'
      : `0 ${theme.spacings.s3}`};

    ${media.tablet} {
      padding: ${size === 'xs'
        ? `0 ${theme.spacings.s6}`
        : size === 'small'
        ? `0 ${theme.spacings.s6}`
        : size === 'full'
        ? '0'
        : `0 ${theme.spacings.s6}`};
    }
  `}
`
