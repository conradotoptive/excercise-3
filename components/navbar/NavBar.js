import { connect } from "react-redux";
import { useRouter } from 'next/router';

const NavBar = (user) => {

    const isUserLogged = user.user.isLogged;
    const router = useRouter();

    const handleProductsButtonClikc = () => {
        router.push('/products');
    }

    const handleProfileButtonClikc = () => {
        router.push('/userProfile');
    }

    const handleCartButtonClikc = () => {
        router.push('/cart');
    }

    const handlePurchacesButtonClikc = () => {
        router.push('/purchaces');
    }    

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="btn navbar-brand btn-link" onClick={handleProductsButtonClikc}>Products</button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isUserLogged ?
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="btn nav-link btn-link" onClick={handleProfileButtonClikc}>Profile</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn nav-link btn-link" onClick={handleCartButtonClikc}>Cart</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn nav-link btn-link" onClick={handlePurchacesButtonClikc}>Purchaces</button>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/products">Log Out</a>
                            </li>
                        </ul>
                    :
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Log In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">Register</a>
                            </li>
                        </ul>
                    }
                    
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) =>{
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(NavBar);