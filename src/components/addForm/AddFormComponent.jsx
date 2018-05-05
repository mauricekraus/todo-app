import React from 'react';
import { Button } from 'material-ui';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import MaterialTextField from '../MaterialTextField';
import './addForm.css';

const AddFormComponent = ({ handleSubmit, onPress, editMode }) => (
  <div>
    <form className="addForm-container" onSubmit={handleSubmit(onPress)}>
      <Field name="todoTitle" label="Todo title" component={MaterialTextField} />
      <Button type="submit" color="primary" variant="raised">
        {editMode ? 'Update' : 'Create'}
      </Button>
    </form>
  </div>
);

export default AddFormComponent;

AddFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
};
