import { REQUEST_TODOS, RECEIVE_TODOS, REQUEST_TODO, RECEIVE_TODO } from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  todos: [],
};

function addTodos(todos, newTodos) {
  const t = [...todos];
  newTodos.forEach((element) => {
    t.push(element);
  });
  return t;
}

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
    default:
      return state;
  }
};

export default TodoReducer;
