// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Es6 from './pages/Es6';
import Flexbox from './pages/Flexbox';
import ReactPage from './pages/ReactPage';
import Angular from './pages/Angular';
import Other from './pages/Other';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/es6" component={Es6} />
          <Route path="/flexbox" component={Flexbox} />
          <Route path="/react" component={ReactPage} />
          <Route path="/angular" component={Angular} />
          <Route path="/other" component={Other} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
