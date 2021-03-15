import './App.css';
import HomePage from './pages/Homepage'
import FavoritePage from './pages/FavoritePage'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from "@material-ui/styles";
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import ScrollTop from './components/ScrollTop'
import { Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#e83b42',
    },
    secondary: {
      main: "#e83b42",
    },

  },
});
const useStyles = makeStyles({
  bg: {
    backgroundColor: "#000000",
    color: '#e83b42'
  }
})

function App() {
  const classes = useStyles()

  return (
    <>
    <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <Paper width={1} className={classes.bg} style={{minHeight: '100vh'}}>
          <Navbar />
            <Switch>
              <Route path="/fav" component={FavoritePage} />
              <Route path="/detail/:id" component={FavoritePage} />
              <Route path="/" component={HomePage} />
            </Switch>
            <ScrollTop />
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
