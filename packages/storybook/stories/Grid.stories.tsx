import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  Grid,
  Row,
  Col,
  GridProps,
  RowProps,
  ColProps,
} from "@zerry-ui/components";

export default {
  title: "Layout/Grid",
  component: Grid,
  argTypes: {
    xs: {
      name: "xs",
      description: "Column size for extra small devices and below.",
      control: { type: "number" },
    },
    s: {
      name: "s",
      description: "Column size for small devices and above.",
      control: { type: "number" },
    },
    m: {
      name: "m",
      description: "Column size for medium devices and above.",
      control: { type: "number" },
    },
    lg: {
      name: "lg",
      description: "Column size for large devices and above.",
      control: { type: "number" },
    },
    xl: {
      name: "xl",
      description: "Column size for xlarge devices and above.",
      control: { type: "number" },
    },
    xxl: {
      name: "xxl",
      description: "Column size for xxlarge devices and above.",
      control: { type: "number" },
    },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (
  args: GridProps & RowProps & ColProps
) => {
  const { xs, s, m, lg, xl, xxl } = args;
  const colSizes = { xs, s, m, lg, xl, xxl };

  return (
    <Grid flex={1}>
      <Row gutter={args.gutter} wrap={args.wrap} fullWidth>
        <Col size={6} backgroundColor="red" {...colSizes} height={400}></Col>
        <Col size={6} backgroundColor="green" {...colSizes} height={400}></Col>
        <Col size={6} backgroundColor="blue" {...colSizes} height={400}></Col>
        <Col size={6} backgroundColor="yellow" {...colSizes} height={400}></Col>
      </Row>
    </Grid>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  gutter: 4,
  wrap: true,
  xs: 24,
  s: 24,
  m: 12,
  lg: 6,
  xl: 6,
  xxl: 6,
};
