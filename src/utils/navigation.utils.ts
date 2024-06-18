import {NavigationName} from "../models/navigation.model";
import {NavigationItems} from "../consts/Navigation";

export const getPathToNavigate = (name: NavigationName) => {
    return NavigationItems.find(n => n.name === name)?.path ?? ''
}