import Head from 'next/head'
import OrderList from '../../components/order-list'
import Layout from '../../components/layout'

const Order = () => {
  return (
    <Layout>
      <Head>
        <title>Delicious Your Order</title>
      </Head>

      <OrderList />
    </Layout>
  )
}

export default Order
