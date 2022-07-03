import styled from "styled-components/native";
import Box from "../Box";

export const Card = styled(Box)`
    background-color: ${({ theme }) => theme.shadow.card};
`;