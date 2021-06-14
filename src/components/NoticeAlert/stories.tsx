import { Story, Meta } from '@storybook/react/types-6-0'
import NoticeAlert from '.'

export default {
  title: 'NoticeAlert',
  component: NoticeAlert,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: Story = () => <NoticeAlert />
