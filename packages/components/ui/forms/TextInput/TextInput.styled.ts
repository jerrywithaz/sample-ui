import styled from "styled-components/native";
import { FlexBox } from "../../layout/Box";
import { TextInputProps, TextInputStyleProps } from "./TextInput.types";

export const TextInputContainer = styled(FlexBox)<TextInputStyleProps>`
    outline-width: 0.5px;
    border-width: 0.5px;
    outline-color: ${({ theme }) => theme.colors.gray.dark};
    border-color: ${({ theme }) => theme.colors.gray.dark};
    border-radius: ${({ theme, borderRadius = "pill" }) => theme.borderRadius[borderRadius]};
`;

export const TextInput = styled.TextInput<TextInputProps>`
    outline-width: 0px;
    border-width: 0px;
    padding: ${({ theme, size = "small" }) => `${theme.spacing[size]}px ${theme.spacing.large}px`};
`;