import React, { useState } from 'react';

const AddListForm = ({ addList }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addList(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-card-input"
        placeholder="Enter List Title"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <button className="add-card-button" type="submit">
        Add List
      </button>
    </form>
  );
};

export default AddListForm;
