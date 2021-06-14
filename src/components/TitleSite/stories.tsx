import { Story, Meta } from '@storybook/react/types-6-0'
import TitleSite from '.'

export default {
  title: 'TitleSite',
  component: TitleSite,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = () => <TitleSite />
