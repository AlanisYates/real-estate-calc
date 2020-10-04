import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";

export default function PropertyList() {
  return (
    <List>
      <ListItem>
        <ListItemText>Hello hey</ListItemText>
        <ListItemSecondaryAction>
          <ListItemIcon>
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton edge="end">
              <DeleteIcon />
            </IconButton>
          </ListItemIcon>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="middle" />
    </List>
  );
}
