import styled from 'styled-components/native';
import ButtonBase from '../ButtonBase';
import { ButtonProps } from './Button.types';

type StyledButtonProps = Omit<ButtonProps, 'children'>;

export const Button = styled(ButtonBase)<StyledButtonProps>`
    background-color: ${({ theme, status = "default" }) => theme.colors.status[status]};
    border: 0px;
    border-radius: ${({ theme, borderRadius = "pill" }) => theme.borderRadius[borderRadius]};
    padding: ${({ theme, size = "small" }) => `${theme.spacing[size]}px ${theme.spacing.large}px`};
`;