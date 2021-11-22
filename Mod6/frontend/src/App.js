import './App.css';
import Header from './components/layouts/Header';
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';

import HomePage from './pages/homePage';
import CristianPage from './pages/cristianPage';
import ContactoPage from './pages/contactoPage';
import NovedadesPage from './pages/novedadesPage';
import PortfolioPage from './pages/portfolioPage';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router> 
        <Header/>
        <Nav/>
        <Switch> 
          <Route path="/" exact component={HomePage} />
          <Route path="/cristian" exact component={CristianPage} />
          <Route path="/contacto" exact component={ContactoPage} />
          <Route path="/novedades" exact component={NovedadesPage} />
          <Route path="/portfolio" exact component={PortfolioPage} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
