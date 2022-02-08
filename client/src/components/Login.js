import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState("");

    const login = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8000/api/user/login", {
            email: email, password: password
        },
        {   // this will force the sending of cookies so they can be updated
            // XMLHttpRequest from a different domain cannot set cookie values for their own domain
            // unless withCredentials is set to true before making the request.
            withCredentials: true
        }
        )
        .then((res) => {
            console.log("LOGIN RES.DATA: ", res.data);
            navigate("/home")
        })
        .catch(err => {
            console.log(err)
            setErrorMessage(err.response.data.msg)
        })
    }

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <p className="error-text">{errorMessage ? errorMessage: ""}</p>
            <form className="login-form" onSubmit={login}>
                <div className="login-form-div">
                    <label>Email:</label>
                    <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="login-form-div">
                    <label>Password:</label>
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button className="login-submit-button" type="submit">Sign In</button>
                </div>
                <p style={{color: "crimson"}}>{errorMessage ? "Invalid login attempt" : null}</p>
            </form>
        </div>
    )
}
