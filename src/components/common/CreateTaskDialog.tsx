import React, { FC, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const CreateTaskDialog: FC<{
  open: boolean;
  onClose: () => void;
  onCreate: (title: string) => void;
}> = ({ open, onClose, onCreate }) => {
  const [name, setName] = useState('');

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogContent>
          <TextField
            placeholder="TODO"
            onChange={(e) => setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={() => onCreate(name)} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateTaskDialog;
