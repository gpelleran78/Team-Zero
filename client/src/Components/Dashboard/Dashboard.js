import React from 'react';
import './Dashboard.css';
import Button from 'react-bootstrap/Button';
import Media from 'react-bootstrap/Media';
import { useAuth0 } from "../../react-auth0-spa";
import { useHistory } from "react-router-dom";


const Dashboard = () => {
    const { user } = useAuth0();
    console.log(user);
    let history = useHistory();

    function viewOrders(email) {
        history.push("/myorders");
    }

    function updateInfo(email) {
        history.push("/myupdate");
    }

    return (
        <div className="container">
            {/* user image  */}
            <div className="row justify-content-center">
                <img
                    className="user-profile-img"
                    // width={64}
                    // height={64}
                    // className="mr-3"
                    src={user.picture}
                    alt="user-name"
                />

            </div>
            <div className="row justify-content-center">
                <h1 className="Header">my profile</h1>
            </div>

            {/* User meta data  */}
            <div className="row meta-data">
                {/* User Name Row  */}
                <ul className="list-unstyled">
                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://cdn2.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-01-512.png"
                            alt="name-icon"
                        />
                        <Media.Body>
                            <h5>my name: </h5>
                            <p> {user.name} </p>
                        </Media.Body>
                    </Media>

                    {/* User email address row  */}
                    <Media as="li">
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://cdn1.iconfinder.com/data/icons/neon-line-social-circles-black/100/Neon_Line_Social_Circles_50Icon_10px_grid-51-512.png"
                            alt="email-icon"
                        />
                        <Media.Body>
                            <h5>my email:</h5>
                            <p> {user.email} </p>
                        </Media.Body>
                    </Media>

                </ul>

                {/* These are the updae info and past hostory btns  */}
                <div className="row justify-content-center">
                    {/* <Button
                        onClick={() => updateInfo(user.email)}
                        className="update-historyBTN">
                        update my information
                </Button> */}

                    <br />

                    <Button
                        onClick={() => viewOrders(user.email)}
                        className="update-historyBTN">
                        view my order history
                </Button>

                </div>
            </div>
        </div>
    )
}


export default Dashboard;
//history.push("/myorders")