import { HeaderOnly } from '~/components/Layouts';
import { Home, Following, Profile, Upload, Search } from '~/pages';
import routesConfig from '~/config/routes.js'

const publicRoutes = [
    { path: routesConfig.home, element: Home },
    { path: routesConfig.following, element: Following },
    { path: routesConfig.profile, element: Profile },
    { path: routesConfig.upload, element: Upload, layout: null },
    { path: routesConfig.search, element: Search, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };