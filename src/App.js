import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import FormDog from './components/FormDog/FormDog';
import Favorite from './components/Favorite/Favorite';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './helpers/PrivateRoute';
import PageNotFound from './components/PageNotFound/PageNotFound';

// axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.baseURL = 'https://dog-back-zeww.onrender.com';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/favorite' component={Favorite} />
        <Route exact path='/detail/:id' component={Detail} />
        <Route exact path='/formAdd' component={FormDog} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='/*' component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
