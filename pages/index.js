import { useRouter } from 'next/router';
import Products from '../components/product/Products';

const Welcome= () => {

  const router = useRouter();

  return (
    <>
      <div className='center'>
        <h1 className="title">
          This is the product catalogue!
        </h1>
        <Products />
      </div>
    </>
  )
}

export default Welcome;