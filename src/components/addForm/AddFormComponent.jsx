import React from 'react';
import { Button } from 'material-ui';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

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

AddFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};
