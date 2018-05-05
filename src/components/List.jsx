import * as React from "react";
import { Paper } from "material-ui";
import MaterialList from "material-ui/List";
import { connect } from "react-redux";
import { formValueSelector, clearFields, change } from "redux-form";

import {
  fetchTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
  changeEditMode,
  updateTodo
} from "../actions";
import CheckItem from "./checkItem/CheckItem";
import AddFormContainer from "./addForm/AddFormContainer";
import "./list.css";

type Props = {
  todos: Array<Todo>,
  editMode: {
    mode: boolean,
    todo: Todo
  },
  textField: string,
  fetchTodos: () => void,
  updateTodo: (Todo, string) => void,
  clearFields: (string, boolean, boolean, string) => void,
  addTodo: string => void,
  toggleTodo: Todo => void,
  deleteTodo: Todo => void,
  changeEditMode: Todo => void,
  change: (string, string, string) => void
};

class List extends React.Component<Props, {}> {
  componentWillMount() {
    this.props.fetchTodos();
  }
  submit = (): void => {
    if (this.props.editMode.mode) {
      this.props.updateTodo(this.props.editMode.todo, this.props.textField);
      this.props.clearFields("addForm", false, false, "todoTitle");
    } else if (this.props.textField !== undefined) {
      if (this.props.textField.trim().length !== 0) {
        this.props.addTodo(this.props.textField);
      }
      this.props.clearFields("addForm", false, false, "todoTitle");
    }
  };

  handleRowClick = (todo: Todo): void => {
    this.props.toggleTodo(todo);
  };

  handleDeleteRowClick = (todo: Todo): void => {
    this.props.deleteTodo(todo);
    this.props.clearFields("addForm", false, false, "todoTitle");
  };

  handelEditRowClick = (todo: Todo): void => {
    this.props.change("addForm", "todoTitle", todo.title);
    this.props.changeEditMode(todo);
  };

  render() {
    return (
      <Paper>
        <AddFormContainer
          onPress={this.submit}
          editMode={this.props.editMode.mode}
        />
        <MaterialList className="paper-container">
          {this.props.todos.map((todo: Todo) => (
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

const mapStateToProps = (state: State) => {
  const selector = formValueSelector("addForm");
  return {
    todos: state.todos.todos,
    isFetching: state.todos.isFetching,
    editMode: state.todos.editMode,
    textField: selector(state, "todoTitle")
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
  updateTodo
})(List);
