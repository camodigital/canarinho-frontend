import { Story, Meta } from '@storybook/react/types-6-0'
import TextSmall, { TextSmallProps } from '.'

export default {
  title: 'TextSmall',
  component: TextSmall
} as Meta

export const Default: Story<TextSmallProps> = (args) => <TextSmall {...args} />
