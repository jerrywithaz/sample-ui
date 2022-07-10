import React from "react";
import { TextInputProps } from "./TextInput.types";
import * as Styled from "./TextInput.styled";
import FalsyFC from "../../../devsupport/components/FalsyFC";
import { useTheme } from "styled-components/native";

const TextInput: React.FC<TextInputProps> = ({
  borderRadius,
  size = "small",
  accessoryLeft,
  accessoryRight,
  ...inputProps
}) => {
  const theme = useTheme();

  return (
    <Styled.TextInputContainer
      borderRadius={borderRadius}
      size={size}
      alignItems="center"
      horizontal
    >
      {accessoryLeft && (
        <Styled.TextInputAccessory
          paddingRight={theme.spacing.medium}
        >
          <FalsyFC component={accessoryLeft} />
        </Styled.TextInputAccessory>
      )}

      <Styled.TextInput {...inputProps} />
      {accessoryRight && (
        <Styled.TextInputAccessory paddingLeft={theme.spacing.medium}>
          <FalsyFC component={accessoryRight} />
        </Styled.TextInputAccessory>
      )}
    </Styled.TextInputContainer>
  );
};

export default TextInput;
