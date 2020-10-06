import React, { useState } from 'react';
import AddListForm from './AddListForm';

const AddList = ({ addList }) => {
  const [toggleForm, setToggleForm] = useState(false);
  const toggleFormFun = () => {
    setToggleForm(!toggleForm);
  };
  return (
    <div className="add-list-wrapper">
      {toggleForm && <AddListForm addList={addList} />}
      <button className="add-list-button" type="button" onClick={toggleFormFun}>
        +Add another list
      </button>
    </div>
  );
};
export default AddList;
