import styled from "styled-components/native";
import { Platform } from 'react-native';
import Box from "../Box";

export const Card = styled(Box)`
    border-radius: ${({ theme }) => theme.borderRadius.card};
    background-color: ${({ theme }) => theme.colors.white.default};
    min-height: ${Platform.OS === "web" ? "fit-content" : 0};
`;