import { toneProps } from 'types/tone'
import colors from '../props/_colors'

export const toneColor = ({ tone }: toneProps) => {
  return `
    color: ${
      tone === 'primary'
        ? colors.primary.s500
        : tone === 'secondary'
        ? colors.secondary.s500
        : colors.tertiary.s500
    }
  `
}

export const toneColorHover = ({ tone }: toneProps) => {
  return `
    color: ${
      tone === 'primary'
        ? colors.primary.s700
        : tone === 'secondary'
        ? colors.secondary.s700
        : colors.tertiary.s700
    }
  `
}

export const toneFill = ({ tone }: toneProps) => {
  return `
    fill: ${
      tone === 'primary'
        ? colors.primary.s500
        : tone === 'secondary'
        ? colors.secondary.s500
        : colors.tertiary.s500
    }
  `
}

export const toneFillHover = ({ tone }: toneProps) => {
  return `
    fill: ${
      tone === 'primary'
        ? colors.primary.s700
        : tone === 'secondary'
        ? colors.secondary.s700
        : colors.tertiary.s700
    }
  `
}

export const toneBG = ({ tone }: toneProps) => {
  return `
    background-color: ${
      tone === 'primary'
        ? colors.primary.s500
        : tone === 'secondary'
        ? colors.secondary.s500
        : colors.tertiary.s500
    }
  `
}

export const toneBGHover = ({ tone }: toneProps) => {
  return `
    background-color: ${
      tone === 'primary'
        ? colors.primary.s700
        : tone === 'secondary'
        ? colors.secondary.s700
        : colors.tertiary.s700
    }
  `
}
