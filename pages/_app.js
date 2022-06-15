import 'bootstrap/dist/css/bootstrap.css'
import '../styles/normalize.css';
import '../styles/globals.css';
import Head from "next/head";
import NavBar from '../components/navbar/NavBar';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { store, wrapper } from '../store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>👨‍💻 Exercise 3</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar/>
      <Provider store={store}>
        <div className='container'>
          <Component {...pageProps} />
        </div>
      </Provider>
    </>
  )  
}

export default wrapper.withRedux(MyApp);
