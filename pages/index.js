import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>👨‍💻 Exercise 3</title>
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to Exercise 3!
        </h1>
        <a href='/login'>
          Login
        </a>
      </main>
    </div>
  )
}
