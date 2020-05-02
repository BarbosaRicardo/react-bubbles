/******************************************************************************
 * PrivateRoute.js
 * 
 * description: implements a custom protected route using an
 *              authentication token and Redirect
 * 
 * Purpose:     To protect any routes from being rendered
 *              if the user is not authenticated with 
 *              a token from the server 
 *******************************************************************************/

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => {
    return (
        // renders a <Route /> and passes all the props through it 
        <Route
        {...rest}
        // render props pattern given by the TK
        render = {props => {
            // checks if the user is authenticated, if so, it renders the component prop, 
            // else redirects to /login 
            if(localStorage.getItem('token'))
            {
                return <Component {...props} />;
            }
            else
            {
                return <Redirect to="/" />;
            }
        }}
        /> //end of Route component 
    ) // end of return statement 
} // end of PrivateRoute function 

export default PrivateRoute;
