import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Header from 'components/Header'
import LandingPage from 'pages/LandingPage'
import QueuePage from 'pages/QueuePage'
import './App.css';

const App = () => (
  <BrowserRouter>
    <Header />
    <Route exact path={'/'} component={LandingPage} />
    <Route path={'/queue'} component={QueuePage} />
  </BrowserRouter>
)

export default App;
