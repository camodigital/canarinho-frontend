import { Story, Meta } from '@storybook/react/types-6-0'
import ParallaxContentX, { ParallaxContentXProps } from '.'

export default {
  title: 'ParallaxContentX',
  component: ParallaxContentX
} as Meta

export const Default: Story<ParallaxContentXProps> = (args) => (
  <ParallaxContentX {...args} />
)
