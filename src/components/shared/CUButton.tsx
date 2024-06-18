import { PropsButton } from "../../models/props.model"
import { getColorVariant } from "../../utils/layout.utils"

export const CUButton = (props: PropsButton) => {
    return (
        <button className={(getColorVariant(props.variant)) + ' border-2 rounded-lg p-2'}>
            {props.text}
        </button>
    )
}