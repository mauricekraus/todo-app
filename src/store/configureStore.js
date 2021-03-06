import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';

const loggerMiddleware = createLogger();

export default function configureStore() {
  return createStore(
    reducer,
    {
      todos: {
        editMode: {
          mode: false,
          todo: {},
        },
        isFetching: false,
        todos: [],
      },
      form: {},
    },
    applyMiddleware(thunkMiddleware, loggerMiddleware),
  );
}
