import React from 'react';
import './cart-dropdown.styles.scss';

import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.components';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden }  from '../../redux/cart/cart.actions';

const CartDropDown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length 
                    ?
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    :
                        <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => { 
                dispatch(toggleCartHidden())
                history.push('/checkout')
            }}>Go to checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});
 
export default withRouter(connect(mapStateToProps)(CartDropDown));