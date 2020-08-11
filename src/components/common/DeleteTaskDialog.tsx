import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const DeleteTaskDialog: FC<{
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}> = ({ open, onClose, onDelete }) => {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogContent>Do you really want to delete?</DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteTaskDialog;
