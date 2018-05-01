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
    todos: json.data.children.map(child => child.data),
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

export const fetchTodos = () => (dispatch) => {
  dispatch(requestTodos());
  return fetch('https://todo-server-202613.appspot.com/notes')
    .then(response => response.json())
    .then(json => dispatch(receiveTodos(json)))
    .catch(error => console.log('Could not receive todos', error));
};

export default fetchTodos;
