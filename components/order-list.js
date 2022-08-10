import { useAppContext } from '../context/state'
import OrderItem from './order-item'
import styles from './order-list.module.css'

const OrderList = () => {
  const { order, totalOrder } = useAppContext()

  return (
    <>
      <section className={styles.list}>
        {order.map(item => (
          <OrderItem {...item} key={item.name} />
        ))}
        <div className={styles.total}>Total: $ {totalOrder}</div>
      </section>
    </>
  )
}

export default OrderList
