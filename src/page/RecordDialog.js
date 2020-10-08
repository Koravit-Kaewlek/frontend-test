import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AppContext } from '../store/app-context';
import { TextField } from '@material-ui/core';

export default function RecordDialog() {
  const [value, setValue] = useState(1);
  const [error, setError] = useState(null);
  const {
    openRecordDialog,
    handleCloseRecordDialog,
    jokes,
    handleDisplayLength,
  } = useContext(AppContext);
  const handleChange = (e) => {
    const val = e.target.value;
    if (!val) {
      setError('Please enter the number of length.');
    } else if (val > jokes.total) {
      setError(`The length must be less than ${jokes.total}.`);
    } else if (val < 1) {
      setError('The length must be greater than 0.');
    } else {
      setError(null);
      setValue(val);
    }
  };
  const handleOk = () => {
    if (!error) {
      handleDisplayLength(value);
      handleCloseRecordDialog();
    }
  };
  return (
    <React.Fragment>
      <Dialog open={openRecordDialog} onClose={handleCloseRecordDialog}>
        <DialogTitle aria-label="display-length">Display Length</DialogTitle>
        <DialogContent>
          <DialogContentText aria-label="display-content">
            <TextField
              onChange={handleChange}
              defaultValue={jokes.length}
              helperText={error}
              error={error}
              type="number"
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions aria-label="display-action">
          <Button onClick={handleOk} color="primary">
            Ok
          </Button>
          <Button onClick={handleCloseRecordDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
