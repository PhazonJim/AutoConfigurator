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

export default function LeaveRemovalComment (){
    const classes = useStyles();

    const [state, setState] = React.useState({
        leaveComment: false,
        lockComment: false,
        stickyComment: false
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
                        checked={state.leaveComment}
                        onChange={handleChange('leaveComment')}
                        value={false}
                        color="primary"
                    />
                    }
                    label="Leave Removal Comment"
                />
                {
                    state.leaveComment &&
                    <div>
                    <div>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={state.lockComment}
                                onChange={handleChange('lockComment')}
                                value={false}
                                color="primary"
                            />
                            }
                            label="Lock Comment"
                        />
                    </div>
                    <div>
                        <FormControlLabel
                            control={
                            <Checkbox
                                checked={state.stickyComment}
                                onChange={handleChange('stickyComment')}
                                value={false}
                                color="primary"
                            />
                            }
                            label="Sticky Comment"
                        />
                    </div>
                    <div>
                        <TextField
                            InputProps={{ fullWidth: true }}
                            fullWidth 
                            id="outlined-removal-comment"
                            label="Removal Comment"
                            placeholder="Removal Comment"
                            multiline
                            variant="outlined"
                        />
                    </div>
                    </div>
                }
            </FormControl>
        </div>
            
      );  
}