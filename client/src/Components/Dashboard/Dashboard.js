import React from 'react';
import './Dashboard.css';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from "../../react-auth0-spa";

const Dashboard = () => {
    const { user } = useAuth0();
    console.log(user);

    function viewOrders() {
        console.log("view user's order history function fire")
    }

    return (
        <div className="dashboard">
            <h1>This is the dashboard component</h1>
            <p>user email: { user.email }</p>
            <p>user name: { user.name }</p>
            <p>user nickname: { user.nickname }</p>
            <Button variant="primary"
            onClick={()=>{console.log("update info button triggered")}}
            >Update Info</Button>
            <br />
            <Button variant="secondary"
            onClick={()=>{viewOrders()}}
            >View Purchase History</Button>
        </div>

    )
}


export default Dashboard; 