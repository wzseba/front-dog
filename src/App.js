import {
  BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';

import axios from 'axios';
import PageNotFound from './components/PageNotFound/PageNotFound';


axios.defaults.baseURL = 'http://localhost:3001/';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/*" component={PageNotFound} /> 
      </Switch>
    </Router>
  )
}

export default App;
// eslint-disable-next-line

