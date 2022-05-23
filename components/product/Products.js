import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { requestActiveProducts } from "../../store/slices/products/action";

const Products = ({ products }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestActiveProducts());
    }, [])


    return (
        <>
            {
                (products.productList || []).map((product, index) => (
                    <div key={index} className="item-box">
                        {product.name}
                        <p/>
                        <button className="item-button">
                            See Item
                        </button>
                    </div>
                ))
            }
        </>
    )
}

const mapStateToPops = (state) =>{
    return {
        products: state.products,
    };
};

export default connect(mapStateToPops)(Products);
