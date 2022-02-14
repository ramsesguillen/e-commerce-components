import { ButtonProps as BaseButtonProps } from '@restart/ui/Button';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
import { ButtonVariant } from './types';
export interface ButtonProps extends BaseButtonProps, Omit<BsPrefixProps, 'as'> {
    active?: boolean;
    variant?: ButtonVariant;
    size?: 'sm' | 'lg';
    icon?: string | object;
    loading?: boolean;
    label?: string;
}
export declare type CommonButtonProps = 'href' | 'size' | 'variant' | 'disabled';
export declare const Button: BsPrefixRefForwardingComponent<'button', ButtonProps>;
export default Button;
