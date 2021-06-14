import { Story, Meta } from '@storybook/react/types-6-0'
import ButtonText, { ButtonTextProps } from '.'

export default {
  title: 'ButtonText',
  component: ButtonText,
  args: {
    manner: 'external',
    tone: 'secondary',
    size: 'big',
    link: '#',
    text: 'button'
  }
} as Meta

export const Default: Story<ButtonTextProps> = (args) => (
  <ButtonText {...args} />
)
