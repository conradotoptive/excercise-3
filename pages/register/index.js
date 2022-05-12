import { useState } from "react";

const register = () => {

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

    const onClickRegister = (e) => {
        e.preventDefault();
        return window.location ='/home'
    }

    return (
        <div className="center">
            <h1 className="title">
                This is the Register!
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
                <button className='general-button' onClick={onClickRegister}>
                    Register
                </button>
            </form>
        </div>
    )
}

export default register