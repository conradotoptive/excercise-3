import Product from "../../../components/product/Product";
import { useRouter } from 'next/router';

const ProductItem = () => {
    
    const router = useRouter();

    return (
        <>
            <div className="center">
                <Product/>
                <br/>
                <button className='btn btn-primary' onClick={() => router.push('/products')}>
                    Go Back
                </button>
            </div>
        </>
    )
}

export default ProductItem