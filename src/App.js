import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Basic from './Basic';
import Use from './Use';
import Text from './Components/Text';
import Mode from './Components/Mode';

function App() {
  // let x = prompt("enter")
 
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {/* <Home text={x}></Home>
      <About></About> */}
      {/* <Basic></Basic> */}
      {/* <Use></Use> */}
      {/* <Text></Text> */}
      <Mode text=" Day & Night mode switcher "></Mode>
      
    </div>
  );
}

export default App;
