import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestAccounts.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import PopperWrapper from '../PopperWrapper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                   <AccountPreview/> 
                </PopperWrapper>
            </div>
        )
    }

    return (
        <Tippy
            interactive
            delay={[800, 0]}
            render={renderPreview}
            appendTo={document.body}
            placement="bottom"
            offset={[-20, 0]}
        >
            <div className={cx('account-item')}>
                <img className={cx('avatar')} src={images.ownProject} alt="user"/>
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>nvminh162</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}/>
                    </p>
                    <p className={cx('name')}>Nguyễn Văn Minh</p>
                </div>
            </div>
        </Tippy>
    );
}

export default AccountItem;
