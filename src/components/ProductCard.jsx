import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../features/cart/cartSlice'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(add(item));

    }

    return (
        <div class="card">
            <div class="img-container">
                <img src={product.thumbnail} alt="" />
            </div>
            <div class="product-title">
                <h2>{product.title}</h2>
            </div>
            <div class="price-cart">
                <h3>PRICE: {product.price}</h3>
                <button onClick={() => handleAdd(product)}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductCard