import { dishes } from "../shared/dishes";
import { promotions } from "../shared/promotions";
import { leaders } from "../shared/leaders";
import { comments } from "../shared/comments";

export const initialState = {
    dishes:dishes,
    promotions:promotions,
    leaders:leaders,
    comments:comments,
}

export const Reducer = (state = initialState, action) => {
    return state;
}