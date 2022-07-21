import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppWrapper = ({ children }) => {
  const [order, setOrder] = useState([])

  const addItemToOrder = item => {
    setOrder([...order, item])
  }

  const newState = {
    order,
    addItemToOrder,
    totalItems: order.length,
  }

  return <AppContext.Provider value={newState}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  return useContext(AppContext)
}
