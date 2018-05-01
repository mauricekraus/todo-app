import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, Paper, Button } from 'material-ui';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions';
import ListItem from './ListItem';
import './list.css';

class List extends Component {
  componentWillMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <Paper>
        <form className="form-container" onSubmit={() => console.log('Hallo')}>
          <TextField label="hallo" margin="normal" />
          <Button type="submit" color="primary" variant="raised">
            Create
          </Button>
        </form>
        <div className="paper-container">
          {this.props.todos.map((todo) => {
            console.log(todo);
            return (
              <div key={todo._id} className="listItem-container">
                <ListItem title={todo.title} />
              </div>
            );
          })}
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  const { todos, isFetching } = state.todos;

  return { todos, isFetching };
};

export default connect(mapStateToProps, { fetchTodos })(List);

List.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
};
