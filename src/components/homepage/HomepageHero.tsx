import {projectName} from "../../consts/general";

export const HomepageHero = () => {
    return (
        <div className={'flex gap-2'}>
            <div className={'w-2/3 p-4 flex items-center justify-center'}>
                <p className={'text-6xl'}>{projectName} Simple webapp for <br/> <span className={'text-violet-800'}>simplify</span> your life</p>
            </div>
            <div className={'w-1/3 flex items-center justify-center'}>
                <img src={'/img/rocket.png'} alt={projectName}/>
            </div>
        </div>
    )
}