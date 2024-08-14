import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/actions';

const CommentForm = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      dispatch(addComment({
        id: Date.now(),
        name: name.trim(),
        text: text.trim(),
        timestamp: new Date().toISOString(),
        replies: []
      }));
      setName('');
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Comment</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Your Comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default CommentForm;