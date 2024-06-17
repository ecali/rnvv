import {LoginPage} from "../pages/LoginPage";
import {NavigationItemModel} from "../models/navigation.model";
import {Platform} from "../pages/Platform";
import {RegisterPage} from "../pages/RegisterPage";
import {Homepage} from "../pages/Homepage";
import {PlatformLayout} from "../layouts/PlatformLayout";

export const NavigationItems: NavigationItemModel[] = [
    {
        path: '/',
        name: 'home',
        component: <Homepage />,
        showOnMenu: true
    },{
        path: '/login',
        name: 'login',
        component: <LoginPage />,
        showOnMenu: false
    },{
        path: '/register',
        name: 'register',
        component: <RegisterPage />,
        showOnMenu: false
    },{
        path: '/platform',
        name: 'platform',
        component: <PlatformLayout children={<Platform />} />,
        showOnMenu: true
    }
]