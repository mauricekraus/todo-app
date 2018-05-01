import { ADD_TODO, GET_TODOS } from './types';

export const addTodo = title => ({
  type: ADD_TODO,
  payload: {
    title,
  },
});

export const getTodos = () => ({
  type: GET_TODOS,
});
