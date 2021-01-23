import {BUY_JUICE, STOCK_JUICE} from "./juiceTypes";

const initialState = {
    numOfJuices: 30
}

const juiceReducer = (state=initialState, action) => {
    console.log("juice reducer called")
    switch (action.type) {
        case BUY_JUICE: return {
            ...state,
            numOfJuices: state.numOfJuices - action.payload
        }
        case STOCK_JUICE: return {
            ...state,
            numOfJuices: state.numOfJuices + action.payload
        }
        default: return state
    }
}

export default juiceReducer
