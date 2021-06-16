import { Story, Meta } from '@storybook/react/types-6-0'
import Hero from '.'

export default {
  title: 'Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <Hero />
