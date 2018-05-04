import React from 'react';
import { TextField } from 'material-ui';
import PropTypes from 'prop-types';

const MaterialTextField = ({ label, input }) => (
  <TextField label={label} {...input} margin="normal" />
);
export default MaterialTextField;

MaterialTextField.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
};
