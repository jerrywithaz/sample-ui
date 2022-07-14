import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Collapse, FlexBox, Text } from "@zerry-ui/components";
import { faker } from "@faker-js/faker";

export default {
  title: "Layout/Collapse",
  component: Collapse,
} as ComponentMeta<typeof Collapse>;

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <FlexBox
      backgroundColor="#efefef"
      paddingHorizontal={12}
      paddingVertical={12}
    >
      <Text>{title}</Text>
    </FlexBox>
  );
};
const Template: ComponentStory<typeof Collapse> = (args) => (
  <Collapse>
    <Collapse.Panel header={<Header title="Panel 1" />} id="panel1">
      <FlexBox flex={1}>
        <Text>{faker.lorem.paragraphs(3)}</Text>
      </FlexBox>
    </Collapse.Panel>
    <Collapse.Panel header={<Header title="Panel 2" />} id="panel2">
      <FlexBox flex={1}>
        <Text>{faker.lorem.paragraphs(3)}</Text>
      </FlexBox>
    </Collapse.Panel>
    <Collapse.Panel header={<Header title="Panel 3" />} id="panel3">
      <FlexBox flex={1}>
        <Text>{faker.lorem.paragraphs(3)}</Text>
      </FlexBox>
    </Collapse.Panel>
  </Collapse>
);

export const Primary = Template.bind({});

Primary.args = {};
