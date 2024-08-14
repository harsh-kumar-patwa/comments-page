import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReply } from '../redux/actions';

const ReplyForm = ({ commentId, onReplyAdded }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      dispatch(addReply(commentId, {
        id: Date.now(),
        name: name.trim(),
        text: text.trim(),
        timestamp: new Date().toISOString(),
      }));
      setName('');
      setText('');
      onReplyAdded();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a Reply</h4>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Your Reply"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Post Reply</button>
    </form>
  );
};

export default ReplyForm;