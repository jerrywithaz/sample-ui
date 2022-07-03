import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Grid, Row, Col, GridProps, RowProps } from '@zerry-ui/components';

export default {
  title: 'Layout/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args: GridProps & RowProps) => {
  return (
    <Grid flex={1}>
      <Row gutter={args.gutter} flex={1} colPadding={args.colPadding} wrap={args.wrap}>
        <Col size={6} backgroundColor="red" xs={24} m={6} height={400}></Col>
        <Col size={6} backgroundColor="green" xs={24}  m={6} height={400}></Col>
        <Col size={6} backgroundColor="blue" xs={24} m={6} height={400}></Col>
        <Col size={6} backgroundColor="yellow" xs={24} m={6} height={400}></Col>
      </Row>
    </Grid>
  )
};

export const Primary = Template.bind({});

Primary.args = {
  gutter: 4,
  colPadding: 12,
  wrap: true
};