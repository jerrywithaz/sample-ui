import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, Text } from '@zerry-ui/components';

export default {
  title: 'Forms/Button',
  component: Button,
  argTypes: {
    status: {
      options: ['default', 'success', 'danger', 'warning'],
      control: { type: 'select' },
    },
    borderRadius: {
      options: ['pill', 'default', 'sharp'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  status: 'default',
  borderRadius: 'pill',
  children: 'Button',
};

export const Secondary = Template.bind({});

Secondary.args = {
  status: 'default',
  borderRadius: 'pill',
  children: 'Button',
};