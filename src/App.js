import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom'
import Header from 'components/Header'
import { LandingPage, QueuePage, StackPage, PriorityQueuePage, HashMapPage } from 'pages'
import './App.css';

const App = () => (
  <BrowserRouter>
    <Header />
    <Route exact path={'/'} component={LandingPage} />
    <Route path={'/queue'} component={QueuePage} />
    <Route path={'/stack'} component={StackPage} />
    <Route path={'/priority_queue'} component={PriorityQueuePage} />
    <Route path={'/hash_map'} component={HashMapPage} />
  </BrowserRouter>
)

export default App;
