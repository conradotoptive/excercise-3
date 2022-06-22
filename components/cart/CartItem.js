import { connect, useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { buyItem } from "../../store/slices/cart/action";
import { updateQuantity } from "../../store/slices/products/action";
import { walletUpdate } from "../../store/slices/user/action";
import { useState } from "react";

const CartItem = ({ products, cart, user }) => {
    
    const router = useRouter();
    const dispatch = useDispatch();
    const cartItem = cart.item;
    const product = products.product
    const loggedUser = user.user;
    const [itemQuantity, setItemQuantity] = useState(1);

    const handleBuyButton = async (id, item, productt, idUser, userr) => {
        const res = await dispatch(walletUpdate(idUser, userr, productt.price * itemQuantity));
        if (res === 404) {
            alert("Not enought money to buy this item");
            return;
        }
        const res2 = await dispatch(updateQuantity(productt._id, productt, itemQuantity));
        if (res2 === 404) {
            alert("Not enought quantity of items");
            return;
        }
        dispatch(buyItem(id, item, itemQuantity));
        alert("Product buyed succesfully!");
        router.replace('/cart');
    };

    const handleAddButton = () => {
        if (itemQuantity === product.quantity){
            return null;
        }
        setItemQuantity(itemQuantity + 1);
    }

    const handleSubButton = () => {
        if (itemQuantity === 1) {
            return null;
        }
        setItemQuantity(itemQuantity - 1);
    }

    return (
        <>
            <h1 className="title"> {product.name} </h1>
            <div className="item-box">
                <p> Price:  {product.price} </p>
                <p> Description:  {product.description} </p>
                <p> Shipment delivery time:  {product.shipmentDeliveryTime} </p>
                <p> Size:  {product.size} </p>
                <p> Quantity: {product.quantity} </p>
                <button className="btn btn-secondary" onClick={handleSubButton}>
                    -
                </button>
                <span> {itemQuantity} </span>
                <button className="btn btn-secondary" onClick={handleAddButton}>
                    +
                </button>
                <p/>
                <button className="btn btn-success" onClick={() => handleBuyButton(cartItem._id, cartItem, product, loggedUser._id, loggedUser)}> 
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
        user: state.user,
    };
};

export default connect(mapStateToProps)(CartItem);