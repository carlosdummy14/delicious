import { useState } from 'react'

import Item from './item'
import styles from './items-list.module.css'
import Card from '../components/card'

const ItemList = ({ items }) => {
  const [visible, setVisible] = useState(false)
  const [itemOnCard, setItemOnCard] = useState({})

  const handleClick = key => {
    setItemOnCard(items.find(item => item.name === key))
    setVisible(!visible)
  }

  const handleVisible = () => setVisible(!visible)

  return (
    <section className={styles.list}>
      {items.map(item => (
        <Item {...item} key={item.name} handleClick={handleClick} />
      ))}
      {visible && <Card item={itemOnCard} setVisible={handleVisible} />}
    </section>
  )
}

export default ItemList
