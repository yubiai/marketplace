import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '159ch',
      backgroundColor: theme.palette.background.paper,
      padding: '20px',
    },
    inline: {
      
      display: 'flex',
    },
    btnSave: {
        display: 'flex',
        alignItems: 'center',
        right: '1px',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginBottom: '5px',
        borderRadius: '10px',
        backgroundColor: '#FCB877',
        color: '#fff',
        minWidth: '180px',
        maxWidth: '180px',
        top: '-4rem', 
        '&:hover': {
          borderBottom: 'none',
          color: '#008968',
          backgroundColor: 'transparent', 
        }  
      },

}));

export default function EditName() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Modify Shipping Address</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Street
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Street"
            type="text"
            width="408px"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Number"
            type="number"
            width="204px"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Apartment"
            type="text"
            width="204px"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="City"
            type="text"
            width="204px"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Province/State"
            type="province"
            width="204px"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Country"
            type="country"
            width="204px"
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.btnSave}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}