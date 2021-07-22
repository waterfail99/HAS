import React from "react";
import Header from '../../components/Header'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const data = [
      { id: 1, name: "John Doe" ,time:"18:30", status:"Pending"},
      { id: 2, name: "Victor Wayne" ,time:"18:30", status:"Done"},
      { id: 3, name: "Jane Doe" ,time:"18:30", status:"Pending"},
    ];
function CheckAppointment (){

    const onStatus = () => {
        alert('Status Changed')
        
    }
    
    return (
     
      <div className="inner-nurse"> 
      <Header/>
          <h3>Check Appointment</h3>
          
        <table >
          <tr>
             <th>ID</th>
             <th>Patience Name</th>
             <th>Time</th>
             <th>Status</th>
            </tr>
            {data.map((user) => (
              <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.time}</td>
                  <td><button className="btn-status" onClick={()=> onStatus()}>{user.status}</button></td>
              </tr>
            ))}
        </table>
        </div>
    );
  };
export default CheckAppointment;