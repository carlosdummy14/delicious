import Head from 'next/head'
import ItemList from '../../components/items-list'
import Layout from '../../components/layout'
import { getItems } from '../../utils/menu'

export const getStaticProps = async params => ({
  props: {
    filteredData: await getItems('drink'),
  },
})

const Drinks = ({ filteredData }) => {
  return (
    <Layout>
      <Head>
        <title>Delicious Drinks</title>
      </Head>

      <ItemList items={filteredData} />
    </Layout>
  )
}

export default Drinks
