import { forwardRef, useState } from 'react';
import classNames from 'classnames';

// import images from '~/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallback, ...props }, ref) {
    const [_fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(fallback);
        // setFallback(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={_fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);
