const cart = () => {
    
    return (
        <div className="center">
            <h1 className="title">
                This is your cart!
            </h1>
            <button className='general-button' onClick={() => window.location='home'}>
                Go Back Home
            </button>
        </div>
    )
}

export default cart
