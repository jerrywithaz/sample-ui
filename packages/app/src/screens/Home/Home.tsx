import React from "react";
import {
  Box,
  Card,
  Col,
  FlexBox,
  Grid,
  Heading3,
  LabelValue,
  List,
  ListItem,
  Row,
  useResponsiveProp,
  Button
} from "@zerry-ui/components";
import { ScrollView } from "react-native";

const TwoColumnGrid: React.FC<{
  left: React.ReactNode;
  right?: React.ReactNode;
  collapseOnMobile?: boolean;
}> = ({ left, right, collapseOnMobile }) => {
  const collapse = useResponsiveProp(
    false,
    {
      xs: collapseOnMobile,
    },
    false
  );

  const width = useResponsiveProp(
    "50%",
    {
      xs: "50%",
    },
    true
  );

  return (
    <FlexBox
      horizontal={collapse ? false : true}
      vertical={collapse}
      marginBottom={24}
      wrap
    >
      <Box
        width={width}
        marginBottom={collapse ? 24 : undefined}
      >
        {left}
      </Box>
      {right && <Box width={width} alignSelf="flex-start">{right}</Box>}
    </FlexBox>
  );
};

const OverviewCard = () => {
  return (
    <Card flex={1} marginVertical={16} header={<Heading3>Overview</Heading3>}>
      <TwoColumnGrid
        left={<LabelValue label="Allergy" value="Peniccilen" />}
        right={<LabelValue label="Blood Type" value="B -" />}
      />
      <TwoColumnGrid
        left={<LabelValue label="Date of birth" value="05/16/1995" />}
        right={<LabelValue label="Conditions" value="Asthma" />}
      />
      <TwoColumnGrid
        left={<LabelValue label="Weight" value="165 lbs" />}
        right={<LabelValue label="Height" value={`5' 7"`} />}
      />
      <TwoColumnGrid
        collapseOnMobile
        left={<LabelValue label="Phone" value="(555) 555-5555" />}
        right={<LabelValue label="Email" value={`fakeuser@email.com`} />}
      />
      <TwoColumnGrid
        left={
          <LabelValue label="Address" value="88 Sommer St. Los Angeles, CA" />
        }
      />
    </Card>
  );
};

const VitalsCard = () => {
  return (
    <Card flex={1} marginVertical={16} header={<Heading3>Vitals</Heading3>}>
      <TwoColumnGrid
        left={<LabelValue label="Blood Pressure" value="130/90" />}
        right={<LabelValue label="Pulse" value="60 bpm" />}
      />
      <TwoColumnGrid
        left={<LabelValue label="Temperature" value="100.4" />}
        right={<LabelValue label="Respiratory Rate" value="24" />}
      />
    </Card>
  );
};

const LabResultsCards = () => {
  return (
    <Card
      flex={1}
      marginVertical={16}
      header={<Heading3>Lab Results</Heading3>}
    >
      <TwoColumnGrid
        left={<LabelValue label="Date" value="15 June 2020" />}
        right={<LabelValue label="Time" value="10:00 AM" />}
      />
    </Card>
  );
};

const AssesmentCard = () => {
  return (
    <Card flex={1} marginVertical={16} header={<Heading3>Assessment</Heading3>}>
      <TwoColumnGrid
        left={<LabelValue label="Date" value="15 June 2020" />}
        right={<LabelValue label="Time" value="10:00 AM" />}
      />
    </Card>
  );
};

const OrdersCard = () => {
  return (
    <Card
      flex={2}
      marginVertical={16}
      header={<Heading3>Prescriptions</Heading3>}
      footer={
        <FlexBox horizontal alignItems="center" justifyContent="flex-end">
          <Button status="success" borderRadius="pill" size="xSmall">
            Add
          </Button>
        </FlexBox>
      }
    >
      <FlexBox flex={1}>
        <List
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
          getItemId={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <ListItem title={item.name} description={item.description} />
            );
          }}
        />
      </FlexBox>
    </Card>
  );
};

const Home = () => {
  const columnHeight = useResponsiveProp(
    600,
    {
      xs: undefined,
      s: undefined,
      m: 600,
    },
    true
  );

  return (
    <Box flex={1}>
      <ScrollView style={{ flex: 1 }} nestedScrollEnabled>
        <Grid flex={1}>
          <Row wrap gutter={16} flex={1}>
            <Col xs={24} s={24} m={12} xl={10} minHeight={columnHeight}>
              <OverviewCard />
            </Col>
            <Col xs={24} s={24} m={12} xl={8} minHeight={columnHeight}>
              <VitalsCard />
              <LabResultsCards />
            </Col>
            <Col xs={24} s={24} xl={6} minHeight={columnHeight}>
              <AssesmentCard />
              <OrdersCard />
            </Col>
          </Row>
        </Grid>
      </ScrollView>
    </Box>
  );
};

export default Home;
