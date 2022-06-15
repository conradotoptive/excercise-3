import { connect, useDispatch } from "react-redux";

const Purchace = ({ products, cart }) => {

    const cartItem = cart.item;
    const product = products.product;

    return (
        <>
            <h1 className="title"> {product.name} </h1>
            <div className="item-box">
                <p> Price:  {product.price} </p>
                <p> Description:  {product.description} </p>
                <p> Shipment delivery time:  {product.shipmentDeliveryTime} </p>
                <p> Size:  {product.size} </p>
                <p> Quantity bought: {cartItem.quantity} </p>
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

export default connect(mapStateToProps)(Purchace);