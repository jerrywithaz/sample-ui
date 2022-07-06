/// <reference path="../../components/declaration/react-native.d.ts" />

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonBase, Box, FlexBox } from "@zerry-ui/components";

export default {
  title: "Forms/ButtonBase",
  component: ButtonBase,
  argTypes: {},
} as ComponentMeta<typeof ButtonBase>;

const Template: ComponentStory<typeof ButtonBase> = (args) => (
  <FlexBox horizontal>
  <ButtonBase {...args} />
  </FlexBox>
);

export const Primary = Template.bind({});

Primary.args = {
  interactionStyles: {
    normal: {
      button: {
        backgroundColor: "red",
      },
      text: {
        color: "#ffffff",
      },
    },
    hovered: {
      button: {
        backgroundColor: "blue",
      },
    },
    focused: {
      button: {
        backgroundColor: "black",
      }
    },
    pressed: {
      button: {
        backgroundColor: "pink"
      }
    }
  },
  children: "Click Me",
};
