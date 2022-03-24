import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Imports from './pages/Import';
import Reports from './pages/Report';

function App() {
  return (
    <>
    <Router>
     <Navbar/>
<Switch>
<Route path="/" exact component={Home}/>
<Route path="/imports" component={Imports}/>
<Route path="/reports" component={Reports}/>
</Switch>
    </Router>
    </>
  );
}

export default App;
