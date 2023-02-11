import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fcomponent/>
        <Ccomponent number = "345"
        // для передачі масиву:<Ccomponent numbers = {["1,2,3,4,5"]}/>
        />
        <Menu/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Vlad Tipukhov
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vlad Tipukhovf
        </a>
      </header>
    </div>
  );
}

export default App;
