import styled from "styled-components/native";
import { Platform } from "react-native";
import { FlexBox } from "../../layout/Box";
import { TextInputProps, TextInputStyleProps } from "./TextInput.types";

export const TextInputContainer = styled(FlexBox)<TextInputStyleProps>`
    ${() => Platform.OS === "web" ? "outline-width: 0.5px;": ""}
    ${({ theme }) => Platform.OS === "web" ? `outline-color: ${theme.colors.gray.dark}};`: ""}
    border-width: 0.5px;
    border-color: ${({ theme }) => theme.colors.gray.dark};
    border-radius: ${({ theme, borderRadius = "pill" }) => theme.borderRadius[borderRadius]};
`;

export const TextInput = styled.TextInput<TextInputProps>`
    ${() => Platform.OS === "web" ? "outline-width: 0px;": ""}
    border-width: 0px;
    padding: ${({ theme, size = "small" }) => `${theme.spacing[size]}px ${theme.spacing.large}px`};
`;