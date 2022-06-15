import { connect, useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { useState } from "react";
import { logInUser } from "../../store/slices/user/action";

const LogIn = () => {

    const router = useRouter();
    const dispatch = useDispatch();
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

    const onClickLogIN = async (e) => {
        e.preventDefault();
        if (!mail || !password) {
            alert("Please, complete all the fields");
        } else {
            const state = await (dispatch(logInUser(mail, password)) || "");
            if (state === 404){
                alert("This user not exist")
                return
            } 
            if (state === 401) {
                alert("Wrong credentials")
                return
            }
            alert("LogIn successfully");
            return router.replace('/products');
        
        }
    }

    const onClickRegister = (e) => {
        e.preventDefault();
        return router.push('/register');
    }

    return(
        <>
            <form className='form-container'>
                <div className='mb-3'>
                    <input
                        className='form-control'
                        value={mail}
                        type='text'
                        placeholder="e-mail"
                        onChange={handleEmailChange}
                    />
                </div>
                <div className='mb-3'>
                    <input
                        className='form-control'
                        value={password}
                        type='password'
                        placeholder="password"
                        onChange={handlePasswordChange}
                    />
                </div>
                <button className='btn btn-primary' onClick={onClickLogIN}>
                    Log In
                </button>
                <br/>
                <br/>
                <button className='btn btn-primary' onClick={onClickRegister}>
                    Register
                </button>
                <div id="emailHelp" className="form-text">If you dont have an account, create one!</div> 
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