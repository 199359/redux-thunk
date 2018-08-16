import React from 'react'

const LoginByEmailAndPassword = (props) => {
    return (
        <div>
            <div>
                <input type='email' value={props._emailValue} onChange={props._onEmailChange}></input>
            </div>
            <div>
                <input type='password' value={props._passwordValue} onChange={props._onPasswordChange}></input>
            </div>
            <div>
                <button onClick={props._onLogInClick}>
                    LOGIN
                </button>
            </div>
        </div>
    )
    }


export default LoginByEmailAndPassword