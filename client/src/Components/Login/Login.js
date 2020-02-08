// import React from "react"; 
// import "./Login.css";

// const Login = () => {
//     return (
//         <div className="login-window">
//             <h1>This is the Login Window</h1>
            
//         </div>
//     )
// }

// export default Login; 

import React from "react";
import {useAuth0} from "../../react-auth0-spa";

const Login = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      this is the login component
      
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  );
};

export default Login;