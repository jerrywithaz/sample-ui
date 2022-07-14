import React, { useMemo } from "react";
import { AccessibilityRole, ScrollView } from "react-native";
import { useTheme } from "styled-components/native";
import { FlexBox } from "../../../layout/Box";
import TableCell from "../TableCell";
import TableRow from "../TableRow";
import { TableHeadProps } from "./TableHead.types";

function TableHead<Data extends any>({
  isMinSmallDevice,
  headerGroups,
}: TableHeadProps<Data>) {
  const theme = useTheme();
  
  const scrollViewStyle = useMemo(
    () => ({ flex: 1, backgroundColor: theme.colors.gray.lighter }),
    [theme]
  );

  if (!isMinSmallDevice) return null;

  return (
    <FlexBox
      vertical
      accessibilityRole={"rowgroup" as AccessibilityRole}
      flexShrink={0}
      flexBasis="44px"
    >
      <ScrollView horizontal style={scrollViewStyle}>
        {headerGroups.map((headerGroup, index) => {
          return (
            <TableRow
              key={headerGroup.id}
              id={headerGroup.id}
              index={index}
              isMinSmallDevice={isMinSmallDevice}
            >
              {headerGroup.headers.map((header) => {
                return <TableCell<Data, any> key={header.id} header={header} />;
              })}
            </TableRow>
          );
        })}
      </ScrollView>
    </FlexBox>
  );
}

export default TableHead;
