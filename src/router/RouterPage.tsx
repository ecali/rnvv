import { Routes, Route } from "react-router-dom"
import {NavigationItems} from "../consts/Navigation";

export const RouterPage = () => {
    return (
        <>
            <Routes>
                {NavigationItems.map(nav => (<Route key={nav.name} path={nav.path} element={nav.component} />))}
            </Routes>
        </>
    )
}