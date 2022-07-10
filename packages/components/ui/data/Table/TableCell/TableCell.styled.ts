import { FlexBox } from "../../../layout/Box";
import styled from "styled-components/native";

export const TableCell = styled(FlexBox)`
    padding: ${({ theme }) => theme.spacing.small}px;
`;