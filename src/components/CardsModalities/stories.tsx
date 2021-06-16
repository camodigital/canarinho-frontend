import { Story, Meta } from '@storybook/react/types-6-0'
import CardsModalities, { CardsModalitiesProps } from '.'
import mock from './mock'

export default {
  title: 'CardsModalities',
  component: CardsModalities,
  args: {
    cards: mock
  }
} as Meta

export const Default: Story<CardsModalitiesProps> = (args) => (
  <CardsModalities {...args} />
)
