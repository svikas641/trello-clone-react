import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card';
import AddCardForm from './AddCardForm';

const List = ({ deleteList, addTask, deleteTask, column, tasks }) => {
  const [toggleForm, setToggleForm] = useState(false);

  const toggleFormFun = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <div className="list-wrapper">
      <div className="list-header">
        <p>
          {column.title}
          <span onClick={() => deleteList(column)}>
            <FaTrash />
          </span>
        </p>
      </div>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="task-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Card
                task={task}
                index={index}
                key={task.id}
                column={column}
                deleteTask={deleteTask}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <div className="add-card-container">
        {toggleForm && (
          <AddCardForm addTask={addTask} column={column} tasks={tasks} />
        )}
        <button type="button" onClick={toggleFormFun}>
          +Add Another card
        </button>
      </div>
    </div>
  );
};

export default List;
