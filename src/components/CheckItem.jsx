import React from 'react';
import { ListItem, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from 'material-ui';
import CommentIcon from '@material-ui/icons/Comment';
import { connect } from 'react-redux';

const CheckItem = ({ title, completed, onCheck }) => (
  <div>
    <ListItem role={undefined} dense button onClick={onCheck}>
      <Checkbox checked={completed} tabIndex={-1} disableRipple />
      <ListItemText primary={title} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Comments">
          <CommentIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  </div>
);

export default CheckItem;
