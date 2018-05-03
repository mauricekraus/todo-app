import { REQUEST_TODO, RECEIVE_TODO, REQUEST_TODOS, RECEIVE_TODOS } from './types';

const requestTodo = todo => ({
  type: REQUEST_TODO,
  payload: {
    todo,
  },
});

const receiveTodo = json => ({
  type: RECEIVE_TODO,
  payload: {
    todo: json,
    receivedAt: Date.now(),
  },
});

const requestTodos = () => ({
  type: REQUEST_TODOS,
});

const receiveTodos = json => ({
  type: RECEIVE_TODOS,
  payload: {
    todos: json,
    receivedAt: Date.now(),
  },
});

export const addTodo = todoTitle => (dispatch) => {
  const data = new URLSearchParams();
  data.append('title', todoTitle);
  dispatch(requestTodo(todoTitle));
  return fetch('https://todo-server-202613.appspot.com/notes', {
    body: data,
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    method: 'POST',
  })
    .then(response => response.json())
    .then(json => dispatch(receiveTodo(json)))
    .catch(error => console.log('Could not create todo', error));
};

export const fetchTodos = () => (dispatch) => {
  dispatch(requestTodos());
  return fetch('https://todo-server-202613.appspot.com/notes')
    .then(response => response.json())
    .then(json => dispatch(receiveTodos(json)))
    .catch(error => console.log('Could not receive todos', error));
};
