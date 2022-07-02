import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '@zerry-ui/components';

export default {
  title: 'Forms/Text',
  component: Text,
  argTypes: {
    status: {
      options: ['primary'],
      control: { type: 'select' },
    },
    category: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p1', 'p2'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  status: 'primary',
  children: 'Button',
  category: "p1"
};

export const Secondary = Template.bind({});

Secondary.args = {
  status: 'primary',
  children: 'Button',
  category: "p1"
};