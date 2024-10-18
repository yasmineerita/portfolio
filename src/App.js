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

function App() {
  return (
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
  );
}

export default App;
