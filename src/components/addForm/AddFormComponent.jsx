import React from 'react';
import { Button } from 'material-ui';
import MaterialTextField from '../MaterialTextField';
import { Field } from 'redux-form';

const AddFormComponent = ({ handleSubmit, onPress }) => (
  <div>
    <form onSubmit={handleSubmit(onPress)}>
      <Field name="todoTitle" label="Todo title" component={MaterialTextField} />
      <Button type="submit" color="primary" variant="raised">
        Create
      </Button>
    </form>
  </div>
);

export default AddFormComponent;
