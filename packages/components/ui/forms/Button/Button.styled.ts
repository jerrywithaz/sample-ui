import TouchableWeb from '../../../devsupport/components/TouchableWeb';
import styled from 'styled-components/native';
import { ButtonProps } from './Button.types';

type StyledButtonProps = Omit<ButtonProps, 'children'>;

export const Button = styled.View<StyledButtonProps>`
    background-color: ${({ theme, status = "primary" }) => theme.colors.status[status]};
    border: 0px;
    border-radius: ${({ theme, borderRadius = "default" }) => theme.borderRadius[borderRadius]};
    padding: ${({ theme, size = "medium" }) => theme.spacing[size]}px;
    
    &:hover {
    }
`;