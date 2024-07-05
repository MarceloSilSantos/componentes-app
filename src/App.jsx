import logo from './logo.svg';
import './App.css';
//import './components/compExemplo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <compExemplo>
        <h1>Exemplo de componente</h1>
      </compExemplo>
    </div>
  );
}

export default App;
