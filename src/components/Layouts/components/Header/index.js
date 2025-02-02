import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

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

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setSearchResult([]);
    }, []);

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
                <img src={images.logo} alt="TikTok" />
                <TippyHeadless
                    interactive
                    appendTo={document.body}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Seach now..." spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>{<FontAwesomeIcon icon={faMagnifyingGlass} />}</button>
                    </div>
                </TippyHeadless>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
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
                            <img
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/bd971e6b3993bc24b15c926212982c37.jpeg?lk3s=a5d48078&nonce=56613&refresh_token=ec6cf3e980ba4a84dbb4799df780e3db&x-expires=1738558800&x-signature=7hagZpeDoCMhyaRgynX3eLwKPzg%3D&shp=a5d48078&shcp=81f88b70"
                                alt="Nguyen Van Minh"
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
