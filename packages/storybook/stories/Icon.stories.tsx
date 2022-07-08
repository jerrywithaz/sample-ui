import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FlexBox, Icon } from "@zerry-ui/components";
import { FontAwesome } from '@expo/vector-icons';

export default {
  title: "Global/Icon",
  component: Icon,
  argTypes: {
    name: {
      options: Object.keys(FontAwesome.glyphMap).sort(),
      control: { type: "select" },
    },
  }
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
  <FlexBox flex={1}>
    <Icon {...args} />
  </FlexBox>
);

export const Primary = Template.bind({});

Primary.args = {
  name: "coffee",
  color: "#bd0101",
  size: 20,
};
