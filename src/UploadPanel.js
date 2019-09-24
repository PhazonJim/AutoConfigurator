import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    button: {
      marginTop: '10px',
      marginBottom: '10px'
    }
  }));

export default function UploadPanel(props) {
  const {values, onChange, onSaveInput} = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
    values['buffer'] = ''
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.button}
        variant="contained" 
        color="primary"
        onClick={handleClickOpen}>
        Import Config
      </Button>
      <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth='lg'
      >
        <DialogTitle id="form-dialog-title">Import Tool</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please copy and paste your existing AutoModerator Configuration file here. 
            Press "Import" when ready to import rules.
          </DialogContentText>
          <TextField
            id="outlined-multiline-static"
            label="Config"
            multiline
            rows="50"
            className={classes.textField}
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={onChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained" 
            onClick={handleClose} 
            color="primary">
            Cancel
          </Button>
          <Button 
            variant="contained"
            onClick={() => {
              onSaveInput();
              handleClose();  
            }}
            color="primary">
            Import
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
