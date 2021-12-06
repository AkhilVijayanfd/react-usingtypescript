import React from 'react';
import './App.css';
import { ToggleButton } from './ToggleButton';
import { UserForm } from './UserForm';
import { Welcome } from './Welcome';
import { LoggedIn } from './LoggedIn';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className="App">
      <header className="App-header">
            <Welcome name="Akhil Vijayan" />
            <UserForm />
            <ToggleButton />
            <LoggedIn />
            <Router>
              <div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                </ul>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/dashboard">
                    <Dashboard />
                  </Route>
                </Switch>
              </div>
            </Router>
      </header>
    </div>
  );
}

export default App;
