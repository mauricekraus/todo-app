import React from 'react';
import { reduxForm } from 'redux-form';
import AddFormComponent from './AddFormComponent';

const AddFormContainer = ({ handleSubmit, onPress }) => (
  <AddFormComponent onPress={onPress} handleSubmit={handleSubmit} />
);

const addFormConfiguration = {
  form: 'addForm',
};

// Redux-form generates handleSubmit automatically
export default reduxForm(addFormConfiguration)(AddFormContainer);
