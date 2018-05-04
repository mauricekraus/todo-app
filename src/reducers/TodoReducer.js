import {
  REQUEST_TODOS,
  RECEIVE_TODOS,
  REQUEST_TODO,
  RECEIVE_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CONFIRM_DELETE_TODO,
} from '../actions/types';

const INITIAL_STATE = {
  todos: {
    isFetching: false,
    todos: [],
  },
  form: {},
};

function addTodos(todos, newTodos) {
  const t = [...todos];
  newTodos.forEach((element) => {
    t.push(element);
  });
  return t;
}

function removeTodo(todos, oldTodo) {
  const t = [];
  todos.forEach((el) => {
    if (el !== oldTodo) {
      t.push(el);
    }
  });
  return t;
}

const toggleTodoWithId = (todosArray, id) => {
  const newArray = [];
  for (let i = 0; i < todosArray.length; i += 1) {
    if (todosArray[i]._id === id) {
      todosArray[i].completed = !todosArray[i].completed;
      newArray.push(todosArray[i]);
    } else {
      newArray.push(todosArray[i]);
    }
  }
  return newArray;
};

const TodoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_TODOS:
      return { ...state, isFetching: true };
    case RECEIVE_TODOS:
      return {
        isFetching: false,
        todos: addTodos(state.todos, action.payload.todos),
      };
    case REQUEST_TODO:
      return {
        isFetching: true,
        ...state,
      };
    case RECEIVE_TODO:
      return {
        isFetching: false,
        todos: [...state.todos, action.payload.todo],
      };
    case TOGGLE_TODO:
      return {
        isFetching: true,
        ...state,
        todos: toggleTodoWithId(state.todos, action.payload.id),
      };
    case DELETE_TODO:
      return {
        isFetching: true,
        ...state,
      };
    case CONFIRM_DELETE_TODO:
      return {
        isFetching: false,
        ...state,
        todos: removeTodo(state.todos, action.payload.todo),
      };
    default:
      return state;
  }
};

export default TodoReducer;
