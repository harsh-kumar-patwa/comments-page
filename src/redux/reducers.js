import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, ADD_REPLY, DELETE_REPLY } from './actions';

const initialState = {
  comments: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case EDIT_COMMENT:
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.id
            ? { ...comment, text: action.payload.text }
            : comment
        )
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.payload)
      };
    case ADD_REPLY:
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.commentId
            ? { ...comment, replies: [...comment.replies, action.payload.reply] }
            : comment
        )
      };
    case DELETE_REPLY:
      return {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.commentId
            ? { ...comment, replies: comment.replies.filter(reply => reply.id !== action.payload.replyId) }
            : comment
        )
      };
    default:
      return state;
  }
};

export default rootReducer;