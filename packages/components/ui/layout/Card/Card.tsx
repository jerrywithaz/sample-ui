import React from "react";
import { useTheme } from "styled-components/native";
import * as Styled from "./Card.styled";
import { CardProps } from "./Card.types";

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  children,
  ...props
}) => {
  const theme = useTheme();
  return (
    <Styled.Card
      {...props}
      padding={theme.spacing.medium}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
      }}
    >
      {children}
    </Styled.Card>
  );
};

export default Card;
