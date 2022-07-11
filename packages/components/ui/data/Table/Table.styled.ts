import styled from "styled-components/native";
import { FlexBox } from "../../layout/Box";

export const Table = styled(FlexBox)<{ isMinSmallDevice: boolean }>`
    border-width: ${({ isMinSmallDevice }) => isMinSmallDevice ? "1px" : "0px"};
    border-color: ${({ theme }) => theme.colors.gray.light};
    border-radius: ${({ theme }) => theme.borderRadius.default};
`;