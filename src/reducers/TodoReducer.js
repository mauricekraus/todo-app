import {
  REQUEST_TODOS,
  RECEIVE_TODOS,
  REQUEST_TODO,
  RECEIVE_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CONFIRM_DELETE_TODO,
  CHANGE_EDITMODE,
  CONFIRM_UPDATE,
} from '../actions/types';

const INITIAL_STATE = {
  todos: {
    editMode: {
      mode: false,
      todo: {},
    },
    isFetching: false,
    todos: [],
  },
};

function addTodos(todos: [Todo], newTodos: [Todo]): [Todo] {
  const t = [...todos];
  newTodos.forEach((element) => {
    t.push(element);
  });
  return t;
}

function removeTodo(todos: [Todo], oldTodo: [Todo]): [Todo] {
  const t = [];
  todos.forEach((el) => {
    if (el !== oldTodo) {
      t.push(el);
    }
  });
  return t;
}

function updateTodo(todos: [Todo], id: number, update: Todo): [Todo] {
  const ts = [...todos];
  for (let i = 0; i < ts.length; i += 1) {
    if (ts[i]._id === id) {
      ts[i].title = update;
      break;
    }
  }
  return ts;
}

function toggleTodoWithId(todosArray: [Todo], id: number): [Todo] {
  const newArray = [];
  for (let i = 0; i < todosArray.length; i += 1) {
    if (todosArray[i]._id === id) {
      const temp = todosArray[i];
      temp.completed = !temp.completed;
      newArray.push(temp);
    } else {
      newArray.push(todosArray[i]);
    }
  }
  return newArray;
}

const TodoReducer = (state = INITIAL_STATE, action): State => {
  switch (action.type) {
    case REQUEST_TODOS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_TODOS:
      return {
        ...state,
        isFetching: false,
        todos: addTodos(state.todos, action.payload.todos),
      };
    case REQUEST_TODO:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_TODO:
      return {
        ...state,
        isFetching: false,
        todos: [...state.todos, action.payload.todo],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        isFetching: true,
        todos: toggleTodoWithId(state.todos, action.payload.id),
      };
    case DELETE_TODO:
      return {
        ...state,
        isFetching: true,
      };
    case CONFIRM_DELETE_TODO:
      return {
        ...state,
        isFetching: false,
        todos: removeTodo(state.todos, action.payload.todo),
      };
    case CHANGE_EDITMODE:
      return {
        ...state,
        editMode: {
          mode: true,
          todo: action.payload.todo,
        },
      };
    case CONFIRM_UPDATE:
      return {
        ...state,
        todos: updateTodo(state.todos, action.payload.id, action.payload.title),
        editMode: {
          mode: false,
          todo: {},
        },
      };
    default:
      return state;
  }
};

export default TodoReducer;