import classNames from 'classnames';
import * as React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    useButtonProps,
    ButtonProps as BaseButtonProps,
} from '@restart/ui/Button';
import { useBootstrapPrefix } from './ThemeProvider';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from './helpers';
import { ButtonVariant } from './types';

export interface ButtonProps
    extends BaseButtonProps,
        Omit<BsPrefixProps, 'as'> {
    active?: boolean;
    variant?: ButtonVariant;
    size?: 'sm' | 'lg';
    icon?: string | object;
    loading?: boolean;
    label?: string;
}

export type CommonButtonProps = 'href' | 'size' | 'variant' | 'disabled';

const propTypes = {
    /**
     * @default 'btn'
     */
    bsPrefix: PropTypes.string,
    /**
     * @default 'label'
     */
    label: PropTypes.string,

    /**
     * One or more button variant combinations
     *
     * buttons may be one of a variety of visual variants such as:
     *
     * `'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'link'`
     *
     * as well as "outline" versions (prefixed by 'outline-*')
     *
     * `'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info', 'outline-dark', 'outline-light'`
     */
    variant: PropTypes.string,

    /**
     * Specifies a large or small button.
     *
     * @type ('sm'|'lg')
     */
    size: PropTypes.string,

    /**
     * Specifies class icon.
     *
     */
    icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
      ]),

    /** Manually set the visual state of the button to `:active` */
    active: PropTypes.bool,

    /** Manually set the visual state of the button to `:loading` */
    loading: PropTypes.bool,
    /**
     * Disables the Button, preventing mouse events,
     * even if the underlying component is an `<a>` element
     */
    disabled: PropTypes.bool,

    /** Providing a `href` will render an `<a>` element, _styled_ as a button. */
    href: PropTypes.string,

    /**
     * Defines HTML button type attribute.
     *
     * @default 'button'
     */
    type: PropTypes.oneOf(['button', 'reset', 'submit', null]),

    as: PropTypes.elementType,
};

const defaultProps = {
    variant: 'primary',
    active: false,
    disabled: false,
    loading: false
};

export const Button: BsPrefixRefForwardingComponent<'button', ButtonProps> =
    React.forwardRef<HTMLButtonElement, ButtonProps>(
        (
            {
                as,
                bsPrefix,
                variant,
                size,
                loading,
                label,
                icon,
                children,
                active,
                className,
                ...props
            },
            ref
        ) => {
            const prefix = useBootstrapPrefix(bsPrefix, 'btn');
            const [buttonProps, { tagName }] = useButtonProps({
                tagName: as,
                ...props,
            });

            const Component = tagName as React.ElementType;
            
            if(loading){
                props.disabled = true;
                icon = 'fal fa-asterisk fa-spin';
            }
            
            const getIcon = (valueIcon: any) => {
                if( typeof valueIcon === 'string'){
                    return (<i className={valueIcon}></i>);
                }
                return (<FontAwesomeIcon icon={valueIcon} />);
            }

            return (
                <Component
                    {...buttonProps}
                    {...props}
                    ref={ref}
                    className={classNames(
                        className,
                        prefix,
                        active && 'active',
                        variant && `${prefix}-${variant}`,
                        size && `${prefix}-${size}`,
                        props.href && props.disabled && 'disabled',
                        loading && 'disabled'
                    )}
                >
                    {icon && getIcon(icon) } { label ? label : children }
                </Component>
            );
        }
    );

Button.displayName = 'Button';
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
