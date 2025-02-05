import classNames from 'classnames/bind';
import SuggestAccount from '~/components/SuggestAccounts';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem 
                    title="For You" 
                    to={config.routes.home} 
                    icon={<HomeIcon />} 
                    activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem 
                    title="LIVE" 
                    to={config.routes.live} 
                    icon={<LiveIcon />} 
                    activeIcon={<LiveActiveIcon />} 
                />
            </Menu>
            <SuggestAccount label="Suggest account"/>
            <SuggestAccount label="Following"/>
        </aside>
    );
}

export default Sidebar;
