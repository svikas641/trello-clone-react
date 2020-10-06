const data = {
  tasks: {
    'task-0': { id: 'task-0', content: 'Take out the garbage' },
    'task-1': { id: 'task-1', content: 'Watch my favorite show' },
    'task-2': { id: 'task-2', content: 'Charge my phone' },
    'task-3': { id: 'task-3', content: 'Cook dinner' },
    'task-4': { id: 'task-4', content: 'Bake Cake' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-0', 'task-1', 'task-2', 'task-3'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Doing',
      taskIds: ['task-4'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  },
  columnOrder: ['column-1'],
};

export default data;
