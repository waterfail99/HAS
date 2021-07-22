import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class Login extends Component {
    render() {
        return (
            <form>
                <Link className="nav-link" to={"/getcode"}><button type="submit" className="btn btn-dark btn-lg btn-block">Patience</button></Link>
                <div className="form-space"></div>
                <Link className="nav-link" to={"/nurselogin"}><button type="submit" className="btn btn-dark btn-lg btn-block">Nurse</button></Link>
                <div className="form-space"></div>
                <Link className="nav-link" to={"/doctorlogin"}><button type="submit" className="btn btn-dark btn-lg btn-block">Doctor</button></Link>
            </form>
        );
    }
}
