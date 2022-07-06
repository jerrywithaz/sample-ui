import React from "react";
import Text from "../../global/Text";
import { FlexBox } from "../../layout/Box";
import { ListItemProps } from "./ListItem.types";

function ListItem<Data extends any>({
  children,
  title,
  description,
  ...props
}: React.PropsWithChildren<ListItemProps<Data>>) {
  return (
    <FlexBox horizontal {...props} paddingHorizontal={8} paddingVertical={12}>
      {children ? (
        children
      ) : (
        <>
          <FlexBox vertical wrapText>
            <Text fontSize="medium">{title}</Text>
            <Text fontSize="small">{description}</Text>
          </FlexBox>
        </>
      )}
    </FlexBox>
  );
}

export default ListItem;
