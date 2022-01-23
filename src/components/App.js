import './App.css';
import Dashboard from './Dashboard';

import green from '@material-ui/core/colors/green';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#7289da'
    }
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard></Dashboard>
    </ThemeProvider>
  );
}

export default App;