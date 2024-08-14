import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment';

const CommentList = () => {
  const comments = useSelector(state => state.comments);
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' for newest first, 'asc' for oldest first

  const sortedComments = useMemo(() => {
    return [...comments].sort((a, b) => {
      const dateA = new Date(a.timestamp);
      const dateB = new Date(b.timestamp);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }, [comments, sortOrder]);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="comment-list">
      <div className="sort-control">
        <label htmlFor="sort-select">Sort by:</label>
        <select id="sort-select" value={sortOrder} onChange={handleSortChange}>
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
      </div>
      {sortedComments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;