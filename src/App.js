import {
  BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';

import axios from 'axios';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';


axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Home} />
      <Route path="/*" component={PageNotFound} /> 
      </Switch>
    </Router>
  )
}

export default App;
// eslint-disable-next-line

