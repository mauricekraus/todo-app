import React from 'react';
import { ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from 'material-ui';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

const CheckItem = ({
  title, completed, onCheck, onDelete,
}) => (
  <div>
    <ListItem role={undefined} dense button onClick={onCheck}>
      <Checkbox checked={completed} tabIndex={-1} disableRipple />
      <ListItemText primary={title} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  </div>
);

export default CheckItem;

CheckItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
