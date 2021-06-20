import { Story, Meta } from '@storybook/react/types-6-0'
import TourVirtual, { TourVirtualProps } from '.'

export default {
  title: 'TourVirtual',
  component: TourVirtual
} as Meta

export const Default: Story<TourVirtualProps> = (args) => (
  <TourVirtual {...args} />
)
