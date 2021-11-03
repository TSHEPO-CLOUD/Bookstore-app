import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Books from './components/Books';
import Categories from './components/Categories';
import store from './redux/cofigureStore';
import { getBooks } from './redux/api/api';

store.dispatch(getBooks());

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Books} />
          <Route path="/categories" exact component={Categories} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
