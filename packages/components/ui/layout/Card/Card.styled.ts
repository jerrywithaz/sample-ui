import styled from "styled-components/native";
import Box from "../Box";

export const Card = styled(Box)`
    border-radius: ${({ theme }) => theme.borderRadius.card};
    background-color: ${({ theme }) => theme.colors.white.default};
    overflow: visible;
    z-index: 999;
`;