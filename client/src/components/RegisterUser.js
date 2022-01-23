import React, {useState} from 'react';
import axios from "axios";
import "../App.css"

export default function RegisterUser(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmReg, setConfirmReg] = useState("");
    const [errs, setErrs] = useState({})

    const register = e => {
        e.preventDefault();

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        };

        axios.post("http://localhost:8000/api/user/register",
        newUser, {
            withCredentials: true
        })
        .then(res => {
            console.log("REGISTER USER AXIOS POST: ", res.data);

            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('');
            setErrs({}) // reset errors state if it was successful
            setConfirmReg("Thank you for registering! You can now log in!")
        })
        .catch((err) => {
            console.log(err)
            setErrs(err.response.data.errors)
        });
    };



    return (
        <div className="register-container">
            <h2>Register</h2>
            {
                confirmReg ?
                <h4 style={{color: "green"}}>{confirmReg}</h4>
                : null
            }
            <form className="register-form" onSubmit={register}>
                <div className="register-form-div">
                    <label>First Name</label>
                    {
                        errs.firstName ?
                        <span className="error-text">{errs.firstName.message}</span>
                        : null
                    }
                    <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="register-form-div">
                    <label>Last Name</label>
                    {
                        errs.lastName ?
                        <span className="error-text">{errs.lastName.message}</span>
                        : null
                    }
                    <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="register-form-div">
                    <label>Email</label>
                    {
                        errs.email ?
                        <span className="error-text">{errs.email.message}</span>
                        : null
                    }
                    <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="register-form-div">
                    <label>Password</label>
                    {
                        errs.password ?
                        <span className="error-text">{errs.password.message}</span>
                        : null
                    }
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="register-form-div">
                    <label>Confirm Password</label>
                    {
                        errs.confirmPassword ?
                        <span className="error-text">{errs.confirmPassword.message}</span>
                        : null
                    }
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div className="register-form-div register-form-button">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    )
}
