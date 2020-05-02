/***********************************************************************
 * axiosAuth.js
 * 
 * Description:     An Axios configuration. 
 * 
 * Purpose:         To attach an Authorization: <token>
 *                  header to requests. This module is 
 *                  imported each time the application 
 *                  needs to exchange data with a protected 
 *                  endpoint.
 ************************************************************************/


import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            Authorization: token
        } //end of headers
    }); //end of return statement 
}; // end of axiosWithAuth
