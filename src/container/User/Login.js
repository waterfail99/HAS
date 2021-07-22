import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Login() {
        return (
            <form>

                <h3 className="form-title">Log in</h3>
                <h4>User</h4>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <Link to={"/getcode"}><button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button></Link>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
}
export default Login;