import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppWrapper = ({ children }) => {
  const [order, setOrder] = useState([])

  const addItemToOrder = itemReceived => {
    const { image, name, price } = itemReceived

    const itemToModify = order.find(item => item.name === name)

    let newOrder = []

    if (itemToModify) {
      const itemToAdd = { ...itemToModify, qty: itemToModify.qty + 1 }
      newOrder = [...order.filter(item => item.name !== itemToModify.name), itemToAdd]
    } else {
      const itemToAdd = {
        image,
        name,
        price,
        qty: 1,
      }
      newOrder = [...order, itemToAdd]
    }

    setOrder(newOrder)
  }

  const newState = {
    order,
    addItemToOrder,
    totalItems: order.reduce((totalItems, item) => totalItems + item.qty, 0),
  }

  return <AppContext.Provider value={newState}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  return useContext(AppContext)
}
