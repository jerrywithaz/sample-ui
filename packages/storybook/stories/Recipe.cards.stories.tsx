import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Box, Card, Col, FlexBox, Grid, Row, Text, Button } from "@zerry-ui/components";
import { useIsXSmallDevice } from "@zerry-ui/components/devsupport/responsive";
import { ScrollView } from "react-native";

export default {
  title: "Recipes/Dashboard",
} as ComponentMeta<any>;

const Template: ComponentStory<any> = (args) => {
  const isxSmallDevice = useIsXSmallDevice();

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
      <Box flex={1} backgroundColor="#F7F8FD">
        <Grid>
          <Row wrap={isxSmallDevice} gutter={args.gutter}>
            <Col size={12} xs={24} height={500}>
              <Card flex={1} marginVertical={16}>
                <Text>Card 1</Text>
              </Card>
            </Col>
            <Col size={6} xs={24} height={500}>
              <Card flex={1} marginVertical={16}>
                <Text>Card 2</Text>
              </Card>
              <Card flex={1} marginVertical={16}>
                <Text>Card 3</Text>
              </Card>
            </Col>
            <Col size={6} xs={24} height={500}>
              <Card flex={1} marginVertical={16}>
                <Text>Card 4</Text>
              </Card>
              <Card flex={1} marginVertical={16}>
                <FlexBox flex={1}></FlexBox>
                <FlexBox horizontal alignItems="center" justifyContent="space-between">
                  <Text>Welcome</Text>
                  <Button status="success" borderRadius="pill" size="xSmall">Sign Up</Button>
                </FlexBox>
              </Card>
            </Col>
          </Row>
        </Grid>
      </Box>
    </ScrollView>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  gutter: {
    xs: 8,
    s: 8,
    m: 16,
  },
};
