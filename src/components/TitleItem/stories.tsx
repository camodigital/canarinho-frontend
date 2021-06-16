import { Story, Meta } from '@storybook/react/types-6-0'
import TitleItem, { TitleItemProps } from '.'

export default {
  title: 'TitleItem',
  component: TitleItem,
  args: {
    title: 'Title Item',
    tone: 'secondary'
  }
} as Meta

export const Default: Story<TitleItemProps> = (args) => <TitleItem {...args} />
