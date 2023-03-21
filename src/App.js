import logo from './logo.svg';
import './App.css';
import Banner from './components/banner/banner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Banner/>
        
        <p>
          {/*Edit <code>src/App.js</code> and save to reload.*/}
        </p>
        <a
          className="App-link"
          href="https://f1tv.formula1.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch F1 TV
        </a>
      </header>
    </div>
  );
}

export default App;
