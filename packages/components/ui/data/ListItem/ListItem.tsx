import React from "react";
import { AccessibilityRole, View } from "react-native";
import Text from "../../global/Text";
import { FlexBox } from "../../layout/Box";
import { ListItemProps } from "./ListItem.types";

function ListItem<Data extends any>({
  children,
  title,
  description,
  accessibilityRole,
  forwardedRef,
  ...props
}: React.PropsWithChildren<ListItemProps<Data>>) {
  return (
    <FlexBox ref={forwardedRef} horizontal paddingHorizontal={8} paddingVertical={12} {...props} accessibilityRole={accessibilityRole as AccessibilityRole} width="100%">
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

function ListItemInner<Data extends any>(props: React.PropsWithChildren<ListItemProps<Data>>, ref: React.Ref<View>) {
  return <ListItem {...props} forwardedRef={ref} />
};

const ListItemWithRef = React.forwardRef(ListItemInner) as <Data extends any>(
  props: React.PropsWithChildren<ListItemProps<Data>>& { ref?: React.ForwardedRef<View> }
) => ReturnType<typeof ListItemInner>;;

export default ListItemWithRef;
