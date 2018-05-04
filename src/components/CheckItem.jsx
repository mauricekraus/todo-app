import React from 'react';
import { ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from 'material-ui';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

const CheckItem = ({
  title, completed, onCheck, onDelete, onEdit,
}) => (
  <div>
    <ListItem role={undefined} dense divider>
      <Checkbox checked={completed} onClick={onCheck} tabIndex={-1} />
      <ListItemText primary={title} />
      <div>
        <IconButton aria-label="Edit" onClick={onEdit}>
          <EditIcon />
        </IconButton>
      </div>
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
  onEdit: PropTypes.func.isRequired,
};
