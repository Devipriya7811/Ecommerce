import React from "react";
import './Cart.css'
import remove_icon from '../Components/Assets/cart_cross_icon.png'
const Cart = () => {
    return (
        <div className="cart-items">
            <div className="cart-items-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Remove</p>
            </div>
            <hr />
        </div>
    )
}
export default Cart;