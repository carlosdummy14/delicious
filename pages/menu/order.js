import Head from 'next/head'
import OrderList from '../../components/order-list'
import Layout from '../../components/layout'
import { useAppContext } from '../../context/state'

const Order = () => {
  const { order } = useAppContext()

  return (
    <Layout>
      <Head>
        <title>Delicious Your Order</title>
      </Head>

      <OrderList items={order} />
    </Layout>
  )
}

export default Order
