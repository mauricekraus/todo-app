import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import AddForm from './presenter';

type Props = {
  onPress: () => void,
};

const mapStateToProps = (state: State, { onPress }: Props) => ({
  editMode: state.todos.editMode.mode,
  onPress,
});

const addFormConfiguration = {
  form: 'addForm',
};

// redux-form generates handleSubmit automatically
const formContainer = reduxForm(addFormConfiguration)(AddForm);
export default connect(mapStateToProps)(formContainer);
