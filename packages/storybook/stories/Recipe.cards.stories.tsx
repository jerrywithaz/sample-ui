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
import {
  useDeviceSize,
  useIsXSmallDevice,
} from "@zerry-ui/components/devsupport/responsive";
import { ScrollView } from "react-native";

export default {
  title: "Recipes/Dashboard",
} as ComponentMeta<any>;

const LabelValueRowTable: React.FC<{
  left: React.ReactNode;
  right?: React.ReactNode;
  collapseOnMobile?: boolean;
}> = ({ left, right, collapseOnMobile }) => {
  const isxSmallDevice = useIsXSmallDevice();
  const collapse = isxSmallDevice && collapseOnMobile;

  return (
    <FlexBox
      horizontal={collapse ? false : true}
      vertical={collapse}
      width={isxSmallDevice ? undefined : "300px"}
      marginBottom={24}
    >
      <Box
        width={collapse ? undefined : 200}
        marginBottom={collapse ? 24 : undefined}
      >
        {left}
      </Box>
      {right && <Box alignSelf="flex-start">{right}</Box>}
    </FlexBox>
  );
};

const OverviewCard = () => {
  return (
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
        right={<LabelValue label="Email" value={`fakeuser@email.com`} />}
      />
      <LabelValueRowTable
        left={
          <LabelValue label="Address" value="88 Sommer St. Los Angeles, CA" />
        }
      />
    </Card>
  );
};

const VitalsCard = () => {
  return (
    <Card flex={1} marginVertical={16}>
      <LabelValueRowTable
        left={<LabelValue label="Blood Pressure" value="130/90" />}
        right={<LabelValue label="Pulse" value="60 bpm" />}
      />
      <LabelValueRowTable
        left={<LabelValue label="Temperature" value="100.4" />}
        right={<LabelValue label="Respiratory Rate" value="24" />}
      />
    </Card>
  );
};

const LabResultsCards = () => {
  return (
    <Card flex={1} marginVertical={16}>
      <Text>Card 3</Text>
    </Card>
  );
};

const AssesmentCard = () => {
  return (
    <Card flex={1} marginVertical={16}>
      <Text>Card 4</Text>
    </Card>
  );
};

const OrdersCard = () => {
  return (
    <Card flex={1} marginVertical={16}>
      <FlexBox flex={1}></FlexBox>
      <FlexBox horizontal alignItems="center" justifyContent="space-between">
        <Text>Welcome</Text>
        <Button status="success" borderRadius="pill" size="xSmall">
          Sign Up
        </Button>
      </FlexBox>
    </Card>
  );
};

const Template: ComponentStory<any> = (args) => {
  const isxSmallDevice = useIsXSmallDevice();
  const deviceSize = useDeviceSize();

  return (
    <Box flex={1}>
      <ScrollView style={{ flex: 1 }}>
        <Grid>
          <Row wrap gutter={args.gutter}>
            <Col xs={24} s={24} m={12} xl={10} minHeight={500}>
              <OverviewCard />
            </Col>
            <Col xs={24} s={24} m={12} xl={8} minHeight={500}>
              <VitalsCard />
              <LabResultsCards />
            </Col>
            <Col xs={24} s={24} xl={6} minHeight={500}>
              <AssesmentCard />
              <OrdersCard />
            </Col>
          </Row>
        </Grid>
      </ScrollView>
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
