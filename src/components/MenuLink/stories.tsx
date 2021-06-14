import { Story, Meta } from '@storybook/react/types-6-0'
import MenuLink, { MenuLinkProps } from '.'

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    name: 'link',
    link: '#'
  }
} as Meta

export const Default: Story<MenuLinkProps> = (args) => <MenuLink {...args} />
