import { Story, Meta } from '@storybook/react/types-6-0'
import HeroBaby from '.'

export default {
  title: 'HeroBaby',
  component: HeroBaby,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <HeroBaby />
