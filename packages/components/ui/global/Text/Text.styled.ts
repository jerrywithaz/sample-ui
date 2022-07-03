import styled from "styled-components/native";
import { TextProps } from "./Text.types";

export const Text = styled.Text<TextProps>`
    color: ${({ theme, status, color }) => {
        if (color) return color;
        if (status) return theme.colors.status[status];
        return theme.colors.secondary.default;
    }};
    font-size: ${({ theme, fontSize = "small" }) => theme.typography.fontSizes[fontSize].pixel};
`;