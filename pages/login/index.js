import React, { useState } from 'react';

const Login = () => {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        e.preventDefault();
        setMail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const onClickLogIN = (e) => {
        e.preventDefault();
        return window.location ='/home'
    }

    const onClickRegister = (e) => {
        e.preventDefault();
        return window.location ='/register'
    }
    
    return (
        <div className='center'>
            <title>👨‍💻 Exercise 3</title>
            <h1 className='title'>
                This is the logIn!
            </h1>
            <form>
                <input
                    className='input-credentials'
                    value={mail}
                    type='text'
                    placeholder="e-mail"
                    onChange={handleEmailChange}
                />
                <p/>
                <input
                    className='input-credentials'
                    value={password}
                    type='text'
                    placeholder="password"
                    onChange={handlePasswordChange}
                />
                <p/>
                <button className='general-button' onClick={onClickLogIN}>
                    Log In
                </button>
                <p>
                    if you don't have and account, create one!
                </p>
                <button className='general-button' onClick={onClickRegister}>
                    Register
                </button>
            </form>
        </div>
    )
}

export default Login
