import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SuggestAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem/>
            <AccountItem/>
            <AccountItem/>
            <AccountItem/>
            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}

SuggestAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestAccounts;
