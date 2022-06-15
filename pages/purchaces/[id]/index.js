import Purchace from "../../../components/purchace/Purchace";
import { useRouter } from 'next/router';

const ItemPurchaced = () => {
    
    const router = useRouter();

    return (
        <>
            <div className="center">
                <Purchace/>
                <br/>
                <button className='btn btn-primary' onClick={() => router.push('/purchaces')}>
                    Go Back
                </button>
            </div>
        </>
    )
}

export default ItemPurchaced