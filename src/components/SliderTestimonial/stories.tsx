import { Story, Meta } from '@storybook/react/types-6-0'
import SliderTestimonial, { SliderTestimonialProps } from '.'

export default {
  title: 'SliderTestimonial',
  component: SliderTestimonial
} as Meta

export const Default: Story<SliderTestimonialProps> = (args) => (
  <SliderTestimonial {...args} />
)
