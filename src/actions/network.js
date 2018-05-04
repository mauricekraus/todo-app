import {
  REQUEST_TODO,
  RECEIVE_TODO,
  REQUEST_TODOS,
  RECEIVE_TODOS,
  TOGGLE_TODO,
  DELETE_TODO,
  CONFIRM_DELETE_TODO,
  CHANGE_EDITMODE,
  REQUEST_UPDATE,
  CONFIRM_UPDATE,
} from './types';

const requestDeletion = () => ({
  type: DELETE_TODO,
});

const confirmDeletion = todo => ({
  type: CONFIRM_DELETE_TODO,
  payload: {
    todo,
  },
});

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

const requestUpdate = () => ({
  type: REQUEST_UPDATE,
});

const confirmUpdate = (todoId, newTitle) => ({
  type: CONFIRM_UPDATE,
  payload: {
    title: newTitle,
    id: todoId,
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

export const toggleTodo = todo => (dispatch) => {
  const data = new URLSearchParams();
  data.append('completed', !todo.completed);
  data.append('title', todo.title);
  return fetch(`https://todo-server-202613.appspot.com/notes/${todo._id}`, {
    body: data,
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    method: 'PUT',
  })
    .then(() =>
      dispatch({
        type: TOGGLE_TODO,
        payload: {
          id: todo._id,
        },
      }))
    .catch(error => console.log('Could not update todo', error));
};

export const deleteTodo = todo => (dispatch) => {
  dispatch(requestDeletion);
  return fetch(`https://todo-server-202613.appspot.com/notes/${todo._id}`, {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    method: 'DELETE',
  })
    .then(() => dispatch(confirmDeletion(todo)))
    .catch(error => console.log('Could not delete todo', error));
};

export const changeEditMode = todo => ({
  type: CHANGE_EDITMODE,
  payload: {
    todo,
  },
});

export const updateTodo = (todo, newTitle) => (dispatch) => {
  const data = new URLSearchParams();
  data.append('completed', todo.completed);
  data.append('title', newTitle);
  dispatch(requestUpdate);
  return fetch(`https://todo-server-202613.appspot.com/notes/${todo._id}`, {
    body: data,
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    method: 'PUT',
  })
    .then(response => response.json())
    .then(json => dispatch(confirmUpdate(todo._id, json.title)))
    .catch(error => console.log('Could not update todo', error));
};
