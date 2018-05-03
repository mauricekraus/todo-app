import { combineReducers } from 'redux';
import TodoReducer from './TodoReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  todos: TodoReducer,
  form: formReducer,
});
