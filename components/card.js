import Image from 'next/image'
import AddIcon from './add-icon'
import styles from './card.module.css'

function Card({ setVisible, item }) {
  const { image, name, text } = item

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image layout='fill' objectFit='cover' src={image} alt={name} />
          <AddIcon className={styles.close} onClick={setVisible} />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
