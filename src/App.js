import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from './components/HomePage';
import Header from './components/Header';
import AboutPage from './components/AboutPage';
import PortfolioPage from './components/PortfolioPage';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: '#FCD5CE',
            borderRadius: '15px',
            color: 'black',
            textTransform: 'none',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10
          }
        }
      }
    }
  });
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage />
          }
        />

        <Route
          path="/about"
          element={
            <AboutPage />
          }
        />

        <Route
          path="/portfolio"
          element={
            <PortfolioPage />
          }
        />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
