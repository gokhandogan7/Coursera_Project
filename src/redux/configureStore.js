import {createStore,combineReducers,applyMiddleware} from "redux";

import {dishes} from "./dishes"
import {promotions} from "./promotions"
import {leaders} from "./leaders"
import {comments} from "./comments"
import thunk from "redux-thunk"
import logger from "redux-logger"



export const configureStore=()=>{
    const store=createStore(

        combineReducers({
            comments,
            leaders,
            promotions,
            dishes

        }),
        applyMiddleware(thunk,logger)
    )

    return store
}