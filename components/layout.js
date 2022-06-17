import styles from './layout.module.css'
import NavItem from './nav-item'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Delicious</h1>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <nav className={styles.nav}>
          <NavItem type={'burger'} size={50} />
          <NavItem type={'fries'} size={50} />
          <NavItem type={'drink'} size={50} />
          <NavItem type={'dessert'} size={50} />
          <NavItem type={'order'} size={50} />
        </nav>
      </footer>
    </div>
  )
}

export default Layout
