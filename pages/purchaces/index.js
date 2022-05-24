import { useRouter } from 'next/router';

const Purchaces = () => {
    
    const router = useRouter();

    return (
        <>
            <div className="center">
                <title>👨‍💻 Exercise 3</title>
                <h1 className="title">
                    This is are your purchaces!
                </h1>
                <button className='general-button' onClick={() => router.push('/home')}>
                    Go Back Home
                </button>
            </div>
        </>
    )
}

export default Purchaces
