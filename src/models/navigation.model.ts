import {ReactNode} from "react";

export interface NavigationItemModel {
    name: NavigationName,
    path: string,
    component: ReactNode,
    showOnMenu: boolean
}

export enum NavigationName {
    home,
    login,
    register,
    platform
}