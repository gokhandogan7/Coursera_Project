import * as ActionTypes from "./ActionTypes";

import { baseUrl } from "../shared/baseUrl"
import axios from "axios"

export const addComment = (comment) => {
 
    return {
        type: ActionTypes.ADD_COMMENT,
        payload: comment
    }
}

export const postComment=(dishId, rating, author, comment)=>(dispatch)=>{
 
        return axios.post(baseUrl + "comments",{
            dishId,rating, author, comment,
            date:new Date().toISOString()
        }).then(res=>dispatch(addComment(res.data)))
        .catch(err=>dispatch(dishesFailed(err.message)))
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true))

    return axios.get(baseUrl + "dishes")
        .then(res => {
            if (res.statusText == "OK") {
                return res
            }else{
                let error=new Error("Error"+res.status+" :"+res.statusText)
                error.response=res
                throw error
            }
        },
        error=>{
            let errmess=new Error(error.message)
            throw errmess
        }

        ).then(res=>dispatch(addDishes(res.data)))
        .catch(err=>dispatch(dishesFailed(err.message)))

}


export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING,

})
export const dishesFailed = (errormessage) => ({
    type: ActionTypes.DISHES_FAIL,
    payload: errormessage

})


export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})


export const fetchComments = () => (dispatch) => {
    dispatch(dishesLoading(true))

    return axios.get(baseUrl + "comments")
    .then(res=>dispatch(addComments(res.data)))
    .catch(err=>dispatch(commentsFailed(err.message)))

}

export const commentsFailed = (errormessage) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errormessage

})

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})


////promos

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true))

    return axios.get(baseUrl + "promotions")
    .then(res=>dispatch(addPromos(res.data)))
    .catch(err=>dispatch(promosFailed(err)))


}


export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING,

})
export const promosFailed = (errormessage) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errormessage

})


export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
})



export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true))

    return axios.get(baseUrl + "leaders")
        .then(res=>dispatch(addLeaders(res.data)))
        .catch(err=>dispatch(leadersFailed(err.message)))

}


export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING,

})
export const leadersFailed = (errormessage) => ({
    type: ActionTypes.LEADERS_FAIL,
    payload: errormessage

})


export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
})


export const postFeedback=(values)=>(dispatch)=>{
   
    return axios.post(baseUrl+"feedback",{
        ...values,
        date:new Date().toISOString()
    }).then(dispatch())
}

/* [
    {
      "firstname": "fdas",
      "lastname": "afds",
      "telnum": "134113",
      "email": "dafdads@daffas.dfdafd",
      "agree": true,
      "contactType": "Email",
      "message": "afadsfds",
      "date": "2017-12-04T09:41:49.890Z",
      "id": 1
    }
  ] */