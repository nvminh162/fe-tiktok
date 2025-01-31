import { HeaderOnly } from '~/components/Layouts';
import { Home, Following, Profile, Upload, Search } from '~/pages';

const publicRoutes = [
    { path: '/', element: Home },
    { path: '/following', element: Following },
    { path: '/profile', element: Profile },
    { path: '/upload', element: Upload, layout: null },
    { path: '/search', element: Search, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };