import React from "react";
import * as Styled from "./Card.styled";
import { CardProps } from "./Card.types";

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  children,
  header,
  footer,
  ...props
}) => {
  return (
    <Styled.Card
      {...props}
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
      {header && (
        <Styled.CardHeader>
          {typeof header === "function" ? header() : header}
        </Styled.CardHeader>
      )}

      <Styled.CardContent>
        {children}
      </Styled.CardContent>

      {footer && (
        <Styled.CardFooter>
          {typeof footer === "function" ? footer() : footer}
        </Styled.CardFooter>
      )}
    </Styled.Card>
  );
};

export default Card;
