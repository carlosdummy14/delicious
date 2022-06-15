import styles from './item.module.css'

const Item = ({ name }) => {
  return (
    <div className={styles.container}>
      <div>{name}</div>
      <div>image</div>
      <div>description</div>
      <div>price</div>
      <div>add</div>
    </div>
  )
}

export default Item
