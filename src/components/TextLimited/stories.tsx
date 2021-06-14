import { Story, Meta } from '@storybook/react/types-6-0'
import TextLimited, { TextLimitedProps } from '.'

export default {
  title: 'TextLimited',
  component: TextLimited,
  args: {
    text: 'lorem ipsum dolor sit amet'
  }
} as Meta

export const Default: Story<TextLimitedProps> = (args) => (
  <TextLimited {...args} />
)
