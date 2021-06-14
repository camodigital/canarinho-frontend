import { Story, Meta } from '@storybook/react/types-6-0'
import ContainerMaster, { ContainerMasterProps } from '.'

export default {
  title: 'ContainerMaster',
  component: ContainerMaster,
  args: {
    size: 'default'
  }
} as Meta

export const Default: Story<ContainerMasterProps> = (args) => (
  <ContainerMaster {...args} />
)
