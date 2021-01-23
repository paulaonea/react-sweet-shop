import { BUY_CAKE } from './cakeTypes'
import { STOCK_CAKE } from "./cakeTypes";

const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    console.log("cake reducer called")
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }
        case STOCK_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes + action.payload
        }

        default: return state
    }
}

export default cakeReducer
