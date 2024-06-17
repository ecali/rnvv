import {ReactNode} from "react";

export interface NavigationItemModel {
    name: string,
    path: string,
    component: ReactNode,
    showOnMenu: boolean
}