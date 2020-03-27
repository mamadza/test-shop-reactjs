import React from 'react';
import './cart-dropdown.styles.scss';

import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.components';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropDown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});
 
export default connect(mapStateToProps)(CartDropDown);