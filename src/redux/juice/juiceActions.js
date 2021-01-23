import {BUY_JUICE, STOCK_JUICE} from "./juiceTypes";

export const buyJuice = (number = 1) => {
    return {
        type: BUY_JUICE,
        payload: number
    }
}

export const stockJuice = (number=1) => {
    return {
        type: STOCK_JUICE,
        payload: number
    }
}
