import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';
import MaterialList from 'material-ui/List';
import { connect } from 'react-redux';
import { formValueSelector, clearFields, change } from 'redux-form';
import {
  fetchTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  changeEditMode,
  updateTodo,
} from '../actions';
import CheckItem from './CheckItem';
import AddFormContainer from './addForm/AddFormContainer';
import './list.css';

class List extends Component {
  componentWillMount() {
    this.props.fetchTodos();
  }
  submit = () => {
    console.log(this.props);
    if (this.props.editMode.mode) {
      this.props.updateTodo(this.props.editMode.todo, this.props.textField);
      this.props.clearFields('addForm', false, false, 'todoTitle');
    } else if (this.props.textField !== undefined) {
      if (this.props.textField.trim().length !== 0) {
        this.props.addTodo(this.props.textField);
      }
      this.props.clearFields('addForm', false, false, 'todoTitle');
    }
  };

  handleRowClick = (todo) => {
    this.props.toggleTodo(todo);
  };

  handleDeleteRowClick = (todo) => {
    this.props.deleteTodo(todo);
  };

  handelEditRowClick = (todo) => {
    this.props.change('addForm', 'todoTitle', todo.title);
    this.props.changeEditMode(todo);
  };

  render() {
    return (
      <Paper>
        <AddFormContainer onPress={this.submit} editMode={this.props.editMode.mode} />
        <MaterialList className="paper-container">
          {this.props.todos.map(todo => (
            <div key={todo._id}>
              <CheckItem
                title={todo.title}
                completed={todo.completed}
                onCheck={() => this.handleRowClick(todo)}
                onDelete={() => this.handleDeleteRowClick(todo)}
                onEdit={() => this.handelEditRowClick(todo)}
              />
            </div>
          ))}
        </MaterialList>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  const selector = formValueSelector('addForm');
  return {
    todos: state.todos.todos,
    isFetching: state.todos.isFetching,
    editMode: state.todos.editMode,
    textField: selector(state, 'todoTitle'),
  };
};
export default connect(mapStateToProps, {
  fetchTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  clearFields,
  change,
  changeEditMode,
  updateTodo,
})(List);

List.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  form: PropTypes.objectOf(PropTypes.shape({
    addForm: PropTypes.shape({
      values: PropTypes.objectOf({ todoTitle: PropTypes.string.isRequired }),
      registeredFields: PropTypes.objectOf({
        todoTitle: PropTypes.objectOf({
          name: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          count: PropTypes.number.isRequired,
        }),
      }),
    }),
  })).isRequired,
};
