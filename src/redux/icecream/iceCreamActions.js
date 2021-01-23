import {BUY_ICECREAM, STOCK_ICECREAM} from "./IceCreamTypes";

export const buyIceCream = (number = 1) => {
    return {
        type: BUY_ICECREAM,
        payload: number
    }
}

export const stockIceCream = (number = 1) => {
    return {
        type: STOCK_ICECREAM,
        payload: number
    }
}
