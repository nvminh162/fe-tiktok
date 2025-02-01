import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    text = false,
    disabled = false,
    small = false,
    large = false,
    iconLeft,
    iconRight,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Com = 'button';
    const props = { onClick, ...passProps };

    //remove event if has disabled button
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Com = Link;
    } else if (href) {
        props.href = href;
        Com = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        rounded,
        text,
        disabled,
        small,
        large,
        [className]: className,
    });

    return (
        <Com className={classes} {...props}>
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            <span className={cx('title')}>{children}</span>
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}
        </Com>
    );
}

export default Button;
