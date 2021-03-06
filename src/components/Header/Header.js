import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from 'static/images/logo.png';

const Header = () => {
  return (
    <div className="header">
        <div className="logo-section">
          <Link to="/">
            <img src={logo} className="header-logo" alt="logo" />
          </Link>
        </div>
        <div className="header-bar">
          {/*<div className="help">*/}
          {/*  <a*/}
          {/*    href="https://jisoo0925.github.io"*/}
          {/*    target="_blank"*/}
          {/*    rel="noopener noreferrer"*/}
          {/*  >*/}
          {/*    help*/}
          {/*  </a>*/}
          {/*</div>*/}
          <div className="menu">
            menu
            <ul>
              <li><Link to="/queue">Queue</Link></li>
              <li><Link to="/stack">Stack</Link></li>
              <li><Link to="/priority_queue">Priority Queue</Link></li>
              <li><Link to="/hash_map">Hash Map</Link></li>
              <li><Link to="/deque">Deque</Link></li>
              {/*<li><Link to="/heap">Heap</Link></li>*/}
              {/*<li><Link to="/binary_search_tree">Binary Search Tree</Link></li>*/}
              {/*<li><Link to="/binary_tree">Binary Tree</Link></li>*/}
            </ul>
          </div>
        </div>
      </div >
  )
}

export default Header
