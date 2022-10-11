import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";
import Routing from './routes/routing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/"> Home </Link>
        <Link to="/otherpage">Other Page</Link>
      </header>
      <div>
        <Routing/>
      </div>
    </div>
  );
}

export default App;
