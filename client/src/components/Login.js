/******************************************************************************
 * Login.js
 * 
 * Description:   A form that takes in a user's credentials and 
 *                calls the login endpoint with a POST request.
 * 
 * Purpose:       To redirect the user to the protected route when
 *                the login API call returns.
 *****************************************************************************/

import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosAuth.js'
import styled from 'styled-components'

const Title = styled.h4`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({username:'', password:''})

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
      .post('api/login', credentials)
      .then(results => {
        localStorage.setItem('token', results.data.payload)
        props.history.push('/bubbles')
      })
      .catch(err => {
        console.log('ERROR', err)
      })
  }
  return (
    <>
    
      <Title>Welcome to the Bubble App!</Title>
      
      {/* <p>Build a login page here</p> */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" value={credentials.username} onChange={handleChange}/>
        <input type="text" name="password" placeholder="password" value={credentials.password} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};



export default Login;


