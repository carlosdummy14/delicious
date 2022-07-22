import Head from 'next/head'
import ItemList from '../../components/items-list'
import Layout from '../../components/layout'
import { useAppContext } from '../../context/state'

const Order = () => {
  const { order } = useAppContext()

  return (
    <Layout>
      <Head>
        <title>Delicious Your Order</title>
      </Head>

      <ItemList items={order} />
    </Layout>
  )
}

export default Order
