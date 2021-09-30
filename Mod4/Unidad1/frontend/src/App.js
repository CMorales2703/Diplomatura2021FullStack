import Header from './components/layouts/Header'
import Nav from './components/layouts/Nav'
import Footer from './components/layouts/Footer'
import HomePage from './pages/homePage'

import './styles/components/layouts/Footer.css'
import './styles/components/layouts/Header.css'
import './styles/components/layouts/Nav.css'
import './styles/components/pages/homePage.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
