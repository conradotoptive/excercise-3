import { connect, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import { requestPurchaces, setCartItem } from "../../store/slices/cart/action";
import { requestOneProduct } from "../../store/slices/products/action";

const Purchaces = ({ purchaces, user }) => {

    const dispatch = useDispatch();
    const router = useRouter();
    const userId = user.user._id;

    useEffect(() => {
        dispatch(requestPurchaces(userId));
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
                    <div key={index} className="list-group">
                        <button class="list-group-item list-group-item-action" onClick={() => handleSeeItemClick(purchace)}>
                            <div class="w-100 justify-content-between">
                                <h5 class="mb-1">{purchace.name}</h5>
                            </div>
                        </button>
                    </div>
                ))
            }
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        purchaces: state.cart,
        user: state.user,
    };
};

export default connect(mapStateToProps)(Purchaces);