import React from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import AddFormComponent from './AddFormComponent';

const AddFormContainer = ({ handleSubmit, onPress, editMode }) => (
  <AddFormComponent onPress={onPress} handleSubmit={handleSubmit} editMode={editMode} />
);

const addFormConfiguration = {
  form: 'addForm',
};

// Redux-form generates handleSubmit automatically
export default reduxForm(addFormConfiguration)(AddFormContainer);

AddFormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};
