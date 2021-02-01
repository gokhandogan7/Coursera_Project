import { comments } from "../shared/comments";
import * as ActionTypes from './ActionTypes'


export const Comments = (state = comments, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      
      comment.id = state.length;
      comment.date = new Date().toISOString();
      console.log(comment)
      return [...state, comment]
 
    default:
      return state;
  }
};
