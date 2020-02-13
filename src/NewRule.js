import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 800,
        minWidth: 600,
        marginTop: '10px',
        marginBottom: '10px',
        backgroundColor: '#f2f3ff'
    },
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

const CustomSelect = props => {
    const { label, labelId, id, handleSelect, value, options} = props;
    const classes = useStyles();
  
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
  
    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id={labelId}>
                {label}
            </InputLabel>
            <Select
                name={id}
                labelId={labelId}
                id={id}
                value={value}
                onChange={handleSelect}
                labelWidth={labelWidth}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {
                    options.map( (k, i)  =>{
                        console.log(k, i)
                        return(
                            <MenuItem key={i} value={i}>{k}</MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    );
};

export default function NewRule (){
    const classes = useStyles();

    const [state, setState] = React.useState({
        type: "",
        priority: "",
        exempt: "",
        leaveComment: false,
        lockcomment: false,
        stickycomment: false,
        modmail: false,
        message: false
      })

    function handleSelect(evt) {
        console.log(evt)
        const value = evt.target.value;
        setState({
        ...state,
        [evt.target.name]: value
        });
        console.log(state)
    }

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Grid item xs={12}>
                <Card className={classes.card}>
                    <CardContent>
                        <div>
                            <CustomSelect
                                label="Type"
                                lableId="type-label"
                                id="type"
                                handleSelect={handleSelect}
                                value={state.type}
                                options={[
                                    "Comment", "Submission", 
                                    "Text Submission", "Link Submissinon",
                                    "X-Post Submission", "Any"
                                ]}
                            />
                            <FormControl variant="outlined" className={classes.formControl}>
                                <TextField
                                    id="outlined-priority"
                                    label="Priority"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    placeholder="-1 to 10000"
                                />
                            </FormControl>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedB}
                                        onChange={handleChange('exempt')}
                                        value={false}
                                        color="primary"
                                    />
                                    }
                                    label="Mod Exempt"
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl variant="outlined" className={classes.optionalControl}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedB}
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
                                                checked={state.checkedB}
                                                onChange={handleChange('lockcomment')}
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
                                                checked={state.checkedB}
                                                onChange={handleChange('stickycomment')}
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
                        <div>
                            <FormControl variant="outlined" className={classes.optionalControl}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedB}
                                        onChange={handleChange('message')}
                                        value={false}
                                        color="primary"
                                    />
                                    }
                                    label="Send User Message"
                                />
                            </FormControl>
                                {
                                    state.message &&
                                    <div>
                                    <div>
                                    <FormControl variant="outlined" className={classes.optionalControl}>
                                        <TextField
                                            InputProps={{ fullWidth: true }}
                                            fullWidth 
                                            id="outlined-message-subject"
                                            label="User Message Subject"
                                            placeholder="User Message Subject"
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
                                            id="outlined-message-message"
                                            label="User Message Content"
                                            placeholder="User Message Content"
                                            multiline
                                            variant="outlined"
                                        />
                                    </FormControl>
                                    </div>
                                    </div>
                                }
                        </div>
                        <div>
                            <FormControl variant="outlined" className={classes.optionalControl}>
                                <FormControlLabel
                                    control={
                                    <Checkbox
                                        checked={state.checkedB}
                                        onChange={handleChange('modmail')}
                                        value={false}
                                        color="primary"
                                    />
                                    }
                                    label="Send Modmail"
                                />
                            </FormControl>
                                {
                                    state.modmail &&
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

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
      );  
  }