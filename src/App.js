import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';

import TabPanel from './components/TabPanel';
import ImportPanel from './components/Import/ImportPanel';
import NewRule from './components/NewRule/BaseRule';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function App() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
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
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Add New Rule" {...a11yProps(0)} />
        <Tab label="Import Config" {...a11yProps(1)} />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <NewRule/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ImportPanel/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
