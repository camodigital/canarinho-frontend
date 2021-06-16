import { Story, Meta } from '@storybook/react/types-6-0'
import CardModalities, { CardModalitiesProps } from '.'

export default {
  title: 'CardModalities',
  component: CardModalities,
  args: {
    tone: 'tertiary',
    icon: 'images/iconintegral.svg',
    title: 'Title',
    subtitle: 'Subtitle',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sagittis ipsum. Suspendisse tempus nisl in congue tincidunt. Vivamus congue tortor test amour lit.',
    buttonText: 'Mais Informações',
    buttonLink: '#'
  }
} as Meta

export const Default: Story<CardModalitiesProps> = (args) => (
  <CardModalities {...args} />
)
