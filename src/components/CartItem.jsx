import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../features/cart/cartSlice'

const CartItem = ({ item, count }) => {

    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(remove(id))
    }





    return (

        <div class="product-card">
            <section>
                <div class="cart-product-img">
                    <img src={item.thumbnail} alt="" />
                </div>
                <div class="cart-product-details">
                    <h1>{item.title}</h1>
                    <h2>RATE: ${item.price}</h2>
                </div>
            </section>

            <button class="remove-button" onClick={() => handleRemove(item.id)}>REMOVE ITEM</button>
        </div>

    )
}

export default CartItem
