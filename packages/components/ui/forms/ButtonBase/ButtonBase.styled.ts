import styled from 'styled-components/native';
import { ButtonBaseProps } from './ButtonBase.types';
import { Pressable as NativePressable } from 'react-native';

type StyledButtonBaseProps = Omit<ButtonBaseProps, 'children'>;

export const Pressable = styled(NativePressable)<StyledButtonBaseProps>`
    cursor: pointer;
    padding: ${({ theme }) => `${theme.spacing.small}px ${theme.spacing.small}px`};
    border-radius: ${({ theme }) => theme.borderRadius.default};
`;

export const ButtonBase = styled.View<StyledButtonBaseProps>`
    border: 0px;
`;