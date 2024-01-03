import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
    const {cartItems} = useSelector(state => state.cart)
    

    return (
        <nav>
            <div class="logo">
                <Link to={"/"}>  <h1>MY.STORE</h1> </Link>
            </div>
            <div class="catagories">
                <a href="">ELECTRONICS</a>
                <a href="">JEWELERY</a>
                <a href="">MEN'S CLOTHING</a>
                <a href="">WOMEN'S CLOTHING</a>
                
                <Link to={"/cart"}> <button>CART ({cartItems.length})</button> </Link>

            </div>
        </nav>
    )
}

export default Navbar