import styles from './layout.module.css'
import NavItem from './nav-item'
import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href='/'>
          <a>
            <h1 className={styles.title}>Delicious</h1>
          </a>
        </Link>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <nav className={styles.nav}>
          <NavItem type={'burger'} size={4} />
          <NavItem type={'fries'} size={4} />
          <NavItem type={'drink'} size={4} />
          <NavItem type={'dessert'} size={4} />
          <NavItem type={'order'} size={4} />
        </nav>
      </footer>
    </div>
  )
}

export default Layout
