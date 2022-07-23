import OrderItem from './order-item'
import styles from './order-list.module.css'

const OrderList = ({ items }) => {
  return (
    <section className={styles.list}>
      {items.map(item => (
        <OrderItem {...item} key={item.name} />
      ))}
    </section>
  )
}

export default OrderList
