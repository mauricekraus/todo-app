import * as React from 'react';
import { ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from 'material-ui';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

type Props = {
  title: string,
  completed: boolean,
  onCheck: () => void,
  onDelete: () => void,
  onEdit: () => void,
};

function CheckItem({
  title, completed, onCheck, onDelete, onEdit }:
Props) {
  return (
    <div>
      <ListItem role={undefined} dense divider>
        <Checkbox checked={completed} onClick={onCheck} tabIndex={-1} />
        <ListItemText
          primary={title}
          style={{ textDecoration: completed ? 'line-through' : 'none' }}
        />
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
}

export default CheckItem;
