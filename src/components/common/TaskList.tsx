import React, { FC } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import { Checkbox, Divider, IconButton } from '@material-ui/core';
import { Task } from 'services/models/Task';

const TaskList: FC<{
  tasks: Task[];
  onClickTask: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
}> = ({ tasks, onClickTask, onDeleteTask }) => {
  return (
    <List>
      {tasks.map((task) => {
        return (
          <>
            <ListItem key={task.id} onClick={() => onClickTask(task)}>
              <ListItemIcon>
                <Checkbox checked={task.isDone} />
              </ListItemIcon>
              <ListItemText primary={task.title} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => onDeleteTask(task)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </>
        );
      })}
    </List>
  );
};

export default TaskList;
