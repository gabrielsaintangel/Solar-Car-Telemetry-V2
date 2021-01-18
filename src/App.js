import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Gps from './pages/Gps';
import Solar from './pages/Solar';
import Battery from './pages/Battery';
import Motor from './pages/Motor';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/motor' component={Motor}/>
          <Route path='/battery' component={Battery}/>
          <Route path='/solar' component={Solar}/>
          <Route path='/gps' component={Gps}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
