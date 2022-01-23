import "./App.css"
import Dashboard from "./Dashboard"

import { createTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#7289da"
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard></Dashboard>
    </ThemeProvider>
  );
}

export default App