import { connect, useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { buyItem } from "../../store/slices/cart/action";

const CartItem = ({ products, cart }) => {
    
    const router = useRouter();
    const dispatch = useDispatch();
    const cartItem = cart.item;
    const product = products.product

    const handleBuyButton = (id, item) => {
        dispatch(buyItem(id, item));
        alert("Product buyed succesfully!");
        router.replace('/cart');
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
                <button className="item-button" onClick={() => handleBuyButton(cartItem._id, cartItem)}> 
                    Buy
                </button>
            </div>
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        products: state.products,
        cart: state.cart,
    };
};

export default connect(mapStateToProps)(CartItem);