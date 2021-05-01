
import * as ActionTypes from "./ActionTypes"

export const comments=(state={
    errMess:null,
    comments:[]
},action)=>{
    console.log("action:",action.payload)
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state,isLoading:false,errMess:null,comments:action.payload}


        case ActionTypes.ADD_COMMENT:
            let comment=action.payload
            comment.id=state.comments.length;
            comment.date=new Date().toISOString();
            return {...state,comments:[...state.comments,comment]}


        case ActionTypes.DISHES_FAIL:
                return  {...state,isLoading:false,errMess:action.payload,comments:[]}

        default:
            return state;
    }
}