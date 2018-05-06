import React from 'react';
import { TextField } from 'material-ui';

type Props = {
  label: string,
  input: Object,
};

const MaterialTextField = ({ label, input }: Props) => (
  <TextField label={label} {...input} margin="normal" />
);
export default MaterialTextField;
