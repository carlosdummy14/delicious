import Image from 'next/image'
import AddIcon from './add-icon'
import styles from './item.module.css'
import { useAppContext } from '../context/state'

const Item = ({ image, name, resume, price, handleClick }) => {
  const { addItemToOrder } = useAppContext()

  return (
    <div className={styles.item}>
      <Image
        className={styles.image}
        src={image}
        width={800}
        height={800}
        objectFit='cover'
        alt={name}
        onClick={() => handleClick(name)}
      />
      <div className={styles.info}>
        <div className={styles.title}>{name}</div>
        <div className={styles.resume}>{resume}</div>
        <button
          className={styles.price}
          onClick={() =>
            addItemToOrder({
              image,
              name,
              price,
            })
          }
        >
          <div>$ {price}</div>
          <AddIcon />
        </button>
      </div>
    </div>
  )
}

export default Item
