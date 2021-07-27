// React imports
import React, { useState } from 'react';
// CSS imports
import './components/css/Validation.css'

function Validation({ Login }) {

    const [ credentials, setCredentials ] = useState({email: "", password: ""})

    const formHandler = (e) => {
        e.preventDefault();
        Login(credentials)
    }

    return (
    <div className="form-container">
        <form className="form" onSubmit={formHandler} >
            <div className="login-form">
            <label className="login-label">Login</label>
                <div className="login-container">
                    <input className="login-input" type="email" onChange={e => setCredentials({...credentials, email: e.target.value})} value={credentials.email}></input>
                </div>
                <label className="password-label">Password</label>
                <div className="password-container">
                    <input className="password-input" type="password" onChange={e => setCredentials({...credentials, password: e.target.value})} value={credentials.password}></input>
                </div>
                <button className="btn btn-primary login-button">Log In</button>
            </div>
        </form>
    </div>
    )
}

export default Validation;
