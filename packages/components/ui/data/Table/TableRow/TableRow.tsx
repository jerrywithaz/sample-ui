import React from "react";
import { FlexBox } from "../../../layout/Box";
import { useIsSmallDevice } from "../../../../devsupport/responsive";
import Card from "../../../layout/Card";

function TableRowWrapper({ children }: React.PropsWithChildren<{}>) {
  const isSmallDevice = useIsSmallDevice();

  if (isSmallDevice) {
    return <>{children}</>;
  } else {
    return <Card marginBottom={16} marginHorizontal={16}>{children}</Card>;
  }
}

function TableRow({ children }: React.PropsWithChildren<{}>) {
  const isSmallDevice = useIsSmallDevice();

  return (
    <TableRowWrapper>
      <FlexBox horizontal={isSmallDevice} vertical={!isSmallDevice} flex={!isSmallDevice ? 1 : undefined}>
        {children}
      </FlexBox>
    </TableRowWrapper>
  );
}

export default TableRow;
