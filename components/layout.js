import styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Delicious</h1>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <nav>
          <div>burger</div>
          <div>fries</div>
          <div>post</div>
          <div>soda</div>
        </nav>
      </footer>
    </div>
  )
}

export default Layout
