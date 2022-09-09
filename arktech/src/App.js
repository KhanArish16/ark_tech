import logo from "./logo.svg";
import "./App.css";
import Clock from "./Clock";

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
          <h1>Updated code by zeeshan</h1>
        </a>
      </header>
      <Clock />
    </div>
  );
}
export default App;
