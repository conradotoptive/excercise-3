import Products from "../../components/product/Products";

const ProductsPage = () => {
    
    return (
        <>
            <div className="center">
                <title>👨‍💻 Exercise 3</title>
                <h1 className="title">
                    This is the product catalogue!
                </h1>
                <Products/>
                <p/>
                <button className='general-button' onClick={() => window.location='home'}>
                    Go Back Home
                </button>
            </div>
        </>
    )
}

export default ProductsPage
