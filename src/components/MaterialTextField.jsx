import React from 'react';
import { TextField } from 'material-ui';

export const MaterialTextField = ({ label, input }) => <TextField label={label} {...input} margin="normal" />;
export default MaterialTextField;
