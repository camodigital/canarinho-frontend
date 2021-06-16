import { Story, Meta } from '@storybook/react/types-6-0'
import HeroBoy from '.'

export default {
  title: 'HeroBoy',
  component: HeroBoy,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = () => <HeroBoy />
