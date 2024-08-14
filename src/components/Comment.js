import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editComment, deleteComment, deleteReply } from '../redux/actions';
import ReplyForm from './ReplyForm';

const Comment = ({ comment, parentId = null, depth = 0 }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(comment.text);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editedText.trim()) {
      dispatch(editComment(comment.id, editedText));
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (parentId) {
      dispatch(deleteReply(parentId, comment.id));
    } else {
      dispatch(deleteComment(comment.id));
    }
    setShowDeleteConfirm(false);
  };

  return (
    <div className="comment" style={{ marginLeft: `${depth * 20}px` }}>
      <div className="comment-header">
        <h4>{comment.name}</h4>
        <span className="comment-date">{new Date(comment.timestamp).toLocaleString()}</span>
      </div>
      <div className="comment-content">
        {isEditing ? (
          <>
            <textarea
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <button onClick={handleEdit}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <p>{comment.text}</p>
        )}
      </div>
      <div className="comment-actions">
        {!isEditing && (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            {!parentId && (
              <button onClick={() => setShowReplyForm(!showReplyForm)}>
                {showReplyForm ? 'Cancel Reply' : 'Reply'}
              </button>
            )}
          </>
        )}
      </div>
      <button className="delete-btn" onClick={handleDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
      {!parentId && showReplyForm && (
        <div className="reply-form">
          <ReplyForm commentId={comment.id} onReplyAdded={() => setShowReplyForm(false)} />
        </div>
      )}
      {comment.replies && comment.replies.length > 0 && (
        <div className="replies">
          {comment.replies.map(reply => (
            <Comment key={reply.id} comment={reply} parentId={comment.id} depth={depth + 1} />
          ))}
        </div>
      )}
      {showDeleteConfirm && (
        <div className="confirm-dialog">
          <div className="confirm-dialog-content">
            <p>Are you sure you want to delete this {parentId ? 'reply' : 'comment'}?</p>
            <div className="confirm-dialog-buttons">
              <button onClick={confirmDelete}>Yes, delete</button>
              <button onClick={() => setShowDeleteConfirm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;