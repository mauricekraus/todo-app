import React from 'react';
import { Button } from 'material-ui';
import { Field } from 'redux-form';
import MaterialTextField from '../MaterialTextField';
import './addForm.css';

type Props = {
  handleSubmit: (() => void) => void,
  onPress: () => void,
  editMode: boolean,
};

const AddForm = ({ handleSubmit, onPress, editMode }: Props) => (
  <div>
    <form className="addForm-container" onSubmit={handleSubmit(onPress)}>
      <Field name="todoTitle" label="Todo title" component={MaterialTextField} />
      <Button type="submit" color="primary" variant="raised">
        {editMode ? 'Update' : 'Create'}
      </Button>
    </form>
  </div>
);

export default AddForm;
