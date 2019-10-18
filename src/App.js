import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import List from "./pages/List/index";
import Create from './pages/Create/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Router>
        <Nav />
        <Switch> 
          <Route path="/list">
            <List />
          </Route>
          <Route path="/add" 
          // component={Create} 
          >
            <Create />
          </Route>
        </Switch>
      </Router>
    </div>
    </Provider>   
  );
}

export default App;
