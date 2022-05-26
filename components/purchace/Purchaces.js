import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import { requestPurchaces, setCartItem } from "../../store/slices/cart/action";
import { requestOneProduct } from "../../store/slices/products/action";

const Purchaces = ({ purchaces }) => {

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(requestPurchaces());
    }, [])
    
    const handleSeeItemClick = (item) => {
        dispatch(setCartItem(item));
        dispatch(requestOneProduct(item.productId));
        router.push(`/purchaces/${item._id}`);
    }

    return (
        <>
            {
                (purchaces.list || []).map((purchace, index) => (
                    <div key={index} className="item-box">
                        {purchace.name}
                        <p/>
                        <button className="item-button" onClick={() => handleSeeItemClick(purchace)}>
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
        purchaces: state.cart
    };
};

export default connect(mapStateToProps)(Purchaces);