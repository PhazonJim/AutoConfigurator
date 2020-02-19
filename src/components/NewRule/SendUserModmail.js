import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    optionalControl: {
        display: "flex",
        margin: theme.spacing(1),
    }
}));

export default function SendUserModmail (){
    const classes = useStyles();

    const [state, setState] = React.useState({
        sendUserModmail: false
      })

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
        <div>
            <FormControl variant="outlined" className={classes.optionalControl}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={state.sendUserModmail}
                        onChange={handleChange('sendUserModmail')}
                        value={false}
                        color="primary"
                    />
                    }
                    label="Send Modmail"
                />
            </FormControl>
                {
                    state.sendUserModmail &&
                    <div>
                    <div>
                    <FormControl variant="outlined" className={classes.optionalControl}>
                        <TextField
                            InputProps={{ fullWidth: true }}
                            fullWidth 
                            id="outlined-modmail-subject"
                            label="Modmail Subject"
                            placeholder="Modmail Subject"
                            multiline
                            variant="outlined"
                        />
                    </FormControl>
                    </div>
                    <div>
                    <FormControl variant="outlined" className={classes.optionalControl}>
                        <TextField
                            InputProps={{ fullWidth: true }}
                            fullWidth 
                            id="outlined-modmail-mesage"
                            label="Modmail Content"
                            placeholder="Modmail Message"
                            multiline
                            variant="outlined"
                        />
                    </FormControl>
                    </div>
                    </div>
                }
        </div>
            
    );  
}