import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './index.scss';
import { Router, Route } from 'react-router-dom';
import Home from './pages/home';
import * as serviceWorker from './serviceWorker';

const createHistory = require('history').createBrowserHistory;

 
// ! we need here to insert all components to 'Route' and render only 'Router' from here
ReactDOM.render(
  <Router history={createHistory()}>
    <Route path="/trash" component={() => <div>Trash! </div>} />
    <Route path="/drafts" component={() => <div>Drafts!</div>} />

    <React.StrictMode>
      <React.Fragment>
        <CssBaseline />
        <Home />
      </React.Fragment>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
