export const createTask = task => {
  return {
    type: 'ADD_NEW_TASK',
    payload: task
  };
};

export const editTask = task => {
  return {
    type: 'EDIT_TASK',
    payload: task
  };
};
