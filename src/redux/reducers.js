import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, ADD_REPLY, DELETE_REPLY ,SET_SORT_ORDER} from './actions';

const initialState = {
  comments: [],
  sortOrder: 'desc'
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
    case SET_SORT_ORDER:
      return {
        ...state,
        sortOrder: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;