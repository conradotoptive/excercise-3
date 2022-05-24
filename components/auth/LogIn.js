import { connect, useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { useState } from "react";
import { logUserIn } from "../../store/slices/user/action";

const LogIn = () => {

    const router = useRouter();
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
        return router.replace('/home');
    }

    const onClickRegister = (e) => {
        e.preventDefault();
        return router.push('/register');
    }

    return(
        <>
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
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(LogIn);