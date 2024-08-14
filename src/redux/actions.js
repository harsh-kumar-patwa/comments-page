export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const ADD_REPLY = 'ADD_REPLY';
export const DELETE_REPLY = 'DELETE_REPLY';

export const addComment = (comment) => ({ type: ADD_COMMENT, payload: comment });
export const editComment = (id, text) => ({ type: EDIT_COMMENT, payload: { id, text } });
export const deleteComment = (id) => ({ type: DELETE_COMMENT, payload: id });
export const addReply = (commentId, reply) => ({ type: ADD_REPLY, payload: { commentId, reply } });
export const deleteReply = (commentId, replyId) => ({ type: DELETE_REPLY, payload: { commentId, replyId } });
