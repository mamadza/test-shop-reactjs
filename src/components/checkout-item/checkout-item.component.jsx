import React from 'react';
import './checkout-item.styles.scss';

import {connect}  from 'react-redux';
import { removeItemFromCartAction, decreaseItemCartAction, addNewItemToCart } from '../../redux/cart/cart.actions'


const CheckoutItem = ({ cartItem, removeItem, addNewItem, decreaseItem}) => {
    
    const {name, price, imageUrl, quantity} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">
                {name}
            </span>
            <span className="quantity">
                <span className="arrow" onClick={() => decreaseItem(cartItem)}>&#10094;</span>
                {quantity}
                <span className="arrow" onClick={() => addNewItem(cartItem)}>&#10095;</span>
            </span>
            <span className="price">
                {price}
            </span>
            <div className="remove-button" onClick={() => removeItem(cartItem)}>
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItemFromCartAction(item)),
    addNewItem: item => dispatch(addNewItemToCart(item)),
    decreaseItem: item => dispatch(decreaseItemCartAction(item)),
})
export default connect(null, mapDispatchToProps)(CheckoutItem);