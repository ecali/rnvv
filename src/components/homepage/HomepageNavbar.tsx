import {projectName} from "../../consts/general"
import {ColorVariant} from "../../models/props.model"
import {CUButton} from "../shared/CUButton"
import {Link} from "react-router-dom";
import {getPathToNavigate} from "../../utils/navigation.utils";
import {NavigationName} from "../../models/navigation.model";

export const HomepageNavbar = () => {
    return (
        <div className={'w-full flex justify-between h-[70px] text-violet-900 px-4 items-center'}>
            <p className={'text-lg text-bold '}>{projectName}</p>
            <Link to={getPathToNavigate(NavigationName.login)}>
                <CUButton text="Start now" variant={ColorVariant.purple}/>
            </Link>
        </div>
    )
}