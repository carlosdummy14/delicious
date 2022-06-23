import Image from 'next/image'
import AddIcon from './add-icon'
import styles from './item.module.css'

const Item = ({ image, name, resume, price }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src={image}
          className={styles.image}
          width={500}
          height={400}
          objectFit='cover'
          alt={name}
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
    </div>
  )
}

export default Item
