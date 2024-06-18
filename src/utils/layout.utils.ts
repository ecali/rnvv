import { ColorVariant } from "../models/props.model";

export const getColorVariant = (value: ColorVariant) => {
    switch(value){
        case ColorVariant.purple:
            return 'border-violet-900 text-violet-900'
        default:
            return 'border-violet-900 text-violet-900'
    }
}