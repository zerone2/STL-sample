import React from 'react'
import { Link } from 'react-router-dom';
import './LandingPage.scss'
import logo from 'static/images/logo.png'

const LandingPage = () => {
  return (
    <div className="landing">
        <div className="main-section">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="menu-list">
            <Link to="/queue">Queue</Link>
            <Link to="/stack">Stack</Link>
            <Link to="/priority_queue">Priority Queue</Link>
            <Link to="/hash_map">Hash Map</Link>
            <Link to="/deque">Deque</Link>
            {/*<Link to="/heap">Heap</Link>*/}
            {/*<Link to="/binary_search_tree">Binary Search Tree</Link>*/}
            {/*<Link to="/binary_tree">Binary Tree</Link>*/}
          </div>
        </div>
      </div>
  )
}

export default LandingPage
