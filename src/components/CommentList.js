import React from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment';

const CommentList = () => {
  const comments = useSelector(state => state.comments);

  const sortedComments = [...comments].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  return (
    <div className="comment-list">
      {sortedComments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;