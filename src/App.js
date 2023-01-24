import {
  BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import './App.css';
import axios from 'axios';
import PageNotFound from './components/PageNotFound/PageNotFound';


axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/"><Landing/></Route>
        <Route path="/*"><PageNotFound/></Route>
      </Switch>
    </Router>
  )
}

export default App;
// eslint-disable-next-line
{/* <Route exact path="/" component={LandingPage}/>
<Route path="/home" component={Home} /> */}
