import { REQUEST_TODOS, RECEIVE_TODOS } from '../actions/types';

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
    default:
      return state;
  }
};

export default TodoReducer;
