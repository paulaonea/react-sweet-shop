import {combineReducers} from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";
import juiceReducer from "./juice/juiceReducer";

const rootReducer = combineReducers({
    cake:  cakeReducer,
    juice: juiceReducer,
    iceCream: iceCreamReducer,
})

export default rootReducer
