import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from 'components/Header'
import LandingPage from 'pages/LandingPage'
import QueuePage from 'pages/QueuePage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={'/'} component={LandingPage} />
        <Route path={'/queue'} component={QueuePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
