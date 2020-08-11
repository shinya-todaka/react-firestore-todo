import React, { FC, useState } from 'react';
import { Task } from 'services/models/Task';
import TaskList from 'components/common/TaskList';
import useTasks from 'hooks/use-tasks';
import createTask from 'services/create-task';
import deleteTask from 'services/delete-task';
import updateTask from 'services/update-task';
import { makeStyles, Container } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import CreateTaskDialog from 'components/common/CreateTaskDialog';
import DeleteTaskDialog from 'components/common/DeleteTaskDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
  },
}));

const ToDo: FC<{ uid: string }> = ({ uid }) => {
  const classes = useStyles();
  const { tasks } = useTasks({ uid });
  const [openCreateTaskDialog, setOpenCreateTaskDialog] = useState(false);
  const [openDeleteTaskDialog, setOpenDeleteTaskDialog] = useState(false);
  const [deletableTask, setDeletableTask] = useState<Task | null>(null);

  const handleClickTask = (task: Task) => {
    updateTask(uid, task);
  };

  const handleOpenCreateTaskDialog = () => {
    setOpenCreateTaskDialog(true);
  };

  const handleCloseCreateTaskDialog = () => {
    setOpenCreateTaskDialog(false);
  };

  const handleCreateTask = async (name: string) => {
    await createTask(uid, name);
    setOpenCreateTaskDialog(false);
  };

  const handleCloseDeleteTaskDialog = () => {
    setDeletableTask(null);
    setOpenDeleteTaskDialog(false);
  };

  const handleSetDeletableTask = (task: Task) => {
    setDeletableTask(task);
    setOpenDeleteTaskDialog(true);
  };

  const handleDeleteTask = async () => {
    if (deletableTask) {
      await deleteTask(uid, deletableTask);
      setOpenDeleteTaskDialog(false);
    }
  };

  return (
    <>
      <Container className={classes.root}>
        <TaskList
          tasks={tasks}
          onClickTask={handleClickTask}
          onDeleteTask={handleSetDeletableTask}
        />
      </Container>
      <Fab className={classes.fab} onClick={handleOpenCreateTaskDialog}>
        <AddIcon />
      </Fab>
      <CreateTaskDialog
        open={openCreateTaskDialog}
        onClose={handleCloseCreateTaskDialog}
        onCreate={handleCreateTask}
      />
      <DeleteTaskDialog
        open={openDeleteTaskDialog}
        onClose={handleCloseDeleteTaskDialog}
        onDelete={handleDeleteTask}
      />
    </>
  );
};

export default ToDo;
