import './App.css';
import HomePage from './pages/Homepage'
import FavoritePage from './pages/FavoritePage'
import AddPage from './pages/AddPage'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from "@material-ui/styles";
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import ScrollTop from './components/ScrollTop'
import { Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#E50914",
    },
  },
});
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#d32f2f',
    },
    secondary: {
      main: "#E50914",
    },
  },
});


function App() {
  return (
    <>
    <CssBaseline />
    <Paper width={1}>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        {/* <p>haiii</p> */}
          <Switch>
            <Route path="/fav" component={FavoritePage} />
            <Route path="/add" component={AddPage} />
            <Route path="/" component={HomePage} />
          </Switch>
          <ScrollTop />
      </ThemeProvider>
    </Paper>
    </>
  );
}

export default App;
