import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { formValueSelector, clearFields, change } from 'redux-form';
import List from './presenter';

import {
  fetchTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  changeEditMode,
  updateTodo,
} from '../../actions';

function mapStateToProps(state: State) {
  const selector = formValueSelector('addForm');
  return {
    todos: state.todos.todos,
    isFetching: state.todos.isFetching,
    editMode: state.todos.editMode,
    textField: selector(state, 'todoTitle'),
  };
}

/**
 * @description function wraps all action creators with the dispatch function
 * and map them to the components props
 * @author Maurice Kraus
 * @param {any} dispatch function to dispatch an action to the reducer
 * @returns {Object} returns object of actions
 */
function mapDispatchToProps(dispatch) {
  return {
    fetchTodos: bindActionCreators(fetchTodos, dispatch),
    addTodo: bindActionCreators(addTodo, dispatch),
    toggleTodo: bindActionCreators(toggleTodo, dispatch),
    deleteTodo: bindActionCreators(deleteTodo, dispatch),
    clearTextField: bindActionCreators(clearFields, dispatch),
    changeTextField: bindActionCreators(change, dispatch),
    toggleEditMode: bindActionCreators(changeEditMode, dispatch),
    updateTitle: bindActionCreators(updateTodo, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
