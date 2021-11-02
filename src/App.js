import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/categories" exact component={Categories} />
          <Route path="/" exact component={Books} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;