import { ComponentMeta, ComponentStory } from '@storybook/react';
import CustomLink from './CustomLink';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Custom Link',
  component: CustomLink,
  decorators: [withRouter],
} as ComponentMeta<typeof CustomLink>;

const Template: ComponentStory<typeof CustomLink> = (args) => (
  <CustomLink {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  children: 'Button',
  to: 'select',
  textTransform: 'capitalize',
};
