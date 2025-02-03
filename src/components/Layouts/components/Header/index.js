import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Layouts/components/Search';
import routesConfig from '~/config/routes.js'

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        type: 'language options',
        title: 'English',
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'eng',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vie',
                    title: 'Vietnamese',
                },
                {
                    type: 'language',
                    code: 'jav',
                    title: 'Japanese',
                },
                {
                    type: 'language',
                    code: 'kor',
                    title: 'Korean',
                },
            ],
        },
    },
    {
        type: 'support',
        title: 'Feedback and help',
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        to: './feedback',
    },
    {
        type: 'assist',
        title: 'Keyboard shortcuts',
        icon: <FontAwesomeIcon icon={faKeyboard} />,
    },
];

const MENU_USER = [
    {
        type: 'view',
        title: 'View profile',
        icon: <FontAwesomeIcon icon={faUser} />,
        to: '/profile',
    },
    {
        type: 'coin',
        title: 'Get coins',
        icon: <FontAwesomeIcon icon={faCoins} />,
        to: '/coin',
    },
    {
        type: 'setting',
        title: 'Setting',
        icon: <FontAwesomeIcon icon={faGear} />,
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        type: 'logout',
        title: 'Log out',
        icon: <FontAwesomeIcon icon={faSignOut} />,
        to: './logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;
    //handle logic chooser
    const handleMenuChange = (menuItem) => {
        console.log('menuItem selected:', menuItem);
        switch (menuItem.type) {
            case 'language options':
                console.log('language selected');
                break;
            case 'support':
                console.log('support selected');
                break;
            case 'assist':
                console.log('assist selected');
                break;
            case 'language':
                console.log('language selected');
                break;
            default:
                break;
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}><img src={images.logo} alt="TikTok" /></Link>

                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>9+</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                            {/* <Button primary rounded className={cx('custom-login')}>Custom button</Button>  */}
                            {/* <Button primary iconRight={<FontAwesomeIcon icon={faSignIn} />}>Login</Button> */}
                        </>
                    )}
                    <Menu items={currentUser ? MENU_USER : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="co tinh loi duong dan"
                                alt="User avatar"
                                // fallback="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM21zTXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--1708833dec7d26bb4cd56eceeb74827cff470cce/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--79eee5883893a012786006950460867831e6f661/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
