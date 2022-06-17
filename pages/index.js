import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Delicious</title>
        <meta name='description' content='Fast Delicius Food for your heart' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Delicious</h1>
      </header>

      <main className={styles.main}>
        <Image
          src='/images/rrss-wp-burguer.jpeg'
          alt='burger'
          className={styles.image}
          layout='fill'
        />
        <p className={styles['main-text']}>{`The best burger that you didn't see ever!!!`}</p>
      </main>

      <footer className={styles.footer}>
        <div className={styles.rrss}>
          <a href='#'>
            <div className={styles.facebook}></div>
          </a>
          <a href='#'>
            <div className={styles.twitter}></div>
          </a>
          <a href='#'>
            <div className={styles.instagram}></div>
          </a>
          <a href='#'>
            <div className={styles.youtube}></div>
          </a>
          <a href='#'>
            <div className={styles.tiktok}></div>
          </a>
        </div>
        <Link href={'/menu/burgers'}>
          <a className={styles.go}>
            <div className={styles.icon}></div>
          </a>
        </Link>
      </footer>
    </div>
  )
}
