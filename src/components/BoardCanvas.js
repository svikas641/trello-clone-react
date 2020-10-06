import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import List from './List';
import AddList from './AddList';
import initialData from '../initialData';

const BoardCanvas = () => {
  const [state, setState] = useState(initialData);

  // add a new Card
  const addTask = (text, column) => {
    const taskLength = Object.keys(state.tasks).length + 1;
    state.tasks[`task-${taskLength}`] = {
      id: `task-${taskLength}`,
      content: text,
    };

    const newTasks = {
      ...state.tasks,
    };

    setState({
      ...state,
      tasks: { ...newTasks },
    });

    state.columns[column.id].taskIds.push(`task-${taskLength}`);
  };

  // delete a card
  const deleteTask = (index, column) => {
    const newTaskIds = { ...state.columns };
    newTaskIds[column.id].taskIds.splice(index, 1);

    setState({
      ...state,
      columns: { ...newTaskIds },
    });
  };

  // add a new List
  const addList = (text) => {
    const columnLength = Object.keys(state.columns).length + 1;
    const newColumn = { ...state.columns };
    newColumn[`column-${columnLength}`] = {
      id: `column-${columnLength}`,
      title: text,
      taskIds: [],
    };
    const insertNewColumn = [...state.columnOrder];
    const newState = {
      ...state,
      columns: { ...newColumn },
      columnOrder: [...insertNewColumn, `column-${columnLength}`],
    };
    setState(newState);
  };

  // delete list
  const deleteList = (index) => {
    const newState = [...state.columnOrder];
    newState.splice(newState.indexOf(index.id), 1);
    setState({
      ...state,
      columnOrder: [...newState],
    });
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const column = state.columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...column, taskIds: newTaskIds };
      const newState = {
        ...state,
        columns: { ...state.columns, [newColumn.id]: newColumn },
      };
      setState(newState);
      return;
    }
    // moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board-canvas">
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
          return (
            <List
              key={column.id}
              column={column}
              tasks={tasks}
              addTask={addTask}
              deleteTask={deleteTask}
              deleteList={deleteList}
            />
          );
        })}
        <AddList addList={addList} />
      </div>
    </DragDropContext>
  );
};

export default BoardCanvas;
