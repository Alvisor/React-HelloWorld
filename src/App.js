import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Self Component Greeting.jsx */}
        {/*<Greeting name="Manuel"></Greeting>*/}
        <GreetingF name={"Manuel"}></GreetingF>
      </header>
    </div>
  );
}

export default App;
