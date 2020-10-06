import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const AddCardForm = ({ addTask, column }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(text, column);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextareaAutosize
        type="text"
        className="add-card-input"
        placeholder="Enter Text"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <button className="add-card-button" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddCardForm;
