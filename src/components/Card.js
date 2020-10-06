import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ task, index, deleteTask, column }) => (
  <Draggable key={index} draggableId={task.id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <div className="list-card">
          <p>
            {task.content}
            <span className="delete" onClick={() => deleteTask(index, column)}>
              <FaTrash />
            </span>
          </p>
        </div>
      </div>
    )}
  </Draggable>
);

export default Card;
