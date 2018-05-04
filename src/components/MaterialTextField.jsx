import React from 'react';
import { TextField } from 'material-ui';
import { propTypes } from 'redux-form';
import PropTypes from 'prop-types';

const MaterialTextField = ({ label, input }) => (
  <TextField label={label} {...input} margin="normal" />
);
export default MaterialTextField;

MaterialTextField.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.any,
  }).isRequired,
};
