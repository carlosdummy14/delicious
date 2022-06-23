import Item from './item'
import styles from './items-list.module.css'

const ItemList = ({ items }) => {
  return (
    <section className={styles.list}>
      {items.map(item => (
        <Item {...item} key={item.name} />
      ))}
    </section>
  )
}

export default ItemList
