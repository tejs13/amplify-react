import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';
import RouteChangeTracker from './RouteChangeTracker'
import HomeScreen from './HomeScreen/Screens/HomeScreen';


const TRACKING_ID = "UA-252607377-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <HomeScreen/>
      <RouteChangeTracker/>
      </div>
    
  );
}

export default App;
