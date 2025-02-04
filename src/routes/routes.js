import { HeaderOnly } from '~/layouts';
import { Home, Following, Profile, Upload, Search } from '~/pages';
import config from '~/config';

const publicRoutes = [
    { path: config.routes.home, element: Home },
    { path: config.routes.following, element: Following },
    { path: config.routes.profile, element: Profile },
    { path: config.routes.upload, element: Upload, layout: null },
    { path: config.routes.search, element: Search, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };