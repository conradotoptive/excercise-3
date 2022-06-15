import CartItem from "../../../components/cart/CartItem";
import { useRouter } from 'next/router';

const ItemCart = () => {
    
    const router = useRouter();

    return (
        <>
            <div className="center">
                <CartItem/>
                <br/>
                <button className='btn btn-primary' onClick={() => router.push('/cart')}>
                    Go Back
                </button>
            </div>
        </>
    )
}

export default ItemCart