import Image from 'next/image'
import AddIcon from './add-icon'
import MinusIcon from './minus-icon'
import styles from './order-item.module.css'
import { useAppContext } from '../context/state'

const OrderItem = ({ image, name, qty, price }) => {
  const { incrementItemOrder, decrementItemOrder, deleteItemOrder } = useAppContext()

  return (
    <div className={styles.item}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'
        role='img'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        viewBox='0 0 24 24'
        className={styles.cancel}
        onClick={() => deleteItemOrder(name)}
      >
        <path
          fill='currentColor'
          d='M7.7 16.3q.275.275.7.275q.425 0 .7-.275l2.9-2.9l2.925 2.925q.275.275.688.262q.412-.012.687-.287q.275-.275.275-.7q0-.425-.275-.7L13.4 12l2.925-2.925q.275-.275.262-.688q-.012-.412-.287-.687q-.275-.275-.7-.275q-.425 0-.7.275L12 10.6L9.075 7.675Q8.8 7.4 8.388 7.412q-.413.013-.688.288q-.275.275-.275.7q0 .425.275.7l2.9 2.9l-2.925 2.925q-.275.275-.262.687q.012.413.287.688ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z'
        />
      </svg>
      <Image
        className={styles.image}
        src={image}
        width={800}
        height={800}
        objectFit='cover'
        alt={name}
      />
      <div className={styles.info}>
        <div className={styles.title}>{name}</div>
        <div className={styles.quantity}>
          <span className={styles.small}>
            ${price} x {qty}
          </span>
          ${qty * price}
        </div>
        <div className={styles.buttons}>
          <button className={styles.price} onClick={() => decrementItemOrder(name)}>
            <MinusIcon />
          </button>
          <button className={styles.price} onClick={() => incrementItemOrder(name)}>
            <AddIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderItem
