import { Story, Meta } from '@storybook/react/types-6-0'
import MediaMatch, { MediaMatchProps } from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Default: Story<MediaMatchProps> = (args) => (
  <MediaMatch {...args} />
)
