import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ScrollToTop from './components/scrollTop'
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop/>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
