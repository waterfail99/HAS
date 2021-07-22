import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Login from "./container/login.component";
import SignUp from "./container/signup.component";
import UserLogin from "./container/User/Login";
import NurseLogin from "./container/Nurse/NurseLogin";
import DoctorLogin from "./container/Doctor/DoctorLogin";
import CheckAppointment from "./container/Nurse/CheckAppointment";
import Appointment from "./container/Doctor/Appointment";
import GetCode from "./container/User/GetCode";

function App() {
  return (
  <Router>
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/userlogin" component={UserLogin}/>
            <Route path="/doctorlogin" component={DoctorLogin}/>
            <Route path="/nurselogin" component={NurseLogin}/>
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/getcode" component={GetCode} />
            <Route path="/checkappointment" component={CheckAppointment}/>
            <Route path="/appointment" component={Appointment}/>
          </Switch>
        </div>
      </div>
    </div>
    
    </Router>
  );
}

export default App;
