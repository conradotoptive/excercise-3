
const home = () => {

    return (
        <div className='center'>
            <h1 className='title'>
                Home
            </h1>
            <button className='general-button' onClick={() => window.location='/userProfile'}>
                Profile
            </button>
            <p/>
            <button className='general-button' onClick={() => window.location='/cart'}>
                Cart
            </button>
            <p/>
            <button className='general-button' onClick={() => window.location='/purchaces'}>
                Purchaces
            </button>
            <p/>
            <button className='general-button' onClick={() => window.location='/products'}>
                Products
            </button>
            <p/>
            <button className='general-button' onClick={() => window.location='/'}>
                Log out
            </button>

        </div>
    )
}

export default home