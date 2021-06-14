import { Story, Meta } from '@storybook/react/types-6-0'
import ButtonIcon, { ButtonIconProps } from '.'

export default {
  title: 'ButtonIcon',
  component: ButtonIcon
} as Meta

export const Default: Story<ButtonIconProps> = (args) => (
  <ButtonIcon {...args} />
)
