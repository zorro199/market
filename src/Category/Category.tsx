import Header from '../components/Header/Header'
import styles from '../Category/Category.module.scss'
import { useGetProductQuery } from '../store/api'
import { useMemo, useState } from 'react'
import FavoriteItem from '../components/product-item/FavoriteItem'

function Category() {
    const { data } = useGetProductQuery(null)
    const [category, setCategory] = useState("men's clothing")
    useMemo(() => 
        category, [category])
    return (
        <div className={styles.wrapper}>
        <Header />
        <div className={styles.category}>
            <ul>
                <li><button onClick={() => setCategory("men's clothing")}>Мужская одежда</button></li>
                <li><button onClick={() => setCategory("women's clothing")}>Женская одежда</button></li>
                <li><button onClick={() => setCategory("jewelery")}>Украшения</button></li>
                <li><button onClick={() => setCategory("electronics")}>Электроника</button></li>
            </ul>
        </div>
            <div className={styles.favorites}>
                {
                    data?.filter(item => item.category === category).map(product => (
                        <FavoriteItem key={product.id} product={product}/>
                    ))
                }
            </div>
            <footer>
                <p>&copy; Product store designed by Zaur</p>
            </footer>
        </div>
    )
}

export default Category