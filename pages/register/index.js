import { useState } from "react";

const Register = () => {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const handleEmailChange = (e) => {
        e.preventDefault();
        setMail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const handleUserNameChange = (e) => {
        e.preventDefault();
        setUserName(e.target.value);
    }

    const onClickRegister = (e) => {
        e.preventDefault();
        return window.location ='/home'
    }

    return (
        <div className="center">
            <title>👨‍💻 Exercise 3</title>
            <h1 className="title">
                This is the Register!
            </h1>
            <form>
                <input
                    className='input-credentials'
                    value={mail}
                    type='text'
                    placeholder="E-mail"
                    onChange={handleEmailChange}
                />
                <p/>
                <input
                    className='input-credentials'
                    value={userName}
                    type='text'
                    placeholder="User Name"
                    onChange={handleUserNameChange}
                />
                <p/>
                <input
                    className='input-credentials'
                    value={password}
                    type='text'
                    placeholder="Password"
                    onChange={handlePasswordChange}
                />
                <p/>
                <button className='general-button' onClick={onClickRegister}>
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register