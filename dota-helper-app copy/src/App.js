import logo from './logo.svg';
import './App.css';
import MyTimer from './timer.js';

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
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
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

export default App;
