import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { requestCartItems, setCartItem } from "../../store/slices/cart/action";
import { useRouter } from 'next/router';
import { requestOneProduct } from "../../store/slices/products/action";

const CartItems = ({ items }) => {

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(requestCartItems());
    }, [])
    
    const handleSeeItemClick = (item) => {
        dispatch(setCartItem(item));
        dispatch(requestOneProduct(item.productId))
        router.push(`/cart/${item._id}`);
    }

    return (
        <>
            {
                (items.list || []).map((item, index) => (
                    <div key={index} className="item-box">
                        {item.name}
                        <p/>
                        <button className="item-button" onClick={() => handleSeeItemClick(item)}>
                            See Item
                        </button>
                    </div>
                ))
            }
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        items: state.cart,
    };
};

export default connect(mapStateToProps)(CartItems);