import Head from 'next/head'
import ItemList from '../../components/items-list'
import Layout from '../../components/layout'

const Burgers = () => {
  return (
    <Layout>
      <Head>
        <title>Delicious Desserts</title>
      </Head>

      <ItemList
        items={[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
          26, 27, 28, 29, 30,
        ]}
      />
    </Layout>
  )
}

export default Burgers
