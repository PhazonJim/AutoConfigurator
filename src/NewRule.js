import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

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
        minWidth: 120,
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
        exempt: ""
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
                        <CustomSelect
                            label="Priority"
                            lableId="priority-label"
                            id="priority"
                            handleSelect={handleSelect}
                            value={state.priority}
                            options={["10", "20", "30"]}
                        />
                        <CustomSelect
                            label="Mod Exempt"
                            lableId="exempt-label"
                            id="exempt"
                            handleSelect={handleSelect}
                            value={state.exempt}
                            options={["True", "False"]}
                        />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
      );  
  }