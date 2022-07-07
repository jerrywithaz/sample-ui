import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  FlexBox,
  List,
  ListItem,
  ListRenderItem,
  FixedHeightList,
  VariableHeightList,
} from "@zerry-ui/components";

export default {
  title: "Layout/List",
  component: List,
} as ComponentMeta<typeof List>;

const RenderFixedHeightItem: ListRenderItem<{ id: number }> = (type, item) => {
  return (
    <ListItem title={`${Math.random()}`} description={`${Math.random()}`} />
  );
};

const RenderVariableHeightItem: ListRenderItem<{ id: number, name: string; description: string; }> = (
  type,
  item
) => {
  return (
    <ListItem title={item.name} description={item.description} />
  );
};

const FixedHeightTemplate: ComponentStory<typeof List> = (args) => (
  <FlexBox flex={1} vertical width={300}>
    <FixedHeightList
      data={[{ id: 1 }, { id: 2 }]}
      renderItem={RenderFixedHeightItem}
      rowHeight={60}
    />
  </FlexBox>
);

const VariableHeightTemplate: ComponentStory<typeof List> = (args) => (
  <FlexBox flex={1} vertical width={300}>
    <VariableHeightList
      data={[
        {
          id: 1,
          name: "Presciption 1",
          description:
            "Prescribed on June 10th for chronic fatigue. Will take for 3 days and report on effects.",
        },
        {
          id: 2,
          name: "Presciption 2",
          description: "Prescribed on April 20th for you know...",
        },
      ]}
      renderItem={RenderVariableHeightItem}
    />
  </FlexBox>
);

export const FixedHeight = FixedHeightTemplate.bind({});

FixedHeight.args = {};

export const VariableHeight = VariableHeightTemplate.bind({});

VariableHeight.args = {};
