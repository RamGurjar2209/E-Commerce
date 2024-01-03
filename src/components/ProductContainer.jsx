import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../features/products/productSlice'

const ProductContainer = () => {

    const dispatch = useDispatch()

    const { products, isSuccess, isError, isLoading } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, []);


    if (isError) {
        return (
            <div class="products-container">
                <div class="all-products">
                    <h1>Something Went Wrong!!!</h1>
                </div>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div class="products-container">
                <div class="all-products">
                    <h1>Loading...</h1>
                </div>
            </div>
        )
    }



    return (
        <div class="products-container">
            <div class="all-products">
                <h1>ALL PRODUCTS</h1>
            </div>

            <div class="card-container">
                {
                    products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}

export default ProductContainer