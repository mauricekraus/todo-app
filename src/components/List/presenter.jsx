import * as React from 'react';
import { Paper } from 'material-ui';
import MaterialList from 'material-ui/List';
import CheckItem from '../CheckItem';
import AddForm from '../AddForm';
import './list.css';

type Props = {
  todos: Array<Todo>,
  editMode: {
    mode: boolean,
    todo: Todo,
  },
  textField: string,
  fetchTodos: () => void,
  updateTitle: (Todo, string) => void,
  clearTextField: (string, boolean, boolean, string) => void,
  addTodo: string => void,
  toggleTodo: Todo => void,
  deleteTodo: Todo => void,
  toggleEditMode: Todo => void,
  changeTextField: (string, string, string) => void,
};

class List extends React.Component<Props, {}> {
  componentWillMount() {
    this.props.fetchTodos();
  }

  submit = (): void => {
    if (this.props.editMode.mode) {
      this.props.updateTitle(this.props.editMode.todo, this.props.textField);
      this.props.clearTextField('addForm', false, false, 'todoTitle');
    } else if (this.props.textField !== undefined) {
      if (this.props.textField.trim().length !== 0) {
        this.props.addTodo(this.props.textField);
      }
      this.props.clearTextField('addForm', false, false, 'todoTitle');
    }
  };

  handleRowClick = (todo: Todo): void => {
    this.props.toggleTodo(todo);
  };

  handleDeleteRowClick = (todo: Todo): void => {
    this.props.deleteTodo(todo);
    this.props.clearTextField('addForm', false, false, 'todoTitle');
  };

  handelEditRowClick = (todo: Todo): void => {
    this.props.changeTextField('addForm', 'todoTitle', todo.title);
    this.props.toggleEditMode(todo);
  };

  render() {
    return (
      <Paper>
        <AddForm onPress={this.submit} />
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

export default List;
