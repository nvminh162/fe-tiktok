import classNames from "classnames/bind";
import PropTypes from 'prop-types'

import styles from './PopperWrapper.module.scss'

const cx = classNames.bind(styles)

function PopperWrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

PopperWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default PopperWrapper;
