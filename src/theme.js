import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  card: {
    maxWidth: 800,
    minWidth: 600,
    marginTop: '10px',
    marginBottom: '10px',
    backgroundColor: '#f2f3ff'
  }
});

export default theme;
