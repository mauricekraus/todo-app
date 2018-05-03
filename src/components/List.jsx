import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, Paper, Button } from 'material-ui';
import { connect } from 'react-redux';
import { fetchTodos, addTodo } from '../actions';
import ListItem from './ListItem';
import AddFormContainer from './addForm/AddFormContainer';
import './list.css';

class List extends Component {
  componentWillMount() {
    this.props.fetchTodos();
  }
  submit = (todo) => {
    console.log(todo.todoTitle);
    this.props.addTodo(todo.todoTitle);
  };
  render() {
    return (
      <Paper>
        <AddFormContainer onPress={this.submit} />
        <div className="paper-container">
          {this.props.todos.map(todo => (
            <div key={todo._id} className="listItem-container">
              <ListItem title={todo.title} />
            </div>
          ))}
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  const { todos, isFetching } = state.todos;
  return { todos, isFetching, state };
};

export default connect(mapStateToProps, { fetchTodos, addTodo })(List);

List.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
};
