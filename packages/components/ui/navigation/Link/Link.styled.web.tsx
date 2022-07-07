import { Link as NavtiveLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavtiveLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary.default};
`;
