import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import EmployeeListComponent from './components/EmployeeListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        
        <HeaderComponent />

          <div className="container">
            <Switch>
              <Route path="/" exact component = {EmployeeListComponent}></Route>
              <Route path="/employees" component = {EmployeeListComponent}></Route>
              <Route path="/add-employee" component = {CreateEmployeeComponent}></Route>
              <Route path="/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
            </Switch>
          </div>

        <FooterComponent />
       
      </Router>
    </div>
    
  );
}

export default App;
