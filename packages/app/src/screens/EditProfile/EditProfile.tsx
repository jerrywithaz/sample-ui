import {
  Button,
  FlexBox,
  Heading2,
  TextInput,
  Collapse,
  Text,
} from "@zerry-ui/components";
import { Platform } from "react-native";
import React from "react";

const CollapseHeader: React.FC<{ title: string }> = ({ title }) => {
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

const PersonalInformation = () => {
  return (
    <FlexBox
      flex={1}
      horizontal
      alignItems="flex-start"
      justifyContent="center"
      width="100%"
    >
      <FlexBox flex={1} vertical maxWidth={500} flexBasis="500px">
        <FlexBox marginBottom={16}>
          <TextInput placeholder="First Name" />
        </FlexBox>
        <FlexBox marginBottom={16}>
          <TextInput placeholder="Last Name" />
        </FlexBox>
        <FlexBox marginBottom={16}>
          <TextInput placeholder="08/11/1995" />
        </FlexBox>
        <FlexBox horizontal justifyContent="flex-end">
          <Button status="success">Submit</Button>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

const ContactInformation = () => {
  return (
    <FlexBox
      flex={1}
      horizontal
      alignItems="flex-start"
      justifyContent="center"
      width="100%"
    >
      <FlexBox flex={1} vertical maxWidth={500} flexBasis="500px">
        <FlexBox marginBottom={16}>
          <TextInput placeholder="Street Address 1" />
        </FlexBox>
        <FlexBox marginBottom={16}>
          <TextInput placeholder="Street Address 1" />
        </FlexBox>
        <FlexBox marginBottom={16}>
          <TextInput placeholder="City" />
        </FlexBox>
        <FlexBox horizontal justifyContent="flex-end">
          <Button status="success">Submit</Button>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

const EditProfile = () => {
  return (
    <FlexBox vertical flex={1} backgroundColor="#ffffff">
      {Platform.OS === "web" && <Heading2>Edit Profile</Heading2>}
      <Collapse>
        <Collapse.Panel
          header={<CollapseHeader title="Personal Information" />}
          id="personal-information"
          defaultOpen
        >
          <PersonalInformation />
        </Collapse.Panel>
        <Collapse.Panel
          header={<CollapseHeader title="Contact Information" />}
          id="contact-information"
        >
          <ContactInformation />
        </Collapse.Panel>
      </Collapse>
    </FlexBox>
  );
};

export default EditProfile;
