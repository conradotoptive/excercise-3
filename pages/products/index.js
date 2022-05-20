import { useEffect } from "react";
import { getActiveProducts } from "../../store/services/productService";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/product/PoductItem";

const Products = () => {

    const { list: products } = useSelector(state => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getActiveProducts());
    }, [])
    
    return (
        <>
            <div className="center">
                <title>👨‍💻 Exercise 3</title>
                <h1 className="title">
                    This is the product catalogue!
                </h1>
                {
                    products.map((product, index) => (
                        <div key={index}>
                            {ProductItem(product)}
                        </div>
                    ))
                }
                <p/>
                <button className='general-button' onClick={() => window.location='home'}>
                    Go Back Home
                </button>
            </div>
        </>
    )
}

export default Products
