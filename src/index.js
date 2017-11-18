import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from './view/Layout';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MidCol from './view/MidCol';
import RightCol from './view/RightCol';
import LeftCol from './view/LeftCol';
import Login from './view/Login';

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={LeftCol}></IndexRoute>
      <Route path="midCol" name="midCol" component={MidCol}></Route>
      <Route path="rightCol" name="rightCol" component={RightCol}></Route>
    </Route>
  </Router>,
app);

