export default [
    {
        path: '/',
        component: require('../view/layout/FrontLayout').default,
        children: [
            {path: '', component: require('../view/Home').default},
            {path: '/Products', component: require('../view/Products').default},
            {path: '/Products/:id/:string', component: require('../view/showProduct').default},
            {path: '/cart', component: require('../view/cart').default},
            {path: '/shipping', component: require('../view/shipping').default},
            {
                path: '/userProfile', component: require('../view/layout/userProfile').default, children: [
                    { path: '', component: require('../view/userProfile/dashboard').default},
                    { path: 'myOrders', component: require('../view/userProfile/myOrders').default}
                ]
            },
        ]
    },
    {
        path: '/profile', component: require('../view/layout/ProfileLayout').default, children: [
            {path: '', component: require('../view/user/profile').default},
            {path: 'orders', component: require('../view/user/orders').default},
            {path: 'product', component: require('../view/user/product').default},
            {path: 'addProduct', component: require('../view/user/addProduct').default},
            {path: 'editProfile', component: require('../view/user/editProfile').default},
            {path: 'chat', component: require('../view/user/chat').default},

        ]
    },

    {path: '/login', component: require('../view/Auth/Login').default},
    {
        path: '/404',
        component: require('../view/Error/NotFound').default,
    },
    {
        path: '/403',
        component: require('../view/Error/AccessDenied').default,
    },
    {
        path: '*',
        component: require('../view/Error/NotFound').default,
    }
]
