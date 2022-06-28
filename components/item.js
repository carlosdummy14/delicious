import Image from 'next/image'
import AddIcon from './add-icon'
import styles from './item.module.css'

const Item = ({ image, name, resume, price, handleClick }) => {
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
        <div className={styles.price}>
          <div>$ {price}</div>
          <AddIcon />
        </div>
      </div>
    </div>
  )
}

export default Item
