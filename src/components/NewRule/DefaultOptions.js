import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
                        return(
                            <MenuItem key={i} value={i}>{k}</MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    );
};

export default function DefaultOptions (){
    const classes = useStyles();

    const [state, setState] = React.useState({
        type: "",
        priority: "",
        exempt: false
      })

    function handleSelect(evt) {
        const value = evt.target.value;
        setState({
        ...state,
        [evt.target.name]: value
        });
    }

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
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
                        checked={state.exempt}
                        onChange={handleChange('exempt')}
                        value={false}
                        color="primary"
                    />
                    }
                    label="Mod Exempt"
                />
            </FormControl>
        </div>
    );  
}