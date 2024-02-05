import './App.css';

import Home from './pages/Home';
import Event from './pages/Events';
import Archives from './pages/Archives';
import Contact from './pages/Contact';
import Statements from './pages/Statements';

import Navbar from './components/Navbar.js';

function App() {
  let component

  switch (window.location.pathname) {
    case "/":
      component = <Home className="body" />
      break
    case "/events":
      component = <Event className="body" />
      break
    case "/statements":
      component = <Statements className="body" />
      break
    case "/contact":
      component = <Contact className="body" />
      break
    case "/archives":
      component = <Archives className="body" />
      break
  }
  return (
    <div className="App">
      <div className="recent-event">Join #KeffiyehThursday, get your keffiyeh from Palestine today! </div>
      <Navbar />
      <div className="body">
        {component}
      </div>
    </div>
  );
}

export default App;
