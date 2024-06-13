import { useActions } from "../../hooks/useActions"
import { useFavorites } from "../../hooks/useFavorites"
import { IProduct } from "../../types/product.types"
import styles from './FavoriteItem.module.scss'

interface IProductItem {
    product: IProduct
}

function FavoriteItem( {product}: IProductItem ) {
    const { favorites } = useFavorites()
    const { togleFavorites } = useActions()
    const isExist = favorites.some(p => p.id === product.id)
    return(
        <div className={styles.cardItem} key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className={styles.info}>
                <h3>Name: <span>{product.title}</span></h3>
                <p>{product.description}</p>
                <p>Price: <span>{product.price}$</span></p>
                {
                isExist ? <button style={{backgroundColor: '#99280f'}} onClick={() => togleFavorites(product)}>Удалить из избранных</button>
                : <button style={{backgroundColor: '#003225'}} onClick={() => togleFavorites(product)}>Добавить в избранное</button>
                }
            </div>
        </div>
    )
}

export default FavoriteItem