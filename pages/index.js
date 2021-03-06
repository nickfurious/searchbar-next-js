import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Searchbar from '../components/Searchbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Searchbar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Searchbar />
    </div>
  )
}
