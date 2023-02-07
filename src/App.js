import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
import RouteChangeTracker from './RouteChangeTracker'



const TRACKING_ID = "UA-252607377-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      
      <RouteChangeTracker/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Hello from Tejaskumar !</h1>
      </header>
    </div>
  );
}

export default App;
