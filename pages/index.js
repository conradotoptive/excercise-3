import Head from 'next/head'

export default function Welcome() {
  return (
    <div className='center'>
      <Head>
        <title>👨‍💻 Exercise 3</title>
      </Head>
        <h1 className='title'>
          Welcome to Exercise 3!
        </h1>
        <button className='general-button' onClick={() => window.location='/login'}>
          Log In
        </button>
        <p/>
        <button className='general-button' onClick={() => window.location='/register'}>
          Register
        </button>
    </div>
  )
}
