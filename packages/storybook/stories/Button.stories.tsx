import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@zerry-ui/components';

export default {
  title: 'Forms/Button',
  component: Button,
  argTypes: {
    status: {
      options: ['primary'],
      control: { type: 'select' },
    },
    borderRadius: {
      options: ['pill', 'default', 'sharp'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  status: 'primary',
  borderRadius: 'pill',
  children: 'Button',
};

export const Secondary = Template.bind({});

Secondary.args = {
  status: 'primary',
  borderRadius: 'pill',
  children: 'Button',
};