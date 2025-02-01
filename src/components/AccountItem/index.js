import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/bd971e6b3993bc24b15c926212982c37.jpeg?lk3s=a5d48078&nonce=56613&refresh_token=ec6cf3e980ba4a84dbb4799df780e3db&x-expires=1738558800&x-signature=7hagZpeDoCMhyaRgynX3eLwKPzg%3D&shp=a5d48078&shcp=81f88b70"
                alt="Avatar User ID ..."
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van Minh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>@nvminh162</span>
            </div>
        </div>
    );
}

export default AccountItem;
