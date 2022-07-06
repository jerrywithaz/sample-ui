import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, FlexBox, Text } from "@zerry-ui/components";

export default {
  title: "Forms/Button",
  component: Button,
  argTypes: {
    size: {
      options: ["large", "medium", "small", "xSmall"],
      control: { type: "select" },
    },
    status: {
      options: ["default", "success", "danger", "warning"],
      control: { type: "select" },
    },
    borderRadius: {
      options: ["pill", "default", "sharp"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <FlexBox horizontal>
    <Button {...args} />
  </FlexBox>
);

export const Primary = Template.bind({});

Primary.args = {
  status: "default",
  borderRadius: "pill",
  children: "Button",
  size: "small",
};

export const Secondary = Template.bind({});

Secondary.args = {
  status: "default",
  borderRadius: "pill",
  children: "Button",
};
