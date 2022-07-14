import styled from "styled-components/native";
import { Platform } from 'react-native';
import Box, { FlexBox } from "../Box";

export const Card = styled(FlexBox)`
    border-radius: ${({ theme }) => theme.borderRadius.card};
    background-color: ${({ theme }) => theme.colors.white.default};
    min-height: ${Platform.OS === "web" ? "fit-content" : 0};
    padding: ${({ theme }) => theme.spacing.medium}px;
`;

export const CardContent = styled(FlexBox)`
    /* flex: 1; */
`;

export const CardHeader = styled(Box)`
    flex-shrink: 0;
    margin-bottom: ${({ theme }) => theme.spacing.medium}px;
`;

export const CardFooter = styled(Box)`
    flex-shrink: 0;
    margin-top: ${({ theme }) => theme.spacing.medium}px;
`;