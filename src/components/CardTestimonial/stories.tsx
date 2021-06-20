import { Story, Meta } from '@storybook/react/types-6-0'
import CardTestimonial, { CardTestimonialProps } from '.'

export default {
  title: 'CardTestimonial',
  component: CardTestimonial
} as Meta

export const Default: Story<CardTestimonialProps> = (args) => (
  <CardTestimonial {...args} />
)
