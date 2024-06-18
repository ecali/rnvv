import {ReactNode, useEffect, useState} from "react";
import {NavigationItems} from "../../consts/Navigation";
import {Link, useLocation} from "react-router-dom";
import {useWindowSize} from "../../hooks/useResize";
import {WindowsSize} from "../../consts/WindowsSize";

export const Navbar = (props: {children: ReactNode}) => {
    const [showMobile, setShowMobile] = useState(false)
    const [width] = useWindowSize();
    const location = useLocation()

    useEffect(() => {
        setShowMobile(width >= WindowsSize.md)
    }, [width])

    useEffect(() => {
        setShowMobile(width >= WindowsSize.md)
    },[])

    return (
        <div className="bg-gray-100 h-screen">
            <nav className="bg-white px-6 relative shadow-md">
                <div className="flex flex-row justify-between items-center py-2">
                    <h3 className="font-semibold text-3xl text-gray-500">RNVV</h3>
                    <div className="group flex flex-col items-center">
                        <button className="p-2 rounded-lg md:hidden" onClick={() => setShowMobile(!showMobile)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-10 fill-current"
                                 viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </button>
                        <div
                            className={ (showMobile ? 'block' : 'hidden') + "  md:block absolute md:static bg-white inset-x-0 top-16 py-3 shadow-md md:shadow-none text-gray-600"}>
                            <div className="flex flex-row justify-center items-center text-center font-semibold text-gray-500">
                                {NavigationItems.filter(e => e.showOnMenu).map(ele =>
                                    <Link to={ele.path} className={ele.path === location.pathname ? 'pointer-events-none' : ''}>
                                        <p key={ele.name} className={(ele.path === location.pathname ? 'text-blue-500' : '') + " px-3 py-1 flex flex-col md:flex-row md:items-center"}>
                                            {ele.name.toString().toUpperCase()}
                                        </p>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {props.children}
        </div>
)
}