import { Story, Meta } from '@storybook/react/types-6-0'
import HeroGirl from '.'

export default {
  title: 'HeroGirl',
  component: HeroGirl,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <HeroGirl />
