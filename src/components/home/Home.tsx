import ProductItem from '../product-item/ProductItem'
import styles from './Home.module.scss'
import Header from '../Header/Header'
import { useGetProductQuery } from '../../store/api'
import Pagination from './Pagination'
import { usePagination } from './usePagination'


function App() {
  const { isLoading, data } = useGetProductQuery(null)
  const { itemPerPage, currentItem, paginate } = usePagination()
  return (
    <div className={styles.home}>
      <Header />
      <h2>Топ товаров</h2>
      <div className={styles.main}>
        {
          isLoading ? <div>Loading...</div>
          : data ? currentItem?.map(product => <ProductItem key={product.id} product={product}/>)
          : <div>Knifes is not founded</div>
        }
    </div>
    <Pagination 
        itemPerPage={itemPerPage} 
        totalItem={data?.length}
        paginate={paginate} 
        />
        <footer>
          <p>&copy; Product store designed by Zaur</p>
          </footer>
    </div>
  )
}

export default App
