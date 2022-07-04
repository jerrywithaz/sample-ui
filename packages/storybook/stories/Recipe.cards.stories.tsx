import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  Box,
  Card,
  Col,
  FlexBox,
  Grid,
  Row,
  Text,
  Button,
  LabelValue,
} from "@zerry-ui/components";
import { useIsXSmallDevice } from "@zerry-ui/components/devsupport/responsive";

export default {
  title: "Recipes/Dashboard",
} as ComponentMeta<any>;

// const DrawerStack = createDrawerNavigator();

const LabelValueRow: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const isxSmallDevice = useIsXSmallDevice();

  return (
    <FlexBox
      horizontal
      justifyContent="space-between"
      fullWidth={isxSmallDevice}
      width={isxSmallDevice ? undefined : "300px"}
      flexGrow={0}
      flexShrink={0}
      marginBottom={24}
    >
      {children}
    </FlexBox>
  );
};

const LabelValueRowTable: React.FC<{
  left: React.ReactNode;
  right?: React.ReactNode;
  collapseOnMobile?: boolean
}> = ({ left, right, collapseOnMobile }) => {
  const isxSmallDevice = useIsXSmallDevice();
  const collapse = isxSmallDevice && collapseOnMobile;

  return (
    <FlexBox
      horizontal={collapse ? false : true}
      vertical={collapse}
      fullWidth={isxSmallDevice}
      width={isxSmallDevice ? undefined : "300px"}
      flexGrow={0}
      flexShrink={0}
      marginBottom={24}
    >
      <Box width={collapse ? undefined : 200} marginBottom={collapse ? 24 : undefined} fullWidth={collapse}>{left}</Box>
      {right && <Box alignSelf="flex-start">{right}</Box>}
    </FlexBox>
  );
};

const Template: ComponentStory<any> = (args) => {
  const isxSmallDevice = useIsXSmallDevice();

  return (
    <Box flex={1}>
      <Grid>
        <Row wrap={isxSmallDevice} gutter={args.gutter}>
          <Col size={10} xs={24} minHeight={500}>
            <Card flex={1} marginVertical={16}>
              <LabelValueRowTable
                left={<LabelValue label="Allergy" value="Peniccilen" />}
                right={<LabelValue label="Blood Type" value="B -" />}
              />
              <LabelValueRowTable
                left={<LabelValue label="Date of birth" value="05/16/1995" />}
                right={<LabelValue label="Conditions" value="Asthma" />}
              />
              <LabelValueRowTable
                left={<LabelValue label="Weight" value="165 lbs" />}
                right={<LabelValue label="Height" value={`5' 7"`} />}
              />
              <LabelValueRowTable
                collapseOnMobile
                left={<LabelValue label="Phone" value="(555) 555-5555" />}
                right={
                  <LabelValue label="Email" value={`fakeuser@email.com`} />
                }
              />
              <LabelValueRowTable
                left={
                  <LabelValue
                    label="Address"
                    value="88 Sommer St. Los Angeles, CA"
                  />
                }
              />
            </Card>
          </Col>
          <Col size={8} xs={24} minHeight={500}>
            <Card flex={1} marginVertical={16}>
              <Text>Card 2</Text>
            </Card>
            <Card flex={1} marginVertical={16}>
              <Text>Card 3</Text>
            </Card>
          </Col>
          <Col size={6} xs={24} minHeight={500}>
            <Card flex={1} marginVertical={16}>
              <Text>Card 4</Text>
            </Card>
            <Card flex={1} marginVertical={16}>
              <FlexBox flex={1}></FlexBox>
              <FlexBox
                horizontal
                alignItems="center"
                justifyContent="space-between"
              >
                <Text>Welcome</Text>
                <Button status="success" borderRadius="pill" size="xSmall">
                  Sign Up
                </Button>
              </FlexBox>
            </Card>
          </Col>
        </Row>
      </Grid>
    </Box>
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
