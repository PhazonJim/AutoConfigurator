import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    marginTop: '10px',
    marginBottom: '10px',
    backgroundColor: '#f2f3ff'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function RuleCard(props) {
  const {values} = props
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        {
          Object.keys(values).map( (k)  =>{
              return(
                <div>
                  <TextField
                      id="standard-name"
                      label={k}
                      className={classes.textField}
                      value={JSON.stringify(values[k])}
                      margin="normal"
                      fullWidth
                  />
                  <br/>
                </div>
              )
          })
        }

      </CardContent>
    </Card>
  );
}