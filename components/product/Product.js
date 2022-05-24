import { connect, useDispatch } from "react-redux";
import { useRouter } from 'next/router';

const Product = ({ products, user, cart }) => {
    
    const router = useRouter();
    const dispatch = useDispatch();

    const product = products.product;
    const loggedUser = user.user;

    const handleAddToCartButton = () => {
        alert("Product added to the cart succesfully!");
    };

    return (
        <>
            <div className="item-box">
                <p> Product: {product.name} </p>
                <p> Price:  {product.price} </p>
                <p> Description:  {product.description} </p>
                <p> Shipment delivery time:  {product.shipmentDeliveryTime} </p>
                <p> Size:  {product.size} </p>
                <p> Quantity: {product.quantity} </p>
                <button className="item-button" onClick={() => handleAddToCartButton()}> 
                    Add to the Cart 
                </button>
            </div>
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        products: state.products,
        user: state.user,
        cart: state.cart,
    };
};

export default connect(mapStateToProps)(Product);