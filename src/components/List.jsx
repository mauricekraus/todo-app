import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';
import MaterialList from 'material-ui/List';
import { connect } from 'react-redux';
import { fetchTodos, addTodo, toggleTodo } from '../actions';
import CheckItem from './CheckItem';
import AddFormContainer from './addForm/AddFormContainer';
import './list.css';

class List extends Component {
  componentWillMount() {
    this.props.fetchTodos();
  }
  submit = (todo) => {
    this.props.addTodo(todo.todoTitle);
    this.props.state.form.addForm.values.todoTitle = ''; // hacky
  };

  handleRowClick = (todo) => {
    this.props.toggleTodo(todo);
  };

  render() {
    return (
      <Paper>
        <AddFormContainer onPress={this.submit} />
        <MaterialList className="paper-container">
          {this.props.todos.map(todo => (
            <div key={todo._id} className="listItem-container">
              <CheckItem
                title={todo.title}
                completed={todo.completed}
                onCheck={() => this.handleRowClick(todo)}
              />
            </div>
          ))}
        </MaterialList>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  const { todos, isFetching } = state.todos;
  return { todos, isFetching, state };
};

export default connect(mapStateToProps, { fetchTodos, addTodo, toggleTodo })(List);

List.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
};
