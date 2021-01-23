import {BUY_ICECREAM, STOCK_ICECREAM} from "./IceCreamTypes";

const initialState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state=initialState, action) => {
    console.log("icecream reducer called")
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - action.payload
        }
        case STOCK_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams + action.payload
        }
        default: return state
    }
}

export default iceCreamReducer
