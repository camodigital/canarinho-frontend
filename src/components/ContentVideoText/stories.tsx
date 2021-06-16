import { Story, Meta } from '@storybook/react/types-6-0'
import ContentVideoText, { ContentVideoTextProps } from '.'
import mock from './mock'

export default {
  title: 'ContentVideoText',
  component: ContentVideoText,
  args: {
    InstitutionalTitle: mock.title,
    InstitutionalSubtitle: mock.subtitle,
    InstitutionalText: mock.text,
    InstitutionalLink: '#'
  }
} as Meta

export const Default: Story<ContentVideoTextProps> = (args) => (
  <ContentVideoText {...args} />
)
