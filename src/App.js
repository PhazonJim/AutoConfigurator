import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import RuleCard from './RuleCard';
import UploadPanel from './UploadPanel.js'

import YAML from 'yaml'
import convert from './utils/yamlUtils'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  let myObject = [];

  const [values, setValues] = React.useState({
    buffer: '',
    myRules: []
  });

  const handleChangeForm = name => event => {
    setValues({ ...values, [name]: event.target.value});
  }

  const onSaveInput = () => {
    myObject = YAML.parseAllDocuments(values['buffer']);
    let jsonObject = convert(myObject)
    console.log(jsonObject)
    setValues({myRules: jsonObject})
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" component="h1" gutterBottom>
              AutoModerator Configuration
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Container >
        <UploadPanel
          values={values}
          onChange={handleChangeForm('buffer')}
          onSaveInput={onSaveInput}
        />
        <div>
          {
            
            values.myRules.map((rule, i) => {
                return (<RuleCard 
                  values={rule} 
                  />)
              
            })
          }
        </div>
        
    </Container>
    </div>
  );
}
