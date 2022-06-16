import { useRouter } from 'next/router';
import Products from '../components/product/Products';
import Paginator from '../components/shared/Paginator';

const Welcome= () => {

  const router = useRouter();

  return (
    <>
      <div className='center'>
        <h1 className="title">
          Product catalogue
        </h1>
        <Products/>
        <Paginator/>
      </div>
    </>
  )
}

export default Welcome;