import React, { useState } from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {

    const { cartItems} = useSelector(state => state.cart)

    const total = cartItems.reduce((p, c) => {
        return p + c.price;
    }, 0)



    return (
        <div class="cart-container">
            <div class="cart-product">

                {
                     cartItems.map(item => <CartItem key={item.id} item={item}/>)
                }
                
            </div>
            <div class="bill-section">
                <div class="bill-card">
                    <h1>TOTAL AMOUNT :</h1>
                    <h2>total</h2>
                    <button>PAY NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;
