import styled, { css } from 'styled-components'
import { fontS3 } from 'styles/theme/mixins/_fontSize'
import media from 'styles/theme/mixins/_respondTo'

export const Wrapper = styled.div``

export const Form = styled.form`
  ${({ theme }) => css`
    max-width: 600px;
    margin: 0 auto;
    padding: 0 ${theme.spacings.s6};

    position: relative;
  `}
`

export const InputGroup = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.spacings.s6};
    position: relative;

    input {
      width: 100%;
      height: 40px;
      padding: ${theme.spacings.s6};

      border: 0;
      border-radius: 4px;
      transition: 0.5s;

      color: ${theme.colors.white};

      background-color: ${theme.colors.primary.s600};

      ${fontS3};
      font-family: ${theme.fonts.family.base};

      ::placeholder {
        color: white;
      }
    }
    input:focus {
      border: 0;
      outline: none;
    }

    ${media.desktop} {
      grid-template-columns: 1fr 1fr;
    }
  `}
`

export const TextareaGroup = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.s6};

    position: relative;

    label {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    textarea {
      width: 100%;
      height: 140px;
      padding: ${theme.spacings.s6};
      color: ${theme.colors.white};

      ${fontS3};
      font-family: ${theme.fonts.family.base};

      border: 0;

      resize: none;

      background-color: ${theme.colors.primary.s600};

      ::placeholder {
        color: white;
      }
    }
    textarea:focus {
      border: 0;
      outline: none;
    }
  `}
`

export const Warnings = styled.div``

export const WarningFill = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.red.s500};
    transition: 0.5s;
    &.show {
      height: 2rem;
      transform: scale(1);
      opacity: 1;
    }
    &.hide {
      height: 0px;
      transform: scale(0);
      opacity: 0;
    }
  `}
`

export const WarningSucess = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.green.s500};
    transition: 0.5s;
    &.show {
      height: 2rem;
      transform: scale(1);
      opacity: 1;
    }
    &.hide {
      height: 0px;
      transform: scale(0);
      opacity: 0;
    }
  `}
`

export const WarningError = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.red.s500};
    transition: 0.5s;
    &.show {
      height: 2rem;
      transform: scale(1);
      opacity: 1;
    }
    &.hide {
      height: 0px;
      transform: scale(0);
      opacity: 0;
    }
  `}
`

export const WarningCaptcha = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.red.s500};
    transition: 0.5s;
    &.show {
      height: 2rem;
      transform: scale(1);
      opacity: 1;
    }
    &.hide {
      height: 0px;
      transform: scale(0);
      opacity: 0;
    }
  `}
`

export const Recaptcha = styled.div`
  transition: 0.5s;
  &.show {
    height: 100px;
    transform: scale(1);
    opacity: 1;
  }
  &.hide {
    height: 0px;
    transform: scale(0);
    pointer-events: none;
    opacity: 0;
  }
`

export const Button = styled.div`
  margin-top: 12px;

  display: flex;
  justify-content: center;
  align-content: center;
`
