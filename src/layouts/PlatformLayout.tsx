import {ReactNode} from "react";
import {Navbar} from "../components/shared/navbar";

export const PlatformLayout = (props: {children: ReactNode}) => {
    return (
        <div className={'flex flex-col gap-4 w-full'}>
            <Navbar children={props.children} />
        </div>
    )
}