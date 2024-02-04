import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="recent-event">Join #KeffiyehThursday, get your keffiyeh from Palestine today! </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          if you see this, it works -elvis
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
