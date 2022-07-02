import styled from "styled-components/native";
import { TextProps } from "./Text.types";

export const Text = styled.Text<TextProps>`
    color: ${({ theme, status = "primary" }) => theme.colors[status].default};
    font-size: 18px;
`;