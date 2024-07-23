import routesConfig from '~/config/routes'
import DefaultLayout from '~/Layout/DefaultLayout';
import Home from '~/pages/Home';
import Product from '~/pages/Product';

export const clientRoutes = [
    { path: routesConfig.home, component: Home, layout: DefaultLayout },
    { path: routesConfig.product, component: Product, layout: DefaultLayout }
];