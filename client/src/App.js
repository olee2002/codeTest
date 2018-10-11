import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Navbar from './Components/Navbar'
import EmployeeList from './Components/EmployeeList'
import EmployeePage from './Components/EmployeePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path='/employees' component={EmployeeList} />
              <Route exact path='/employees/:employeeId' component={EmployeePage} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
