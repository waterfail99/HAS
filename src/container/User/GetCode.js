import React,{ useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Alert from 'react-popup-alert'

function GetCode() {
    const onGetCode = () => {
        alert('Your Code is 112233',<Link to={"/"}>ok</Link>);
        
    }
        return (
            <form>

                <h3 className="form-title">Appointment Code</h3>
                <h4>Patience Details</h4>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="email" className="form-control" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="email" className="form-control" placeholder="Enter Phone Number" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={() => onGetCode()}>Get Code</button>
            
            </form>
            
        );
}
export default GetCode;