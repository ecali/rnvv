import {LoginPage} from "../pages/LoginPage";
import {NavigationItemModel, NavigationName} from "../models/navigation.model";
import {Platform} from "../pages/Platform";
import {RegisterPage} from "../pages/RegisterPage";
import {Homepage} from "../pages/Homepage";
import {PlatformLayout} from "../layouts/PlatformLayout";

export const NavigationItems: NavigationItemModel[] = [
    {
        path: '/',
        name: NavigationName.home,
        component: <Homepage />,
        showOnMenu: true
    },{
        path: '/login',
        name: NavigationName.login,
        component: <LoginPage />,
        showOnMenu: false
    },{
        path: '/register',
        name: NavigationName.register,
        component: <RegisterPage />,
        showOnMenu: false
    },{
        path: '/platform',
        name: NavigationName.platform,
        component: <PlatformLayout children={<Platform />} />,
        showOnMenu: true
    }
]